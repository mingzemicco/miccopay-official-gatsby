const { google } = require("googleapis")
require("dotenv").config()

const SHEET_ID =
  process.env.SHEET_ID ?? "10VWdzJTEzmQDixlSX2nRlo-IIvVBVyKUNBj5S_kcTp4"

const SHEET_NAME = process.env.SHEET_NAME ?? "platbook"

const Title = {
  ORDER: "order",
  TITLE: "title",
  PIC_URL: "picUrl",
  CATEGORY: "category",
  DATE: "date",
  SUBTITLE: "subtitle",
  CONTENT: "content",
  TAGS: "tags",
  SLUG: "slug",
}

function lineFormat(str) {
  const idx = str.indexOf("|")
  if (idx < 0) return null
  const tag = str.substring(0, idx).toLowerCase()
  const content = str.substring(idx + 1)
  return { tag, content }
}

function formatContet(str) {
  return str
    .split("\n")
    .filter(line => line !== "START" && line !== "END")
    .map(lineFormat)
}

async function getConfigFromGSheet(limit) {
  // Auth
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  })

  const sheets = google.sheets({ version: "v4", auth })

  // Query Config
  const range = `${SHEET_NAME}!A${1}:I${2}`

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range,
  })

  const [rowCntRow, titleRow] = response.data.values
  const TotalCnt = Number(rowCntRow[1])
  if (!TotalCnt)
    throw new Error(
      "In the first row, the value in the second column should be a valid number"
    )
  const TitleOrderMap = {}
  titleRow.forEach((title, idx) => {
    TitleOrderMap[idx] = title
  })
  let lastRowIdx = Math.max(3, 2 + TotalCnt)
  if (limit) lastRowIdx = Math.min(2 + limit, lastRowIdx)
  const rows = await sheets.spreadsheets.values
    .get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A3:I${lastRowIdx}`,
    })
    .then(response => response.data.values)
  const ret = []
  for (const row of rows) {
    const obj = {}
    for (const idx in row) {
      const key = TitleOrderMap[idx]
      if (key === Title.CONTENT) obj.content = formatContet(row[idx])
      else if (key === Title.TAGS) obj.tags = row[idx].split(",")
      else obj[key] = row[idx]
    }
    ret.push(obj)
  }
  return ret
}

module.exports = {
  getConfigFromGSheet,
  Title,
}
