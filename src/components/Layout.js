import React, { useEffect } from 'react';
import '../styles/global.css';
import '../styles/flickity.min.css';
import '../styles/customize.css';

const HeaderSectionNavConfig = [
  { title: 'Home', href: '#banner' },
  { title: 'Fonctionnalités', href: '#features' },
  { title: 'Partenaires', href: '#testimonials' },
  { title: 'FAQ', href: '#faq' },
  { title: 'Blog', href: '#blog' },
  { title: 'Contactez-nous', href: '#footer' }
]

function HeaderSectionNav () {
  return (
    <div className="max-lg:max-h-[inherit] max-lg:overflow-y-scroll">
      <ul
        className="flex items-center justify-center text-center gap-14 whitespace-nowrap max-xl:gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-5 max-lg:p-10"
      >
        {
          HeaderSectionNavConfig.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_self"
                className="relative before:absolute before:-inset-x-4 before:-inset-y-2 before:rounded-lg before:bg-current before:transition-all before:opacity-0 before:scale-75 hover:before:opacity-10 hover:before:scale-100 [&.active]:before:opacity-10 [&.active]:before:scale-100"
              >
                { item.title }
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const PatnerRestaurantsConfig = [
  { name: "Atlantic", href: "https://miccopay.web.app/?table=001&restaurantId=atlantic-60530-1" },
  { name: "Au Wok Palace", href: "https://miccopay.web.app/?table=001&restaurantId=auwokpalace-93420-1" },
  { name: "Barb Q Sushi", href: "https://miccopay.web.app/?table=001&restaurantId=barbqsushi-94190-1" },
  { name: "Best Wok", href: "https://miccopay.web.app/?table=001&restaurantId=bestwok-77680-1" },
  { name: "Le Grand Aigle", href: "https://miccopay.web.app/?table=001&restaurantId=legrandaigle-93800-1" },
  { name: "Plancha Grill Pontoise", href: "https://miccopay.web.app/?table=001&restaurantId=planchagrill-95300-1" },
  { name: "Plancha Grill Sarcelles", href: "https://miccopay.web.app/?table=001&restaurantId=planchagrill-95200-1" },
  { name: "Plancha Grill Bondy", href: "https://miccopay.web.app/?table=001&restaurantId=planchagrill-93140-1" },
  { name: "Wok Grill Châteauroux", href: "https://miccopay.web.app/?table=001&restaurantId=wokgrill-36330-1" },
  { name: "Wok Grill Thionville", href: "https://miccopay.web.app/?table=001&restaurantId=wokgrill-57100-1" },
  { name: "Wok Grill Le Havre", href: "https://miccopay.web.app/?table=001&restaurantId=wokgrill-76600-1" },
  { name: "Wok Grill Meaux", href: "https://miccopay.web.app/?table=001&restaurantId=wokgrill-77100-1" },
  { name: "Wok Grill Torcy", href: "https://miccopay.web.app/?table=001&restaurantId=wokgrill-77200-1" },
  { name: "Wok Grill Montigny", href: "https://miccopay.web.app/?table=001&restaurantId=wokgrill-91170-1" },
  { name: "Wok Grill Bondy", href: "https://miccopay.web.app/?table=001&restaurantId=wokgrill-93140-1" },
  { name: "Wok Grill Neuilly", href: "https://miccopay.web.app/?table=001&restaurantId=wokgrill-93330-1" },
  { name: "Wok Grill Epinay", href: "https://miccopay.web.app/?table=001&restaurantId=wokgrill-93800-1" },
  { name: "Wok Grill Créteil", href: "https://miccopay.web.app/?table=001&restaurantId=wokgrill-94000-1" },
  { name: "Wok Grill Vitry-Sur-Seine", href: "https://miccopay.web.app/?table=001&restaurantId=wokgrill-94400-1" },
  { name: "World Wok Servon", href: "https://miccopay.web.app/?table=001&restaurantId=worldwok-77170-1" },
  { name: "World Wok Villenueve", href: "https://miccopay.web.app/?table=001&restaurantId=worldwok-92390-1" },
];
              
function PartnerRestaurants () {
  return <>
    {
      PatnerRestaurantsConfig.map(item => (
        <a
          className="text-center sm:w-50p mb-6"
          href={ item.href }
          key={item.name}
        >{ item.name }</a>
      ))
    }
  </>
}

function onInit () {
  const scriptSrcs = [
    "/vanillajs-scrollspy.min.js",
    "/flickity.pkgd.min.js",
    "/frontend.js",
    "/frontend-animations.js",
  ]
  for (const src of scriptSrcs) {
    const el = document.createElement('script');
    el.src = src;
    document.body.appendChild(el);
  }
}

export default function Layout({ children, index }) {
  useEffect(onInit, []);
  return (
    <>
      <div
        id="app-loading-indicator"
        className="fixed top-0 left-0 right-0 z-[99] opacity-0 transition-opacity"
      >
        <div className="progress [--tblr-progress-height:3px]">
          <div
            className="progress-bar progress-bar-indeterminate bg-[--tblr-primary] before:[animation-timing-function:ease-in-out] dark:bg-white"
          ></div>
        </div>
      </div>
      {/* TOP HEADER */}
      <header
        className={`site-header absolute inset-x-0 top-${index ? '1' : '0'} z-50 text-white transition-[background,shadow] group/header [&.lqd-is-sticky]:bg-white [&.lqd-is-sticky]:shadow-[0_4px_20px_rgba(0,0,0,0.03)] [&.lqd-is-sticky]:text-black ${index ? '' : 'lqd-is-sticky' }`}
      >
        <nav
          id="frontend-local-navbar"
          className="flex items-center justify-between py-4 border-b border-white px-7 border-opacity-10 relative text-[14px] opacity-0 max-sm:px-2 transition-all duration-500 group-[.page-loaded]/body:opacity-100 group-[.lqd-is-sticky]/header:border-black group-[.lqd-is-sticky]/header:border-opacity-5"
        >
          <div className="site-logo basis-1/3 relative max-lg:basis-1/3">
            <a href="/">
              <img
                className="miccopay-logo absolute top-1/2 start-0 opacity-0 -translate-y-1/2 translate-x-3 transition-all group-[.lqd-is-sticky]/header:opacity-100 group-[.lqd-is-sticky]/header:translate-x-0 peer"
                src="/miccopay-logo.svg"
                alt="MiccoPay logo"
              />
              <img
                className="miccopay-logo transition-all group-[.lqd-is-sticky]/header:peer-first:opacity-0 group-[.lqd-is-sticky]/header:peer-first:translate-x-2"
                src="/miccopay-logo-white.svg"
                alt="MiccoPay logo white"
              />
            </a>
            <a href="https://getmicco.com/">
              <div className="flex items-center logo-subtitle absolute">
                POWERED BY
                <img
                  className="micco-logo primary"
                  src="/micco-logo-white.png"
                  alt="white miccopay logo"
                />
                <img src="/micco-logo.png" className="hidden micco-logo" alt="miccopay logo" />
              </div>
            </a>
          </div>
          <div
            className="site-nav-container basis-1/3 transition-all max-lg:w-full max-lg:absolute max-lg:top-full max-lg:right-0 max-lg:bg-[#343C57] max-lg:text-white max-lg:overflow-hidden max-lg:max-h-0 [&.lqd-is-active]:max-lg:max-h-[calc(100vh-150px)]"
          >
            { index ? <HeaderSectionNav /> : null }
          </div>
          <div className="flex justify-end gap-2 basis-1/3 max-lg:basis-2/3">
            <a
              href="https://miccopay-business.web.app/"
              className="inline-flex items-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-black hover:bg-black hover:text-white border-[2px] border-white !border-opacity-10 group-[.lqd-is-sticky]/header:border-black text-white group-[.lqd-is-sticky]/header:text-black group-[.lqd-is-sticky]/header:hover:text-white py-2 px-4 rounded-lg font-medium"
            >
              <span className="inline-flex items-center relative z-10">
                Se connecter
              </span>
            </a>
            <a
              href="#footer"
              className="inline-flex items-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-black hover:bg-black hover:text-white border-[2px] border-white !border-opacity-0 bg-white !bg-opacity-10 hover:!bg-opacity-100 group-[.lqd-is-sticky]/header:bg-black group-[.lqd-is-sticky]/header:hover:!bg-opacity-100 text-white group-[.lqd-is-sticky]/header:text-black group-[.lqd-is-sticky]/header:hover:text-white py-2 px-4 rounded-lg font-medium"
              target="_self"
            >
              <span className="inline-flex items-center relative z-10">
                Contact
              </span>
            </a>
            <button
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full mobile-nav-trigger shrink-0 !bg-opacity-10 group lg:hidden group-[.lqd-is-sticky]/header:bg-black"
            >
              <span className="flex flex-col w-4 gap-1">
                <span
                  className="inline-flex w-full h-[2px] bg-white transition-transform first:origin-left last:origin-right group-[&.lqd-is-active]:first:rotate-45 group-[&.lqd-is-active]:first:translate-x-[3px] group-[&.lqd-is-active]:first:-translate-y-[2px] group-[&.lqd-is-active]:last:-rotate-45 group-[&.lqd-is-active]:last:-translate-x-[2px] group-[&.lqd-is-active]:last:-translate-y-[8px] group-[.lqd-is-sticky]/header:bg-black"
                ></span>
                <span
                  className="inline-flex w-full h-[2px] bg-white transition-transform first:origin-left last:origin-right group-[&.lqd-is-active]:first:rotate-45 group-[&.lqd-is-active]:first:translate-x-[3px] group-[&.lqd-is-active]:first:-translate-y-[2px] group-[&.lqd-is-active]:last:-rotate-45 group-[&.lqd-is-active]:last:-translate-x-[2px] group-[&.lqd-is-active]:last:-translate-y-[8px] group-[.lqd-is-sticky]/header:bg-black"
                ></span>
              </span>
            </button>
          </div>
        </nav>
      </header>
      { children }
      <footer
        className="relative pt-40 text-white bg-black site-footer pb-11"
        id="footer"
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(170deg, #27007b 2.22%, #000 87.81%)' }}
        ></div>
        <div className="absolute inset-x-0 -top-px">
          <svg
            className="w-full fill-body-bg"
            preserveAspectRatio="none"
            width="1440"
            height="86"
            viewBox="0 0 1440 86"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 85.662C240 29.1253 480 0.857 720 0.857C960 0.857 1200 29.1253 1440 85.662V0H0V85.662Z"
            ></path>
          </svg>
        </div>
        <div className="relative">
          <div className="container mb-28">
            <div className="w-1/2 mx-auto text-center max-lg:w-10/12 max-sm:w-full">
              <p className="text-xs font-semibold tracking-widest uppercase mb-9">
                <span
                  className="inline-block px-3 py-1 !me-2 rounded-xl bg-[#262626]"
                >
                  ESSAYEZ GRATUITEMENT DÈS AUJOURD'HUI
                </span>
              </p>
              <p
                className="text-[100px] font-bold font-oneset leading-none tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-transparent -from-[5%] to-white to-50% max-sm:text-[18vw]"
              >
                Rejoindre MiccoPay
              </p>
              <p
                className="text-[20px] font-oneset leading-[1.25em] opacity-50 font-normal mb-9 px-10"
              >
                boostez votre activité avec nos solutions
              </p>
              <a
                className="inline-flex items-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-black hover:bg-black hover:text-white border-[2px] border-[#343C57] bg-white bg-opacity-10 border-[2px] border-white border-opacity-0 hover:bg-white hover:bg-opacity-100 hover:!text-black py-4 px-7 rounded-xl font-semibold"
                target=""
                onClick={showContactForm}
                id="join-button"
              >
                <span className="inline-flex items-center relative z-10">
                  Rejoignez-nous
                  <svg
                    className="ml-2"
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
                </span>
              </a>
              <form className="site-section" id="contact-form-wrapper"></form>
            </div>
          </div>
          <hr className="border-white border-opacity-15" />
          <div className="container qui-sommes-nous">
            <div className="pt-10 color-white fSize-12 content">
              <div>
                Révolutionnez l'expérience de votre restaurant avec MiccoPay
              </div>
              <div>
                La solution de paiement QR Code tout-en-un, une marque de
                <a href="https://getmicco.com/" className="underline">Micco</a>.
              </div>
              <div>
                Bienvenue chez
                <a
                  href="https://www.linkedin.com/company/miccopay"
                  className="underline"
                  >MiccoPay</a
                >, l'avenir de la restauration est à portée de main ! Notre
                plateforme réinvente la façon dont les restaurants, cafés et
                établissements de restauration accueillent et servent leurs
                clients.
              </div>
              <div>
                Nos solutions de paiement s’articule autour de 3 axes :
              </div>
              <ul>
                <li>
                  <span className="underline mb-6"
                    >Commande et Paiement en Ligne Faciles</span
                  >
                  : Grâce à notre technologie de pointe, vos clients peuvent
                  désormais commander et payer en toute simplicité à partir de
                  leur propre smartphone. Fini les longues files d'attente et les
                  attentes pour régler l'addition.
                </li>
                <li>
                  <span className="underline mb-6">Gestion Simplifiée</span>
                  : Notre système de back-office intuitif facilite la gestion de
                  vos commandes, menus et paiements. Vous gagnez en efficacité, en
                  précision et en rentabilité.
                </li>
                <li>
                  <span className="underline mb-6"
                    >Expérience Client Exceptionnelle</span
                  >
                  : MiccoPay offre une interface conviviale pour les clients, leur
                  permettant de personnaliser leurs commandes et de régler en
                  toute sécurité. Des clients satisfaits deviennent des clients
                  fidèles.
                </li>
              </ul>
              <div>
                Rejoignez les restaurants visionnaires qui ont déjà adopté
                MiccoPay et découvrez comment notre technologie révolutionne le
                secteur de la restauration. Nous sommes là pour vous aider à
                offrir la meilleure expérience à vos clients tout en maximisant
                votre rentabilité.
              </div>
              <div>
                Prêt à passer au niveau supérieur ? Contactez-nous dès aujourd'hui
                pour en savoir plus sur MiccoPay et comment il peut propulser
                votre établissement vers de nouveaux sommets.
              </div>
              <div style={{ marginBottom: '30px' }}>
                MiccoPay - L'avenir de la restauration commence ici.
              </div>
            </div>
            <hr className="border-white border-opacity-15" />
            <div
              className="flex flex-wrap items-center justify-between gap-8 pt-6 pb-5 max-sm:justify-center"
            >
              <a>
                <img
                  src="/miccopay-logo-white.svg"
                  alt="MiccoPay white logo"
                />
              </a>
              <ul
                className="flex flex-wrap items-center gap-7 text-[14px] max-sm:justify-center"
              >
                <li>
                  <a
                    href="https://www.linkedin.com/company/miccopay"
                    className="inline-flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#fff"
                    >
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <hr className="border-white border-opacity-15" />
            <div className="flex flex-wrap pt-6 restaurant-qr-links">
              <div className="text-center mb-4" style={{ width: '100%' }}>
                Les restaurants qui nous ont rejoints
              </div>
              <PartnerRestaurants />
            </div>
            <hr className="border-white border-opacity-15" />
            <div className="gap-4 py-9" style={{ fontSize: '12px' }}>
              <p className="text-center mb-4">
                Copyright © 2023 Micco, Everest Finance.<br />
                Tous droits réservés.
              </p>
              <p className="text-center mb-4">
                Politique de confidentialité
                <span className="inline-block ml-3">
                  <img className="inline-block" src="/mail.svg" alt="mail svg icon" />
                  hello@getmicco.com
                </span>
              </p>
              <p className="text-center opacity-60">
                Les services et produits MiccoPay sont distribués par Everest
                Finance, société par actions simplifiée immatriculée au RCS de
                Paris sous le N° SIREN 948 100 839, dont le siège social est situé
                66 avenue des Champs Elysées, 75008 Paris.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function createContactInput(config) {
  const { placeholder, name, type } = config;
  let validity = "";
  switch (type) {
    case "mail":
      validity = `type="email"`;
      break;
    case "phone":
      validity = 'pattern="[0-9]{8,11}"';
      break;
    default:
  }
  return `<div class="input-wrapper"><input name="${name}" placeholder="${placeholder}" required ${validity}></div>`;
}

function getMailBody(formEl) {
  const obj = {};
  for (let i = 0; i < 4; i++) {
    const { name, value } = formEl[i];
    obj[name] = value;
  }
  const template = `
    ----------Email à nous envoyer ------------
    Bonjour, je suis ${obj.name}.
    Je suis intéressé de votre solution -  MiccoPay, pour mon restaurant ${obj.restaurantName}.
    Veuillez me recontacter au : ${obj.phone} ou avec  mon adresse d'email: ${obj.email}.
    Merci 
    
    -----------L'équipe MiccoPay vous répondra sous 24h ---------
  `;
  return encodeURIComponent(template);
}

function showContactForm() {
  const joinBtnEl = document.querySelector("footer #join-button");
  joinBtnEl.style.display = "none";
  const formEl = document.querySelector("footer #contact-form-wrapper");
  const config = [
    { placeholder: "Votre nom*", name: "name" },
    { placeholder: "Nom de votre restaurant*", name: "restaurantName" },
    { placeholder: "Votre adresse d'email*", name: "email", type: "mail" },
    { placeholder: "Votre numéro de téléphone*", name: "phone", type: "phone" }
  ];
  let inputs = config.map(createContactInput).join("");
  inputs += `
    <button
      class="mt-10 inline-flex items-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-black hover:bg-black hover:text-white border-[2px] border-[#343C57] bg-white bg-opacity-10 border-[2px] border-white border-opacity-0 hover:bg-white hover:bg-opacity-100 hover:!text-black py-4 px-7 rounded-xl font-semibold"
      type="submit"
    >
      Envoyer
    </button>
  `;
  formEl.innerHTML = inputs;
  formEl.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const aEl = document.createElement("a");
    const subject = encodeURIComponent("Je suis intéressé de MiccoPay");
    const body = getMailBody(ev.target);
    aEl.href = `mailto:hello@getmicco.com?subject=${subject}&body=${body}`;
    aEl.target = "_blank";
    aEl.click();
    setTimeout(() => {
      const btn = formEl.querySelector("button");
      if (btn) {
        btn.style.display = "none";
      }
      const divEl = document.createElement("div");
      divEl.className = "text-center mt-20";
      divEl.innerText =
        "Merci, Votre demande a bien été reçue ! Notre équipe vous contactera dans les plus brefs délais.";
      formEl.appendChild(divEl);
    }, 300);
  });
}

