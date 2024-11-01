import { StyleSheet, css } from "aphrodite";
import { buttonStyle, textStyle } from "../styles/appStyle";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import MotionScroll from "./MotionScroll";
import cv from "../assets/harivola_cv.pdf";
import { ReactComponent as Github } from "../assets/svg/github-icon-1.svg";
import { ReactComponent as LinkedIn } from "../assets/svg/linkedin-icon-2.svg";

const IconLink = ({ icon, link }: any) => {
  return <a href={link}>{icon}</a>;
};

export function Header() {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "cv_harivola.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="text-[#fff] bg-header pb-[200px]">
      <img
        className="bg-img-header"
        src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
      <Popover>
        <div className="appbar relative px-4 py-4 sm:px-6 bg-[#a6a9bf21] lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10"
            aria-label="Global"
          >
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#252735] p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
              <ul className={css(styles.nav)}>
                <li className={css(styles.li)}>
                  <a
                    className="text-[#cba05b] menu-item t-shadow"
                    href="#about"
                  >
                    <span className={css(styles.link_number)}>01. </span>About
                  </a>
                </li>
                {/* <li className={css(styles.li)}><a className="text-[#cba05b] t-shadow" href='#exp'><span className={css(styles.link_number)}>02. </span>Experience</a></li> */}
                <li className={css(styles.li)}>
                  <a
                    className="text-[#cba05b] menu-item  t-shadow"
                    href="#work"
                  >
                    <span className={css(styles.link_number)}>02. </span>Project
                  </a>
                </li>
                <li className={css(styles.li)}>
                  <a
                    className="text-[#cba05b] menu-item  t-shadow"
                    href="#contact"
                  >
                    <span className={css(styles.link_number)}>03. </span>Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-[#252735] shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#252735] p-2 text-gray-400 hover:text-gray-500 focus:outline-none">
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon
                      className="bg-[#252735] h-6 w-6"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                <ul className="lg:flex">
                  <li className={css(styles.li)}>
                    <a
                      className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50 hover:text-gray-900 t-shadow"
                      href="#about"
                    >
                      <span className={css(styles.link_number)}>01. </span>About
                    </a>
                  </li>
                  {/* <li className={css(styles.li)}><a className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50 hover:text-gray-900 t-shadow" href='#exp'><span className={css(styles.link_number)}>02. </span>Experience</a></li> */}
                  <li className={css(styles.li)}>
                    <a
                      className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50 hover:text-gray-900 t-shadow"
                      href="#work"
                    >
                      <span className={css(styles.link_number)}>02. </span>Work
                    </a>
                  </li>
                  <li className={css(styles.li)}>
                    <a
                      className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50 hover:text-gray-900 t-shadow"
                      href="#contact"
                    >
                      <span className={css(styles.link_number)}>03. </span>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <MotionScroll duration={1.5}>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 2, bounce: 0.3 }}
          className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div className="lg:text-left">
            <span className={css(textStyle.yellow_title)}>Hi, my name is</span>
            <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="title block text-[#6c591f85] t-shadow">
                Harivola
              </span>
              <span className="title block text-[#6c591f85] t-shadow">
                RANDRIAMIHAJA
              </span>
            </h1>
            <p className={css(textStyle.paragraph, styles.p)}>
              I am a mobile and web application developer.
            </p>
            <div
              className={`${css(
                buttonStyle.button,
                styles.button
              )} hover:bg-[#E9BA6A57]`}
              onClick={onButtonClick}
            >
              check out my course!
            </div>
            <div className="flex mt-[20px]">
              <IconLink
                icon={
                  <Github
                    width={30}
                    height={30}
                    className="mr-[10px]"
                    color="#E0920AFF"
                  />
                }
                link={"https://github.com/Harry-Anthony"}
              />
              <IconLink
                icon={<LinkedIn width={30} height={30} color="#E0920AFF" />}
                link={
                  "https://www.linkedin.com/in/harivola-randriamihaja-432373222/"
                }
              />
            </div>
          </div>
        </motion.main>
      </MotionScroll>
      <div className="area">
        <ListGreyIcon />
        {/* <ListColorIcon /> */}
      </div>
      {/* <div className={css(styles.lgrett)}>
                <span className={css(textStyle.yellow_title)}>Hi, my name is</span>
                <div className={css(textStyle.h1)}>Harivola RANDRIAMIHAJA.</div>
                <div className={css(textStyle.h2)}>I am a application web and mobile developer</div>
                <p className={css(textStyle.paragraph, styles.p)}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible,
                    human-centered products at Upstatement.</p>
                <div className={css(buttonStyle.button, styles.button)}>
                    check out my course!
                </div>
            </div> */}
    </div>
  );
}

