import chatImage from "../assets/chat.png";
import saasImage from "../assets/landing_page.png";
import ProjectDescription from "./sharedComponents/ProjectDescription";
import { images } from "../assets/image";
import { css } from "aphrodite";
import { textStyle } from "../styles/appStyle";

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
        <span className={css(textStyle.yellow_title, textStyle.h2)}>02. </span>
        <span className="text-4xl text-black">My Project</span>
      </div>
      <div className="project-card flex lg:flex-row md:flex-row sm:flex-col-reverse my-[100px] bg-[white] p-[40px] items-center justify-center">
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
            <img className="w-[30px] mr-[10px]" src={images.react} alt="" />
            <img className="w-[30px] mr-[10px]" src={images.mongodb} alt="" />
            <img className="w-[30px] mr-[10px]" src={images.node} alt="" />
            <img className="w-[30px] mr-[10px]" src={images.socketIO} alt="" />
            <img className="w-[30px] mr-[10px]" src={images.redux} alt="" />
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
      {/* <div className="project-card flex lg:flex-row md:flex-row sm:flex-col-reverse  mb-[100px] bg-[white] p-[40px] items-center justify-center">
        <ProjectDescription
          name={"Landing page"}
          description={`this Landig page is built with Gatsby which a static site generator and react framework, using css module for styling.`}
          githubLinhk={""}
          appLink={"https://github.com/Harry-Anthony"}
        >
          <h6 className="text-[#ffaf23] text-[20px] my-[8px] border-b-[1px] border-black">
            Technologies :
          </h6>
          <div className="flex mb-[50px]">
            <img className="w-[30px] mr-[10px]" src={images.react} alt="" />
            <img className="w-[30px] mr-[10px]" src={images.node} alt="" />
            <img className="w-[30px] mr-[10px]" src={images.gatsby} alt="" />
            <img className="w-[30px] mr-[10px]" src={images.css} alt="" />
          </div>
          <div className="flex">
            <VisitButton
              link="https://63641cd7d0f63d116efdabee--thriving-piroshki-b28191.netlify.app/"
              title="see project"
              onPressed={() => {}}
            />
          </div>
        </ProjectDescription>
        <img className="ml-[30px] w-[300px] mb-[20px]" src={saasImage} alt="" />
      </div> */}
    </div>
  );
}
