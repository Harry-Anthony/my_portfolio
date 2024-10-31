import chatImage from "../assets/chat.png";
import ProjectDescription from "./sharedComponents/ProjectDescription";
import { images } from "../assets/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Keras } from "../assets/svg/Keras.svg";
import { ReactComponent as Matplotlib } from "../assets/svg/matplotlib-1.svg";
import { ReactComponent as Numpy } from "../assets/svg/numpy-1.svg";
import { ReactComponent as OpenCV } from "../assets/svg/OpenCV.svg";
import { ReactComponent as Pandas } from "../assets/svg/pandas.svg";
import { ReactComponent as Pytorch } from "../assets/svg/pytorch-2.svg";
import { ReactComponent as ScikitLearn } from "../assets/svg/scikit-learn.svg";
import { ReactComponent as Seaborn } from "../assets/svg/seaborn-1.svg";
import { ReactComponent as Tensorflow } from "../assets/svg/tensorflow-2.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "../assets/style/Work.module.css";

import { Pagination, Autoplay } from "swiper/modules";
import MotionScroll from "./MotionScroll";

const project_container: string =
  "project-card flex lg:flex-row md:flex-row sm:flex-col-reverse my-[100px] bg-[white] p-[40px] items-center justify-center";

const VisitButton = ({
  title,
  onPressed,
  link,
}: {
  title: string;
  onPressed: () => void;
  link: string;
}) => {
  return (
    <div
      className="cursor-pointer visit-button border border-black rounded-[12px] p-[8px] hover:bg-[#c5c2c2]"
      onClick={onPressed}
      // className='border border-indigo-500 w-[100px] rounded-[12px] py-[8px] text-center text-[black] text-[20px] cursor-pointer'
    >
      <a className="flex items-center " href={link}>
        <img className="w-[30px] mr-[10px]" src={images.linkIcon} alt="" />
        <span>{title}</span>
      </a>
    </div>
  );
};

export function Work() {
  return (
    <div
      id="work"
      className="flex flex-col justify-center w-full items-center py-[50px] bg-[#e9e9e9]"
    >
      <div>
        <span className={"text-[#ffaf23] text-[2rem]"}>02. </span>
        <span className="text-4xl text-black">My Project</span>
      </div>
      <MotionScroll>
        <Swiper
          loop
          pagination={true}
          autoplay={{ delay: 5000 }}
          modules={[Pagination, Autoplay]}
          className={styles.swiper}
          effect="fade"
        >
          <SwiperSlide>
            <div className={project_container}>
              <ProjectDescription
                name={"Chat Application"}
                description={`Here is a Messenger application that I build with react for the front part and nodejs, express socket-io for the api. The user can create an account, arriving on the home page he can search for one to start a discussion. All messages are stored on the database, and there is a paging system to retrieve old messages`}
                githubLinhk={""}
                appLink={"https://github.com/Harry-Anthony"}
              >
                <h6 className="text-[#ffaf23] text-[20px] my-[8px] border-b-[1px] border-black">
                  Technologies :
                </h6>
                <div className="flex mb-[50px]">
                  <img
                    className="w-[30px] mr-[10px]"
                    src={images.react}
                    alt=""
                  />
                  <img
                    className="w-[30px] mr-[10px]"
                    src={images.mongodb}
                    alt=""
                  />
                  <img
                    className="w-[30px] mr-[10px]"
                    src={images.node}
                    alt=""
                  />
                  <img
                    className="w-[30px] mr-[10px]"
                    src={images.socketIO}
                    alt=""
                  />
                  <img
                    className="w-[30px] mr-[10px]"
                    src={images.redux}
                    alt=""
                  />
                </div>
                <div className="flex justify-end">
                  <VisitButton
                    link="https://develop--chat-chatear.netlify.app/"
                    title="see project"
                    onPressed={() => {}}
                  />
                </div>
              </ProjectDescription>
              <img
                className="ml-[30px] w-[300px] mr-[30px]"
                src={chatImage}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={project_container}>
              <ProjectDescription
                name={"House prices prediction"}
                description={`A machine learning project to predict house prices based on property features using regression models. The project includes data preprocessing, model training, evaluation, and comparison of different models.`}
                githubLinhk={""}
                appLink={"https://github.com/Harry-Anthony"}
              >
                <h6 className="text-[#ffaf23] text-[20px] my-[8px] border-b-[1px] border-black">
                  Technologies :
                </h6>
                <div className="flex mb-[50px]">
                  <ScikitLearn width={30} height={30} className="mr-[10px]" />
                  <Pandas width={30} height={30} className="mr-[10px]" />
                  <Numpy width={30} height={30} className="mr-[10px]" />
                  <Matplotlib width={30} height={30} className="mr-[10px]" />
                  <Seaborn width={30} height={30} />
                </div>
                <div className="flex justify-end">
                  <VisitButton
                    link="https://github.com/Harry-Anthony/House_prices_prediction"
                    title="see project"
                    onPressed={() => {}}
                  />
                </div>
              </ProjectDescription>
              <img
                className="ml-[30px] w-[300px] mr-[30px]"
                src={images.house}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={project_container}>
              <ProjectDescription
                name={"Rock classification"}
                description={`A deep learning project for classifying different types of rocks using image data. The model leverages transfer learning with pre-trained CNNs to improve accuracy and efficiency in identifying rock categories based on their visual features.`}
                githubLinhk={""}
                appLink={"https://github.com/Harry-Anthony"}
              >
                <h6 className="text-[#ffaf23] text-[20px] my-[8px] border-b-[1px] border-black">
                  Technologies :
                </h6>
                <div className="flex mb-[50px]">
                  <Tensorflow width={30} height={30} className="mr-[10px]" />
                  <Keras width={30} height={30} className="mr-[10px]" />
                  <Pytorch width={30} height={30} className="mr-[10px]" />
                  <OpenCV width={30} height={30} className="mr-[10px]" />
                  <ScikitLearn width={30} height={30} className="mr-[10px]" />
                  <Matplotlib width={30} height={30} className="mr-[10px]" />
                </div>
                <div className="flex justify-end">
                  <VisitButton
                    link="https://github.com/Harry-Anthony/rock_classification"
                    title="see project"
                    onPressed={() => {}}
                  />
                </div>
              </ProjectDescription>
              <img
                className="ml-[30px] w-[300px] mr-[30px]"
                src={images.rock}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </MotionScroll>
    </div>
  );
}
