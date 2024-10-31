import { StyleSheet, css } from "aphrodite";
import img from "./about_bg.png";
import { images } from "../assets/image";
import { Pagination, EffectFlip, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../assets/style/About.module.css";
import { ReactComponent as Javascript } from "../assets/svg/javascript-1.svg";
import { ReactComponent as Mongo } from "../assets/svg/mongodb-icon-2.svg";
import { ReactComponent as Node } from "../assets/svg/nodejs-2.svg";
import { ReactComponent as ReactNative } from "../assets/svg/react-native-1.svg";
import { ReactComponent as Keras } from "../assets/svg/Keras.svg";
import { ReactComponent as Pytorch } from "../assets/svg/pytorch-2.svg";
import { ReactComponent as ScikitLearn } from "../assets/svg/scikit-learn.svg";
import { ReactComponent as Python } from "../assets/svg/python-5.svg";
import { ReactComponent as Tensorflow } from "../assets/svg/tensorflow-2.svg";
import { ReactComponent as Left } from "../assets/svg/Left.svg";
import { ReactComponent as Right } from "../assets/svg/Right.svg";
import { useRef } from "react";
import MotionScroll from "./MotionScroll";
const ItemFormation = ({
  diplome,
  date,
  school,
  lieu,
}: {
  diplome: string;
  date: string;
  school: string;
  lieu: string;
}) => {
  return (
    <a className="cursor-pointer" href="http://misa-madagascar.com/">
      <div className="flex items-start bg-[#ffffff29] mx-[10px] sm:my-[15px] h-[350px] md:my-[15px] max-w-[400px] px-[20px] py-[50px]">
        <img className="w-[45px] mr-[10px]" src={images.degree} alt="" />
        <div>
          <h4 className="text-[#ffaf23] mb-[10px] text-[23px]">{diplome}</h4>
          <h5 className="text-[#e1cc8acc] mb-[10px]">{school}</h5>
          <span className="mb-[10px] text-[white]">{date}</span>
          <div>
            <a
              href="http://misa-madagascar.com/"
              className="text-[#8f94e3] text-[18px] mb-[10px]"
            >
              {lieu}
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export function About() {
  const swiperRef = useRef<SwiperClass>();

  return (
    <div
      id="about"
      className="about relative flex sm:px-6 sm:flex-col-reverse sm:items-center sm:py-[100px] lg:flex-row bg-[#252735] text-white lg:py-[150px] pb-[100px] justify-center"
    >
      <img className="about-bg" src={img} alt="" />
      <div className="flex flex-col items-center">
        <MotionScroll>
          <div className="my-[50px] text-center mb-[50px]">
            <span className={"text-[#ffaf23] text-[2rem]"}>01. </span>
            <span className="text-[2rem]">About Me</span>
            <p className="paragraphe">
              My name is Harivola, I started developing web and mobile
              applications since 2019. I like the challenge, I always look for
              it to build my character and increase my skills.
            </p>
          </div>
        </MotionScroll>
        <MotionScroll duration={1.5} className="flex flex-col items-center">
          <span className="text-[1.5rem] mb-[20px]">
            <span className={css(aboutStyles.arrow_right)}>#</span>University
            degrees
          </span>
          <Swiper
            loop={true}
            onSwiper={(swiper: SwiperClass) => {
              swiperRef.current = swiper;
            }}
            effect={"flip"}
            // grabCursor={true}
            pagination={true}
            modules={[Pagination, EffectFlip, Navigation]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperslide}>
              <ItemFormation
                diplome={"LICENCE I and LICENCE II"}
                date={"2017-2019"}
                school={"Mathématiques et Informatique"}
                lieu={"Université d'Antananarivo"}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslide}>
              <ItemFormation
                diplome={"LICENCE III"}
                date={"2020-2021"}
                school={"Mathématiques Informatique et Statistiques Appliquées"}
                lieu={"MISA"}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslide}>
              <ItemFormation
                diplome={"MASTER I"}
                date={"2021-2022"}
                school={"Mathématiques Informatique et Statistiques Appliquées"}
                lieu={"MISA"}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslide}>
              <ItemFormation
                diplome={"MASTER II"}
                date={"2022-2023"}
                school={"Mathématiques Informatique et Statistiques Appliquées"}
                lieu={"MISA"}
              />
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-row justify-between w-[100px] py-[10px] my-[20px]">
            <div
              className="cursor-pointer"
              onClick={() => {
                swiperRef.current?.slidePrev();
              }}
            >
              <Left width={40} height={40} color="red" />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Right width={40} height={40} />
            </div>
          </div>
        </MotionScroll>
        <MotionScroll className={"flex flex-col items-center"}>
          <p className={"text-[20px] paragraphe text-center mb-[20px]"}>
            <span className={css(aboutStyles.arrow_right)}>#</span>
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className={css(aboutStyles.techno_container)}>
            <ul>
              <li className={css(aboutStyles.li)}>
                <Javascript
                  width={80}
                  height={80}
                  className="mx-[5px] my-[15px]"
                />
              </li>
              <li className={css(aboutStyles.li)}>
                <Node width={80} height={80} className="mx-[5px] my-[15px]" />
              </li>
              <li className={css(aboutStyles.li)}>
                <Mongo width={80} height={80} className="mx-[5px] my-[15px]" />
              </li>
            </ul>
            <ul>
              <li className={css(aboutStyles.li)}>
                <ReactNative
                  width={80}
                  height={80}
                  className="mx-[5px] my-[15px]"
                />
              </li>
              <li className={css(aboutStyles.li)}>
                <Python width={80} height={80} className="mx-[5px] my-[15px]" />
              </li>
              <li className={css(aboutStyles.li)}>
                <ScikitLearn
                  width={80}
                  height={80}
                  className="mx-[5px] my-[15px]"
                />
              </li>
            </ul>
            <ul>
              <li className={css(aboutStyles.li)}>
                <Tensorflow
                  width={80}
                  height={80}
                  className="mx-[5px] my-[15px]"
                />
              </li>
              <li className={css(aboutStyles.li)}>
                <Keras width={80} height={80} className="mx-[5px] my-[15px]" />
              </li>
              <li className={css(aboutStyles.li)}>
                <Pytorch
                  width={80}
                  height={80}
                  className="mx-[5px] my-[15px]"
                />
              </li>
            </ul>
          </div>
        </MotionScroll>
      </div>
      {/* <img className={css(aboutStyles.img)} src={harivola} alt="" /> */}
    </div>
  );
}

const aboutStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100vw",
    backgroundColor: "#252735",
    padding: "13rem 30rem",
    color: "white",
  },
  p: {
    marginTop: "20px",
    maxWidth: "500px",
    lineHeight: "30px",
  },
  "@media only screen and (max-width: 640px)": {
    p: {
      marginTop: "20px",
      maxWidth: "350px",
      lineHeight: "30px",
    },
  },
  // img: {
  //     width: '300px',
  //     height: '350px',
  //     backgroundColor: 'black',
  //     marginTop: '50px',
  //     marginLeft: '40px',
  //     borderRadius: '20px'
  // },
  techno_container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100vw",
    justifyContent: "center",
  },
  li: {
    // color: 'white'
    margin: "8px 20px",
  },
  arrow_right: {
    marginRight: "10px",
    color: "#ffaf23",
  },
});
