import React from "react"
import { BlogCard } from './blogList';
import Layout from '../components/Layout';


export default function Index(props) {
  
  const { blogInfo } = props.pageContext || props.pathContext || {};

  return (
    <Layout index>
      <>
        {/* Landing Section */}
        <section
          className="site-section flex items-center justify-center min-h-screen text-center text-white relative py-52 max-md:pb-16 max-md:pt-48 overflow-hidden bg-gradient-to-br from-[#3655df] via-[#A068FA] via-70% to-[#327BD1]"
          id="banner"
        >
          <canvas
            id="banner-bg"
            className="absolute top-0 start-0 w-full-h-full"
            width="2834"
            height="1842"
          ></canvas>
          <div className="container relative">
            <div className="sm:4/5 flex flex-col items-center mx-auto">
              <h6
                className="rounded-2xl px-3 py-1 mb-8 bg-white bg-opacity-15 text-white relative overflow-hidden transition-all ease-out opacity-0 translate-y-6 blur-lg group-[.page-loaded]/body:opacity-100 group-[.page-loaded]/body:translate-y-0 group-[.page-loaded]/body:blur-0"
              >
                <div
                  className="banner-subtitle-gradient absolute -inset-3 blur-3xl transition-all duration-500 group-[.page-loaded]/body:opacity-0"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-violet-600 to-red-500 animate-hue-rotate"
                  ></div>
                </div>
                <span className="relative">MiccoPay</span>
                <span className="dot relative"></span>
                <span className="opacity-60 relative">Modernisez vos restaurants</span>
              </h6>
              <div className="banner-title-wrap relative">
                <h1
                  className="banner-title sm:fSize-36 mb-7 font-golos -tracking-wide font-bold text-white opacity-0 transition-all ease-out translate-y-7 group-[.page-loaded]/body:opacity-100 group-[.page-loaded]/body:translate-y-0"
                >
                  Vos clients pouvent
                  <hr style={{ width: 0 }} />
                  <span
                    className="lqd-text-rotator inline-grid grid-cols-1 grid-rows-1 transition-[width] duration-200"
                    style={{ width: '223px' }}
                  >
                    <span
                      className="lqd-text-rotator-item inline-flex col-start-1 row-start-1 transition-all duration-300 opacity-0 blur-sm translate-x-3 [&.lqd-is-active]:blur-0 [&.lqd-is-active]:opacity-100 [&.lqd-is-active]:translate-x-0"
                    >
                      <span>Scanner</span>
                    </span>
                    <span
                      className="lqd-text-rotator-item inline-flex col-start-1 row-start-1 transition-all duration-300 opacity-0 blur-sm translate-x-3 [&.lqd-is-active]:blur-0 [&.lqd-is-active]:opacity-100 [&.lqd-is-active]:translate-x-0 lqd-is-active"
                    >
                      <span>Payer</span>
                    </span>
                    <span
                      className="lqd-text-rotator-item inline-flex col-start-1 row-start-1 transition-all duration-300 opacity-0 blur-sm translate-x-3 [&.lqd-is-active]:blur-0 [&.lqd-is-active]:opacity-100 [&.lqd-is-active]:translate-x-0"
                    >
                      <span>Commander</span>
                    </span>
                  </span>
                  <svg
                    className="inline lqd-split-text-words transition-all duration-[2850ms] sm:size-36"
                    width="47"
                    height="62"
                    viewBox="0 0 47 62"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.95 0L0 38.213H18.633V61.141L46.583 22.928H27.95V0Z"
                    ></path>
                  </svg>
                </h1>
              </div>
              <p
                className="mb-7 max-sm:w-full w-3/4 text-[20px] leading-[1.25em] text-fuchsia-700 opacity-75 [&_.lqd-split-text-words]:transition-all [&_.lqd-split-text-words]:ease-out [&_.lqd-split-text-words]:opacity-0 [&_.lqd-split-text-words]:translate-y-3 group-[.page-loaded]/body:[&_.lqd-split-text-words]:opacity-100 group-[.page-loaded]/body:[&_.lqd-split-text-words]:translate-y-0 group-[.page-loaded]/body:[&_.lqd-split-text-words]:text-white"
                style={{ color: '#fff' }}
              >
                avec notre QR code et<br />
                c'est gratuit pour vous 😊
              </p>
              <div
                className="transition-all delay-[450ms] opacity-0 translate-y-3 group-[.page-loaded]/body:opacity-100 group-[.page-loaded]/body:translate-y-0"
              >
                <a
                  href="https://miccopay-staging.web.app/?table=001&restaurantId=wokgrill-78390-1"
                  className="inline-flex items-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-black hover:bg-black hover:text-white border-[2px] border-[#343C57] bg-[#343C57] text-white py-4 px-7 rounded-xl font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center relative z-10">
                    <svg
                      className="!me-2"
                      width="11"
                      height="14"
                      viewBox="0 0 47 62"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.95 0L0 38.213H18.633V61.141L46.583 22.928H27.95V0Z"
                      ></path>
                    </svg>
                    Essayer MiccoPay
                  </span>
                </a>
              </div>
              <br />
            </div>
          </div>
          <div className="banner-divider absolute -bottom-[2px] inset-x-0">
            <svg
              className="fill-body-bg w-full h-auto"
              width="1440"
              height="105"
              viewBox="0 0 1440 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 0C240 68.7147 480 103.072 720 103.072C960 103.072 1200 68.7147 1440 0V104.113H0V0Z"
              ></path>
            </svg>
          </div>
        </section>
        {/* Features Section */}
        <section
          id="features"
          className="site-section py-10 md:opacity-0 md:translate-y-8 transition-all duration-700 [&.lqd-is-in-view]:opacity-100 [&.lqd-is-in-view]:translate-y-0"
        >
          <div className="container">
            <div className="p-10 border rounded-[50px] max-sm:px-6 max-sm:py-16">
              <header
                className="mx-auto text-center w-2/5 mb-14 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full"
              >
                <h6
                  className="inline-block py-1 px-3 mb-6 rounded-md text-[13px] font-medium text-[#60027C] bg-[#BA6EF4] bg-opacity-15"
                  style={{ color: '#fff' }}
                >
                  MiccoPay
                  <span className="dot"></span>
                  <span className="opacity-80">Nos fonctionnalités</span>
                </h6>
                <h2 className="mb-[0.45em]">Pourquoi choisir MiccoPay ?</h2>
                <p className="text-[18px] leading-[1.444em]">
                  notre appli conçue pour simplifier la gestion et améliorer
                  l'expérience de vos clients
                </p>
              </header>
              <div
                className="max-lg:grid-cols-2 max-md:grid-cols-1 grid grid-cols-3 gap-3"
              >
                <div
                  className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg"
                >
                  <figure
                    className="relative z-0 inline-block transition-all duration-300 group-hover:scale-105"
                  >
                    <img
                      className="-mx-8 max-w-[calc(100%+4rem)]"
                      src="/menu-virtuel.png"
                      alt="Menu Virtuel"
                      width="696"
                      height="426"
                    />
                  </figure>
                  <div className="pt-6 relative shrink">
                    <h4 className="mb-3 font-bold">
                      Menu Virtuel
                    </h4>
                    <p className="text-[14px]">
                      Augmente l'efficacité du service et réduit le nombre de
                      serveuses nécessaires.
                    </p>
                  </div>
                </div>
                <div
                  className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg"
                >
                  <figure
                    className="relative z-0 inline-block transition-all duration-300 group-hover:scale-105"
                  >
                    <img
                      className="-mx-8 max-w-[calc(100%+4rem)]"
                      src="/paiement-sans-contact.png"
                      alt="paiement sans contact"
                      width="696"
                      height="426"
                    />
                  </figure>
                  <div className="pt-6 relative shrink">
                    <h4 className="mb-3 font-bold">
                      Paiement sans contact
                    </h4>
                    <p className="text-[14px]">
                      Une alternative plus sécurisée, efficace et hygiénique qui
                      satisfait vos clients.
                    </p>
                  </div>
                </div>
                <div
                  className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg"
                >
                  <figure
                    className="relative z-0 inline-block transition-all duration-300 group-hover:scale-105"
                  >
                    <img
                      className="-mx-8 max-w-[calc(100%+4rem)]"
                      src="/avis-positive.png"
                      alt="Multilingual"
                      width="696"
                      height="426"
                    />
                  </figure>
                  <div className="pt-6 relative shrink">
                    <h4 className="mb-3 font-bold">
                      Avis positif sur Google
                    </h4>
                    <p className="text-[14px]">
                      Vos clients satisfaits sont encouragés à laisser un
                      commentaire sur Google d’avis.
                    </p>
                  </div>
                </div>
                <div
                  className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg"
                >
                  <figure
                    className="relative z-0 inline-block transition-all duration-300 group-hover:scale-105"
                  >
                    <img
                      className="-mx-8 max-w-[calc(100%+4rem)]"
                      src="/services-assistance.png"
                      alt="Service d'assistance"
                      width="696"
                      height="426"
                    />
                  </figure>
                  <div className="pt-6 relative shrink">
                    <h4 className="mb-3 font-bold">
                      Service d'assistance
                    </h4>
                    <p className="text-[14px]">
                      Nous sommes là pour répondre à vos questions et résoudre les
                      problèmes que vous rencontreriez.
                    </p>
                  </div>
                </div>
                <div
                  className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg"
                >
                  <figure
                    className="relative z-0 inline-block transition-all duration-300 group-hover:scale-105"
                  >
                    <img
                      className="-mx-8 max-w-[calc(100%+4rem)]"
                      src="/integration-facile.png"
                      alt="Intégration facile"
                      width="696"
                      height="426"
                    />
                  </figure>
                  <div className="pt-6 relative shrink">
                    <h4 className="mb-3 font-bold">
                      Intégration facile
                    </h4>
                    <p className="text-[14px]">
                      Connectez-vous facilement et profitez rapidement de toutes les
                      fonctionnalités de notre solution.
                    </p>
                  </div>
                </div>
                <div
                  className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg"
                >
                  <figure
                    className="relative z-0 inline-block transition-all duration-300 group-hover:scale-105"
                  >
                    <img
                      className="-mx-8 max-w-[calc(100%+4rem)]"
                      src="/qr-code.png"
                      alt="Personnalisation du QR code"
                      width="696"
                      height="426"
                    />
                  </figure>
                  <div className="pt-6 relative shrink">
                    <h4 className="mb-3 font-bold">
                      Personnalisation du<br />
                      QR code
                    </h4>
                    <p className="text-[14px]">
                      Nous adaptons le design et les couleurs de la carte QR code à
                      l'image de votre restaurant."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Explanation Section */}
        <section
          className="site-section py-10 md:opacity-0 md:translate-y-8 transition-all duration-700 [&.lqd-is-in-view]:opacity-100 [&.lqd-is-in-view]:translate-y-0"
          id="explanation"
        >
          <div className="container">
            <div
              className="p-10 py-24 bg-[#010101] rounded-[50px] shadow-xl text-white text-opacity-60 max-sm:px-5 bg-cover"
              style={{ background: 'linear-gradient(180deg, #ba6ef4 0%, #4b1079 100%)' }}
            >
              <div
                className="mb-14 max-xl:w-1/2 max-lg:w-8/12 max-md:w-full w-2/5 mx-auto text-center"
              >
                <h2 className="color-white text-[64px] leading-none max-sm:text-[45px]">
                  Juste besoin de scanner
                </h2>
              </div>
              <div className="gap-7 max-md:grid-cols-1 grid grid-cols-3 mb-20 content">
                <div
                  className="flex flex-col items-center font-medium text-center max-w-[270px] mx-auto text-xl group"
                >
                  <span
                    className="w-16 h-16 grid place-content-center text-[26px] font-medium border-opacity-15 border-[2px] border-[#A2B2C9] rounded-full mb-10 transition-all group-hover:bg-white group-hover:border-white group-hover:text-black group-hover:-translate-y-2 group-hover:scale-110"
                    >1</span
                  >
                  <p className="title">Tourner les tables plus vite</p>
                  <p className="content">
                    En moyenne, les restaurants gagnent 15 minutes par table,
                    permettant de tourner les tables plus rapidement
                  </p>
                </div>
                <div
                  className="flex flex-col items-center font-medium text-center max-w-[270px] mx-auto text-xl group"
                >
                  <span
                    className="w-16 h-16 grid place-content-center text-[26px] font-medium border-opacity-15 border-[2px] border-[#A2B2C9] rounded-full mb-10 transition-all group-hover:bg-white group-hover:border-white group-hover:text-black group-hover:-translate-y-2 group-hover:scale-110"
                    >2</span
                  >
                  <p className="title">Augmenter le panier moyen</p>
                  <p className="content">
                    15% de chiffre d'affaire en plus, avec la simplification
                    d'emporter à la fin du repas
                  </p>
                </div>
                <div
                  className="flex flex-col items-center font-medium text-center max-w-[270px] mx-auto text-xl group"
                >
                  <span
                    className="w-16 h-16 grid place-content-center text-[26px] font-medium border-opacity-15 border-[2px] border-[#A2B2C9] rounded-full mb-10 transition-all group-hover:bg-white group-hover:border-white group-hover:text-black group-hover:-translate-y-2 group-hover:scale-110"
                    >3</span
                  >
                  <p className="title">Augmenter le pourboire</p>
                  <p className="content">
                    Plus de 50% taux d'augmentation d'ajouter un pourboire ou un
                    arrondi, c'est fun et cool
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Menu section */}
        <section
          id="menu"
          className="site-section py-20 md:opacity-0 md:translate-y-8 transition-all duration-700 [&.lqd-is-in-view]:opacity-100 [&.lqd-is-in-view]:translate-y-0"
        >
          <div className="container">
            <div
              className="max-lg:grid-cols-2 max-md:grid-cols-1 grid grid-cols-3 gap-4"
            >
              <div
                className="lqd-color-box flex items-center py-5 px-9 gap-4 rounded-[15px] transition-all hover:shadow-lg hover:-translate-y-2 text-[#CBA153] bg-[#CBA153] bg-opacity-[0.07] hover:shadow-[#cba15326]"
              >
                <span
                  className="flex-unset lqd-box-dot w-6 h-6 border border-[8px] border-white rounded-full shadow-lg !bg-current"
                ></span>
                <h3 className="text-xl text-inherit -tracking-tight flex-1">Buffet</h3>
                <img
                  className="flex-unset menu-img"
                  src="/menu-buffet.png"
                  alt="Buffet"
                  title="Buffet"
                />
              </div>
              <div
                className="lqd-color-box flex items-center py-5 px-9 gap-4 rounded-[15px] transition-all hover:shadow-lg hover:-translate-y-2 text-[#AB7FE6] bg-[#AB7FE6] bg-opacity-[0.07] hover:shadow-[#ab7fe621]"
              >
                <span
                  className="flex-unset lqd-box-dot w-6 h-6 border border-[8px] border-white rounded-full shadow-lg !bg-current"
                ></span>
                <h3 className="flex-1 text-xl text-inherit -tracking-tight">Sushi</h3>
                <img
                  className="flex-unset menu-img"
                  src="/menu-sushi.png"
                  alt="Sushi"
                  title="Sushi"
                />
              </div>
              <div
                className="lqd-color-box flex items-center py-5 px-9 gap-4 rounded-[15px] transition-all hover:shadow-lg hover:-translate-y-2 text-[#57CBC6] bg-[#57CBC6] bg-opacity-[0.07] hover:shadow-[#57cbc624]"
              >
                <span
                  className="flex-unset lqd-box-dot w-6 h-6 border border-[8px] border-white rounded-full shadow-lg !bg-current"
                ></span>
                <h3 className="flex-1 text-xl text-inherit -tracking-tight">Wok</h3>
                <img
                  className="flex-unset menu-img"
                  src="/menu-wok.png"
                  alt="Wok"
                  title="Wok"
                />
              </div>
              <div
                className="lqd-color-box flex items-center py-5 px-9 gap-4 rounded-[15px] transition-all hover:shadow-lg hover:-translate-y-2 text-[#7F8FE6] bg-[#7F8FE6] bg-opacity-[0.07] hover:shadow-[#7f8fe624]"
              >
                <span
                  className="flex-unset lqd-box-dot w-6 h-6 border border-[8px] border-white rounded-full shadow-lg !bg-current"
                ></span>
                <h3 className="flex-1 text-xl text-inherit -tracking-tight">Ramen</h3>
                <img
                  className="flex-unset menu-img"
                  src="/menu-ramen.png"
                  alt="Ramen"
                  title="Ramen"
                />
              </div>
              <div
                className="lqd-color-box flex items-center py-5 px-9 gap-4 rounded-[15px] transition-all hover:shadow-lg hover:-translate-y-2 text-[#6BAC65] bg-[#6BAC65] bg-opacity-[0.07] hover:shadow-[#6bac6524]"
              >
                <span
                  className="flex-unset lqd-box-dot w-6 h-6 border border-[8px] border-white rounded-full shadow-lg !bg-current"
                ></span>
                <h3 className="flex-1 text-xl text-inherit -tracking-tight">Thai</h3>
                <img
                  className="flex-unset menu-img"
                  src="/menu-thai.png"
                  alt="Thai"
                  title="Thai"
                />
              </div>
              <div
                className="lqd-color-box flex items-center py-5 px-9 gap-4 rounded-[15px] transition-all hover:shadow-lg hover:-translate-y-2 text-[#EF793A] bg-[#EF793A] bg-opacity-[0.07] hover:shadow-[#ef793a1f]"
              >
                <span
                  className="flex-unset lqd-box-dot w-6 h-6 border border-[8px] border-white rounded-full shadow-lg !bg-current"
                ></span>
                <h3 className="flex-1 text-xl text-inherit -tracking-tight">
                  Bubble Tea
                </h3>
                <img
                  className="flex-unset menu-img"
                  src="/menu-tea.png"
                  alt="Bubble Tea"
                  title="Bubble Tea"
                />
              </div>
            </div>
          </div>
        </section>
        {/* testimonials */}
        <section
          className="site-section relative py-10 md:opacity-0 md:translate-y-8 transition-all duration-700 [&.lqd-is-in-view]:opacity-100 [&.lqd-is-in-view]:translate-y-0"
          id="testimonials"
        >
          <div
            className="absolute inset-x-0 top-0 -z-1 h-[150vh]"
            style={{ background: 'linear-gradient(to bottom,transparent,#f0effa,transparent)' }}
          ></div>
          <div className="container relative">
            <div
              className="p-11 pb-24 border rounded-[50px] bg-contain bg-center bg-no-repeat max-sm:px-5"
              style={{ backgroundImage: 'url(/world-map.png)' }}
            >
              <header
                className="mx-auto text-center w-1/2 mb-10 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full"
              >
                <h6
                  className="inline-block py-1 px-3 mb-6 rounded-md text-[13px] font-medium text-[#28027C] bg-[#28027C] bg-opacity-15"
                >
                  MiccoPay
                  <span className="dot"></span>
                  <span className="opacity-50">Notre communauté</span>
                </h6>
                <h2 className="mb-[0.45em]">Ils nous font confiance</h2>
                <p className="text-[18px] leading-[1.444em]"></p>
              </header>
              <div className="max-lg:11/12 max-md:w-full w-8/12 mx-auto">
                <div className="mb-20">
                  <div
                    className="gap-5 mb-7 w-[235px] mx-auto flickity-enabled"
                    data-flickity='{ "asNavFor": ".testimonials-main-carousel", "contain": false, "pageDots": false, "cellAlign": "center", "prevNextButtons": false, "wrapAround": true, "draggable": false }'
                    style={{ maskImage: 'linear-gradient(to right,transparent 0%, #000 15%,#000 85%,transparent 100%)' }}
                  >
                    <div
                      className="w1/3 text-center text-[15px] font-medium group pb-[16px] pt-9 cursor-pointer"
                    >
                      <figure
                        className="mx-auto mb-4 overflow-hidden rounded-full w-11 h-11 transition-all group-[&.is-nav-selected]:scale-[1.75] group-[&.is-nav-selected]:-translate-y-4 group-[&.is-nav-selected]:border-white group-[&.is-nav-selected]:border-[5px] group-[&.is-nav-selected]:shadow-sm max-sm:group-[&.is-nav-selected]:scale-150"
                      >
                        <img
                          className="object-cover object-center w-full h-full"
                          src="/client-1.png"
                          alt="the first client"
                        />
                      </figure>
                      <div
                        className="opacity-0 whitespace-nowrap transition-all group-[&.is-nav-selected]:opacity-100"
                      >
                        <p className="text-heading">Paline Jan</p>
                        <p className="text-heading opacity-15">Client</p>
                      </div>
                    </div>

                    <div
                      className="w1/3 text-center text-[15px] font-medium group pb-[16px] pt-9 cursor-pointer"
                    >
                      <figure
                        className="mx-auto mb-4 overflow-hidden rounded-full w-11 h-11 transition-all group-[&.is-nav-selected]:scale-[1.75] group-[&.is-nav-selected]:-translate-y-4 group-[&.is-nav-selected]:border-white group-[&.is-nav-selected]:border-[5px] group-[&.is-nav-selected]:shadow-sm max-sm:group-[&.is-nav-selected]:scale-150"
                      >
                        <img
                          className="object-cover object-center w-full h-full"
                          src="/cleint-2.png"
                          alt="the seconf client"
                        />
                      </figure>
                      <div
                        className="opacity-0 whitespace-nowrap transition-all group-[&.is-nav-selected]:opacity-100"
                      >
                        <p className="text-heading">Jason Huang</p>
                        <p className="text-heading opacity-15">Restaurateur</p>
                      </div>
                    </div>

                    <div
                      className="w1/3 text-center text-[15px] font-medium group pb-[16px] pt-9 cursor-pointer"
                    >
                      <figure
                        className="mx-auto mb-4 overflow-hidden rounded-full w-11 h-11 transition-all group-[&.is-nav-selected]:scale-[1.75] group-[&.is-nav-selected]:-translate-y-4 group-[&.is-nav-selected]:border-white group-[&.is-nav-selected]:border-[5px] group-[&.is-nav-selected]:shadow-sm max-sm:group-[&.is-nav-selected]:scale-150"
                      >
                        <img
                          className="object-cover object-center w-full h-full"
                          src="/client-3.png"
                          alt="the last client"
                        />
                      </figure>
                      <div
                        className="opacity-0 whitespace-nowrap transition-all group-[&.is-nav-selected]:opacity-100"
                      >
                        <p className="text-heading">Tiffany Huang</p>
                        <p className="text-heading opacity-15">Restaurateur</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="text-[26px] leading-[1.27em] text-heading text-center testimonials-main-carousel [&_.flickity-button]:opacity-40 [&_.flickity-button]:focus:shadow-none [&_.flickity-button]:transition-all [&_.flickity-button]:hover:bg-transparent [&_.flickity-button]:hover:opacity-100 [&_.flickity-button.previous]:-left-16 [&_.flickity-button.next]:-right-16 max-md:[&_.flickity-button.previous]:-left-10 max-md:[&_.flickity-button.next]:-right-10 max-sm:text-lg max-sm:[&_.flickity-button]:relative max-sm:[&_.flickity-button]:top-auto max-sm:[&_.flickity-button]:!left-auto max-sm:[&_.flickity-button]:!right-auto max-sm:[&_.flickity-button]:!mx-4 max-sm:[&_.flickity-button]:translate-y-0 max-sm:[&_.flickity-button-icon]:!w-1/2 max-sm:[&_.flickity-button-icon]:!h-1/2 max-sm:[&_.flickity-button-icon]:!top-1/4 max-sm:[&_.flickity-button-icon]:!left-1/4"
                    data-flickity='{ "contain": true, "wrapAround": true, "pageDots": false, "adaptiveHeight": true }'
                  >
                    <div className="shrink-0 grow-0 basis-full w-full">
                      <blockquote className="max-sm:mb-7">
                        <p>
                          “MiccoPay rend la vie au restaurant tellement plus simple.
                          Je recommande vivement !”
                        </p>
                      </blockquote>
                    </div>
                    <div className="shrink-0 grow-0 basis-full w-full">
                      <blockquote className="max-sm:mb-7">
                        <p>
                          “MiccoPay POS a transformé la gestion de mon restaurant de
                          wok. Son interface conviviale permet à mon personnel de
                          s'adapter rapidement.”
                        </p>
                      </blockquote>
                    </div>
                    <div className="shrink-0 grow-0 basis-full w-full">
                      <blockquote className="max-sm:mb-7">
                        <p>
                          “MiccoPay a été une véritable révolution pour notre
                          restaurant. Non seulement il a amélioré l'éfficacité de
                          notre service, mais aussi attiré de nouveaux clients.”
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-wrap opacity-80 max-lg:gap-12 max-sm:gap-4 justify-center items-center gap-20"
                >
                  <div style={{ width: '44px' }} className="height-29">
                    <img
                      className="object-center w-full h-full community-partner-logo"
                      src="/best-wok.png"
                      alt="Best Wok"
                      title="Best Wok"
                    />
                  </div>
                  <div style={{ width: '34px' }} className="height-29">
                    <img
                      className="object-center w-full h-full community-partner-logo"
                      src="/atlantic.png"
                      alt="Atlantic"
                      title="Atlantic"
                    />
                  </div>
                  <div style={{ width: '34px' }} className="height-29">
                    <img
                      className="object-center w-full h-full community-partner-logo height-29"
                      src="/grand-aigel.png"
                      alt="Grand Aigel"
                      title="Grand Aigel"
                    />
                  </div>
                  <div style={{ width: '60px' }} className="height-29">
                    <img
                      className="object-center w-full h-full community-partner-logo height-29"
                      src="/world-wok.png"
                      alt="World Wok"
                      title="World Wok"
                    />
                  </div>
                  <div style={{ width: '94px' }} className="height-24">
                    <img
                      className="object-center w-full h-full community-partner-logo height-24"
                      src="/plancha-grill.png"
                      alt="Plancha Grill"
                      title="Plancha Grill"
                    />
                  </div>
                  <div style={{ width: '58px' }} className="height-24">
                    <img
                      className="object-center w-full h-full community-partner-logo height-24"
                      src="/barbq-sushi.png"
                      alt="Barbq Sushi"
                      title="Barbq Sushi"
                    />
                  </div>
                  <div style={{ width: '94px' }} className="height-24">
                    <img
                      className="object-center w-full h-full community-partner-logo height-24"
                      src="/wok-grill.png"
                      alt="Wok Grill"
                      title="Wok Grill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section
          className="site-section py-10 md:opacity-0 md:translate-y-8 transition-all duration-700 [&.lqd-is-in-view]:opacity-100 [&.lqd-is-in-view]:translate-y-0"
          id="faq"
        >
          <div className="container">
            <div className="p-11 pb-16 border rounded-[50px] relative max-sm:px-5">
              <header
                className="mx-auto text-center w-1/2 mb-9 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full"
              >
                <h6
                  className="inline-block py-1 px-3 mb-6 rounded-md text-[13px] font-medium text-[#60027C] bg-[#60027C] bg-opacity-15"
                >
                  FAQ
                  <span className="dot"></span>
                  <span className="opacity-50">Center d'aide</span>
                </h6>
                <h2 className="mb-[0.45em]">Une question ?</h2>
                <p className="text-[18px] leading-[1.444em]">
                  trouvez des réponses à vos questions fréquemment posées
                </p>
              </header>
              <div className="lqd-accordion max-lg:w-full w-5/6 mx-auto">
                <div className="lqd-accordion-item group">
                  <button
                    data-target="#faq-1"
                    data-trigger-type="accordion"
                    className="flex items-center justify-between w-full py-5 pl-4 text-heading text-left text-[20px] font-normal tracking-wide border-b group/btn group-last:border-b-0"
                  >
                    <span>
                      MiccoPay est-il réservé aux grandes surfaces de buffet ?
                    </span>
                    <div
                      className="inline-flex items-center justify-center ml-3 border w-7 h-7 rounded-3xl shrink-0"
                    >
                      <span className="group-[&.lqd-is-active]/btn:hidden">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.552 6.489H11.617V5.061H6.552V0H5.082V5.061H5.96046e-08V6.489H5.082V11.571H6.552V6.489Z"
                          ></path>
                        </svg>
                      </span>
                      <span className="hidden group-[&.lqd-is-active]/btn:block">
                        <svg
                          width="7"
                          height="2"
                          viewBox="0 0 7 2"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1.764C0.633344 1.67982 1.27225 1.64472 1.911 1.659H4.411C5.05675 1.64347 5.70273 1.67858 6.343 1.764V0C5.70266 0.0844217 5.05663 0.11786 4.411 0.0999999H1.911C1.27236 0.117286 0.63335 0.083848 0 0V1.764Z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                  <div id="faq-1" className="hidden">
                    <div className="py-4 pl-3 lqd-accordion-content">
                      <p className="text-lg max-sm:text-[17px]">
                        Pas du tout! MiccoPay est une solution flexible adaptée à
                        divers types d'établissements de restauration, qu'il
                        s'agisse de restaurants asiatiques, de buffets à grande
                        surface ou d'autres cuisines. Notre plateforme est conçue
                        pour répondre aux besions de diverses entreprises de
                        restauration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lqd-accordion-item group">
                  <button
                    data-target="#faq-2"
                    data-trigger-type="accordion"
                    className="flex items-center justify-between w-full py-5 pl-4 text-heading text-left text-[20px] font-normal tracking-wide border-b group/btn group-last:border-b-0"
                  >
                    <span>
                      MiccoPay est-il gratuit pour les restaurateurs ?
                    </span>
                    <div
                      className="inline-flex items-center justify-center ml-3 border w-7 h-7 rounded-3xl shrink-0"
                    >
                      <span className="group-[&.lqd-is-active]/btn:hidden">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.552 6.489H11.617V5.061H6.552V0H5.082V5.061H5.96046e-08V6.489H5.082V11.571H6.552V6.489Z"
                          ></path>
                        </svg>
                      </span>
                      <span className="hidden group-[&.lqd-is-active]/btn:block">
                        <svg
                          width="7"
                          height="2"
                          viewBox="0 0 7 2"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1.764C0.633344 1.67982 1.27225 1.64472 1.911 1.659H4.411C5.05675 1.64347 5.70273 1.67858 6.343 1.764V0C5.70266 0.0844217 5.05663 0.11786 4.411 0.0999999H1.911C1.27236 0.117286 0.63335 0.083848 0 0V1.764Z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                  <div id="faq-2" className="hidden">
                    <div className="py-4 pl-3 lqd-accordion-content">
                      <p className="text-lg max-sm:text-[17px]">
                        L'utilisation de MiccoPay est gratuite pour les
                        restaurateurs. Toutefois, des frais minimums peuvent être
                        appliqués pour les demandes de personnalisation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lqd-accordion-item group">
                  <button
                    data-target="#faq-3"
                    data-trigger-type="accordion"
                    className="flex items-center justify-between w-full py-5 pl-4 text-heading text-left text-[20px] font-normal tracking-wide border-b group/btn group-last:border-b-0"
                  >
                    <span>
                      Comment fonctionne MiccoPay ?
                    </span>
                    <div
                      className="inline-flex items-center justify-center ml-3 border w-7 h-7 rounded-3xl shrink-0"
                    >
                      <span className="group-[&.lqd-is-active]/btn:hidden">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.552 6.489H11.617V5.061H6.552V0H5.082V5.061H5.96046e-08V6.489H5.082V11.571H6.552V6.489Z"
                          ></path>
                        </svg>
                      </span>
                      <span className="hidden group-[&.lqd-is-active]/btn:block">
                        <svg
                          width="7"
                          height="2"
                          viewBox="0 0 7 2"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1.764C0.633344 1.67982 1.27225 1.64472 1.911 1.659H4.411C5.05675 1.64347 5.70273 1.67858 6.343 1.764V0C5.70266 0.0844217 5.05663 0.11786 4.411 0.0999999H1.911C1.27236 0.117286 0.63335 0.083848 0 0V1.764Z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                  <div id="faq-3" className="hidden">
                    <div className="py-4 pl-3 lqd-accordion-content">
                      <p className="text-lg max-sm:text-[17px]">
                        MiccoPay offre un tableau de bord efficace et complet qui
                        vous permet de visualiser les tables occupées, les paiements
                        et d'autres informations clés.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lqd-accordion-item group">
                  <button
                    data-target="#faq-4"
                    data-trigger-type="accordion"
                    className="flex items-center justify-between w-full py-5 pl-4 text-heading text-left text-[20px] font-normal tracking-wide border-b group/btn group-last:border-b-0"
                  >
                    <span>
                      Pouvons-nous personnaliser le QR code avec MiccoPay ?
                    </span>
                    <div
                      className="inline-flex items-center justify-center ml-3 border w-7 h-7 rounded-3xl shrink-0"
                    >
                      <span className="group-[&.lqd-is-active]/btn:hidden">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.552 6.489H11.617V5.061H6.552V0H5.082V5.061H5.96046e-08V6.489H5.082V11.571H6.552V6.489Z"
                          ></path>
                        </svg>
                      </span>
                      <span className="hidden group-[&.lqd-is-active]/btn:block">
                        <svg
                          width="7"
                          height="2"
                          viewBox="0 0 7 2"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1.764C0.633344 1.67982 1.27225 1.64472 1.911 1.659H4.411C5.05675 1.64347 5.70273 1.67858 6.343 1.764V0C5.70266 0.0844217 5.05663 0.11786 4.411 0.0999999H1.911C1.27236 0.117286 0.63335 0.083848 0 0V1.764Z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                  <div id="faq-4" className="hidden">
                    <div className="py-4 pl-3 lqd-accordion-content">
                      <p className="text-lg max-sm:text-[17px]">
                        Oui, vous avez la possibilité de personnaliser votre QR
                        code, mais veuillez noter qu'il aura un coût minimum
                        applicable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lqd-accordion-item group">
                  <button
                    data-target="#faq-5"
                    data-trigger-type="accordion"
                    className="flex items-center justify-between w-full py-5 pl-4 text-heading text-left text-[20px] font-normal tracking-wide border-b group/btn group-last:border-b-0"
                  >
                    <span>
                      Ai-je besoin de QR codes avec MiccoPay ?
                    </span>
                    <div
                      className="inline-flex items-center justify-center ml-3 border w-7 h-7 rounded-3xl shrink-0"
                    >
                      <span className="group-[&.lqd-is-active]/btn:hidden">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.552 6.489H11.617V5.061H6.552V0H5.082V5.061H5.96046e-08V6.489H5.082V11.571H6.552V6.489Z"
                          ></path>
                        </svg>
                      </span>
                      <span className="hidden group-[&.lqd-is-active]/btn:block">
                        <svg
                          width="7"
                          height="2"
                          viewBox="0 0 7 2"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1.764C0.633344 1.67982 1.27225 1.64472 1.911 1.659H4.411C5.05675 1.64347 5.70273 1.67858 6.343 1.764V0C5.70266 0.0844217 5.05663 0.11786 4.411 0.0999999H1.911C1.27236 0.117286 0.63335 0.083848 0 0V1.764Z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                  <div id="faq-5" className="hidden">
                    <div className="py-4 pl-3 lqd-accordion-content">
                      <p className="text-lg max-sm:text-[17px]">
                        Oui, nos solutions de commande et de paiement en ligne
                        nécessitent l'utilisation de QR codes. Chaque table est
                        équipée d'un QR code unique aui facilite la commande et le
                        paiement, ainsi aue le suivi des additions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Section */}
        <section
          className="site-section py-10 mb-14 md:opacity-0 md:translate-y-8 transition-all duration-700 [&.lqd-is-in-view]:opacity-100 [&.lqd-is-in-view]:translate-y-0"
          id="blog"
        >
          <div className="container">
            <header
              className="mx-auto text-center w-1/2 mb-9 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full"
            >
              <h6
                className="inline-block py-1 px-3 mb-6 rounded-md text-[13px] font-medium text-[#60027C] bg-[#60027C] bg-opacity-15"
              >
                Blog
              </h6>
              <h2 className="mb-[0.45em]">Derniers articles</h2>
              <p className="text-[18px] leading-[1.444em]"></p>
            </header>
            <div
              className="grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10"
            >
              {
                Array.isArray(blogInfo) ? blogInfo.map(node => <BlogCard key={node.title} {...node} />) : null
              }
            </div>
            <div className="flex justify-center">
              <a className="flex space-x-2 group" href="/blogs/">
                <div
                  className="bg-green-100 text-green-500 group-hover:bg-green-200 text-sm font-semibold py-1 px-2 rounded-md transition-colors"
                >
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
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path>
                  </svg>
                </div>
                <div
                  className="bg-green-100 text-green-500 group-hover:bg-green-200 text-sm font-semibold py-1 px-2 rounded-md transition-colors"
                >
                  affiche plus
                </div>
              </a>
            </div>
          </div>
        </section>
      </>
    </Layout>
  )
}