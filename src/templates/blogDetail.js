import React from "react"
import Layout from '../components/Layout';
import styles from '../styles/blogDetail.module.css';

function Content ({ tag, content }) {
  let Node = null;
  switch (tag) {
    case 'h2':
      Node = <h2>{ content }</h2>;
      break;
    case 'p':
      Node = <p dangerouslySetInnerHTML={{ __html: content }}></p>;
      break;
  }
  if (!Node) return null;
  return Node;
}

const ProjectDetails = ({ pageContext, pathContext }) => {
  const {
    title,
    subtitle,
    picUrl,
    tags,
    category,
    content,
  } = pageContext || pathContext || {};


  return (
    <Layout>
      {/* Banner as title */}
      <section
        className="flex items-center justify-center min-h-[200px] text-center text-black relative pt-52 pb-28 max-md:pb-16 max-md:pt-48 overflow-hidden"
        id="banner"
      >
        <div className="container relative">
          <div
            className="max-lg:w-2/3 max-md:w-full flex flex-col items-center w-1/2 mx-auto"
          >
            <div className="banner-title-wrap relative">
              <a
                className="text-black font-normal"
                href=""
              >
                <span
                  className="px-4 py-1 bg-gradient-to-r from-purple-100 via-purple-200 to-slate-200 rounded-md"
                >
                  { category }
                </span>
              </a>
              <h1
                className="text-[55px] font-golos -tracking-wide font-semibold text-black mb-8 mt-4 opacity-0 transition-all ease-out translate-y-7 group-[.page-loaded]/body:opacity-100 group-[.page-loaded]/body:translate-y-0"
              >
                { title }
              </h1>
              <p className="text-[20px] font-medium text-[#0E3F58]">
                { subtitle }
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container mb-20">
          <div className="feature-image mb-10 mx-auto">
            <img src={picUrl} alt="alt" className="w-full rounded-3xl" />
          </div>
          <div className={`content lg:w-9/12 w-full mx-auto ${styles.content}`}>
            {
              Array.isArray(content) && content.map((ele, idx) => <Content key={idx} {...ele} />)
            }
          </div>
          <div className="flex justify-between mt-20">
            <div className="flex items-center space-x-2 text-[13px] font-normal">
              <div className="text-black">Tags:</div>
              <div className="flex space-x-1">
                {
                  Array.isArray(tags) && (tags.map(tag => <a
                    key={tag}
                    className="bg-gray-200 rounded-md px-3 py-1 flex items-center hover:text-black"
                  >{tag}</a>))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
 
export default ProjectDetails;