function ListGreyIcon() {
  return (
    <div className="circles">
      {/**flutter */}
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="96px"
          height="96px"
          className="md:w-[96px] md:h-[96px] w-[40px] h-[40px]"
        >
          <polygon fill="grey" points="26,4 6,24 12,30 38,4" />
          <polygon fill="grey" points="38,22 27,33 21,27 26,22" />
          <rect
            width="8.485"
            height="8.485"
            x="16.757"
            y="28.757"
            fill="grey"
            transform="rotate(-45.001 21 33)"
          />
          <polygon fill="grey" points="38,44 26,44 21,39 27,33" />
          <polygon fill="grey" points="21,39 30,36 27,33" />
        </svg>
      </li>
      {/* <li><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="96px" height="96px"><polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"/><polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"/><rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)"/><polygon fill="#01579b" points="38,44 26,44 21,39 27,33"/><polygon fill="#084994" points="21,39 30,36 27,33"/></svg></li> */}
      {/**react */}
      <li>
        <svg
          height="2500"
          viewBox="175.7 78 490.6 436.9"
          width="2194"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[96px] md:h-[96px] w-[40px] h-[40px]"
        >
          <g fill="grey">
            <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
            <circle cx="420.9" cy="296.5" r="45.7" />
          </g>
        </svg>
      </li>
      {/**Typescript */}
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="96px"
          height="96px"
          className="md:w-[96px] md:h-[96px] w-[40px] h-[40px]"
        >
          <linearGradient
            id="atmafua87GAY-Q3DVUuwga"
            x1="6"
            x2="42"
            y1="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="grey" />
            <stop offset="1" stop-color="grey" />
          </linearGradient>
          <path
            fill="url(#atmafua87GAY-Q3DVUuwga)"
            d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"
          />
          <path
            d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z"
            opacity=".05"
          />
          <path
            d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z"
            opacity=".05"
          />
          <path
            d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z"
            opacity=".05"
          />
          <path
            fill="#fff"
            d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"
          />
          <polygon
            fill="#fff"
            points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"
          />
        </svg>
      </li>
      {/**Javascript */}
      <li>
        <svg
          fill="grey"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="100px"
          height="100px"
          className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]"
        >
          <path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z" />
        </svg>
      </li>
      {/**Dart */}
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="96px"
          height="96px"
          className="md:w-[96px] md:h-[96px] w-[40px] h-[40px]"
        >
          <path
            fill="grey"
            d="M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z"
          />
          <path
            fill="grey"
            d="M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"
          />
          <path
            fill="grey"
            d="M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z"
          />
          <polygon fill="grey" points="35,37 13,37 19,43 35,43" />
        </svg>
      </li>
      {/**Node js */}
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="96px"
          height="96px"
          baseProfile="basic"
          className="md:w-[96px] md:h-[96px] w-[40px] h-[40px]"
        >
          <path
            fill="grey"
            d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
          />
          <path
            fill="grey"
            d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
          />
        </svg>
      </li>
      {/**GraphQL */}
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="96px"
          height="96px"
          className="md:w-[96px] md:h-[96px] w-[40px] h-[40px]"
        >
          <path
            fill="grey"
            d="M24.5,45.161L7,34.82V14.18L24.5,3.839L42,14.18V34.82L24.5,45.161z M9,33.68l15.5,9.159L40,33.68 V15.32L24.5,6.161L9,15.32V33.68z"
          />
          <circle cx="24.5" cy="5.5" r="3.5" fill="grey" />
          <circle cx="24.5" cy="43.5" r="3.5" fill="grey" />
          <circle cx="8.5" cy="33.5" r="3.5" fill="grey" />
          <circle cx="40.5" cy="33.5" r="3.5" fill="grey" />
          <circle cx="8.5" cy="15.5" r="3.5" fill="grey" />
          <circle cx="40.5" cy="15.5" r="3.5" fill="grey" />
          <path
            fill="grey"
            d="M42.72,35H6.28L24.5,2.978L42.72,35z M9.72,33H39.28L24.5,7.022L9.72,33z"
          />
        </svg>
      </li>
      {/**python */}
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="96px"
          height="96px"
          className="md:w-[96px] md:h-[96px] w-[40px] h-[40px]"
        >
          <path
            fill="grey"
            d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
          />
          <path
            fill="grey"
            d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
          />
        </svg>
      </li>
      {/**Tailwind */}
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
          className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
        >
          <linearGradient
            id="iOmQfjoCC4Hw6zVwRjSDha"
            x1="21.861"
            x2="25.703"
            y1="8.237"
            y2="36.552"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="grey" />
            <stop offset="1" stop-color="grey" />
          </linearGradient>
          <path
            fill="url(#iOmQfjoCC4Hw6zVwRjSDha)"
            d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"
          />
        </svg>
      </li>
      {/**android */}
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="96px"
          height="96px"
          className="md:w-[96px] md:h-[96px] w-[40px] h-[40px]"
        >
          <path
            fill="grey"
            d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"
          />
          <path
            fill="grey"
            d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"
          />
          <path
            fill="grey"
            d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"
          />
        </svg>
      </li>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: '500px',
    backgroundColor: "#252735",
    color: "white",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
  },
  appBar: {
    padding: "20px 6.25rem",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "1px 2px 10px #242525",

    position: "fixed",
  },
  nav: {
    display: "flex",
  },
  li: {
    marginRight: "1.4rem",
    display: "block",
  },
  link_number: {
    color: "#ffaf23",
  },
  lgrett: {
    padding: "8rem 25rem",
  },
  p: {
    margin: "40px 0px",
    maxWidth: "500px",
    // color: "#fff"
    color: "rgb(35, 19, 21)",
    // color: #6c591f85;
    // text-shadow: -2px 9px 8px #cbcac8;
    // color: '#5d5f60',
    // textShadow: '1px 1px 1px #5d5f30'
  },
  button: {
    marginTop: "20px",
  },
});

// https://brittanychiang.com/#jobs
