import React from 'react';
import Layout from '../components/Layout';

export function BlogCard ({ slug, title, date, picUrl }) {
  const href = `/blogs/${slug}`;

  return <article
    className="shadow-[0_2px_4px_rgba(149,146,157,0.15)] rounded-2xl w-full flex flex-col"
  >
    <figure>
      <a href={href}>
        <img src={picUrl} alt="iamge" className="w-full h-40 object-cover rounded-t-2xl" />
      </a>
    </figure>
    <div className="p-5 min-h-[180px] flex flex-col font-medium">
      <div className="flex justify-between space-x-6 mb-3 text-black">
        <time dateTime="2023-07-17 18:59:49" className="text-sm">{ date }</time>
        <div className="border-b grow relative -top-2"></div>
      </div>
      <h2 className="text-[21px] mb-4 tracking-tight leading-[26px]">
        <a href={href}>{ title }</a>
      </h2>
      <a
        className="flex items-center mt-auto text-[13px] text-black"
        href={href}
      >
        Lire la suite
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </a>
    </div>
  </article>
}

export default function Blogs({ pathContext, pageContext }) {
  const { blogInfo } = pageContext || pathContext || {};
  return (
    <Layout>
      {/* Title */}
      <section
        className="flex items-center justify-center min-h-[200px] text-center text-black relative pt-52 pb-28 max-md:pb-16 max-md:pt-48 overflow-hidden"
        id="banner"
      >
        <div className="container relative">
          <div
            className="max-lg:w-2/3 max-md:w-full flex flex-col items-center w-1/2 mx-auto"
          >
            <div className="banner-title-wrap relative">
              <span
                className="px-4 py-1 bg-gradient-to-r from-purple-100 via-purple-200 to-slate-200 rounded-md"
                >Dernières actualités</span
              >
              <h1
                className="text-[55px] font-golos -tracking-wide font-semibold text-black mb-8 mt-4 opacity-0 transition-all ease-out translate-y-7 group-[.page-loaded]/body:opacity-100 group-[.page-loaded]/body:translate-y-0"
              >
                Bienvenue sur notre blog
              </h1>
              <p className="text-[20px] font-medium text-[#0E3F58]">
                Explorez de nouvelles perspectives pour optimiser votre activité.
                Notre blog est dédié à la communauté de la restauration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Listing area */}
      <section className="page-content">
        <div className="container mb-20">
          <div
            className="grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16"
          >
            {
              Array.isArray(blogInfo) ? blogInfo.map(item => <BlogCard key={item.title} {...item} />) : null
            }
          </div>
        </div>
      </section>
    </Layout>
  );
}
