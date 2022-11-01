import chatImage from '../assets/chat.png';
import saasImage from '../assets/landing_page.png';
import ProjectDescription from "./sharedComponents/ProjectDescription";
import {images} from '../assets/image';
import { css } from 'aphrodite';
import { textStyle } from '../styles/appStyle';

const VisitButton = ({title, onPressed}: {title: string, onPressed: () => void}) => {
    return (
      <div 
        onClick={onPressed}
        className='border border-indigo-500 w-[100px] rounded-[12px] py-[8px] text-center text-[white] text-[20px] cursor-pointer'
      >
        {title}
      </div>
    )
}

export function Work() {
    return (
        <div id='work' className="flex flex-col justify-center w-full items-center py-[200px] bg-[#252735]">
            <div>
                <span className={css(textStyle.yellow_title, textStyle.h2)}>02. </span>
                <span className="text-4xl text-white">My Project</span>
            </div>
            <div className="flex flex-row my-[100px] items-center">
                <img className="mr-[100px] w-[400px] mr-[30px]" src={chatImage} alt="" />
                <ProjectDescription 
                    name={"Chat Application"} 
                    description={`Here is a Messenger application that I build with react for the front part and nodejs, express socket-io for the api. The user can create an account, arriving on the home page he can search for one to start a discussion. All messages are stored on the database, and there is a paging system to retrieve old messages`} 
                    githubLinhk={""} 
                    appLink={"https://github.com/Harry-Anthony"} 
                > 
                    <h6 className='text-[#ffaf23] text-[20px] my-[8px]'>Technologies :</h6>
                    <div className='flex mb-[50px]'>
                        <img className='w-[30px] mr-[10px]' src={images.react} alt="" />
                        <img className='w-[30px] mr-[10px]' src={images.mongodb} alt="" />
                        <img className='w-[30px] mr-[10px]' src={images.node} alt="" />
                        <img className='w-[30px] mr-[10px]' src={images.socketIO} alt="" />
                        <img className='w-[30px] mr-[10px]' src={images.redux} alt="" />
                    </div>
                    <VisitButton 
                        title='VISIT' 
                        onPressed={()=>{

                        }}
                    />
                </ProjectDescription>
            </div>
            <div className="flex flex-row mb-[100px] items-center">
            <ProjectDescription 
                    name={"Chat Application"} 
                    description={`this Landig page is built with Gatsby which a static site generator and react framework, using css module for styling.`} 
                    githubLinhk={""} 
                    appLink={"https://github.com/Harry-Anthony"} 
                > 
                    <h6 className='text-[#ffaf23] text-[20px] my-[8px]'>Technologies :</h6>
                    <div className='flex mb-[50px]'>
                        <img className='w-[30px] mr-[10px]' src={images.react} alt="" />
                        <img className='w-[30px] mr-[10px]' src={images.node} alt="" />
                        <img className='w-[30px] mr-[10px]' src={images.gatsby} alt="" />
                        <img className='w-[30px] mr-[10px]' src={images.css} alt="" />
                    </div>
                    <VisitButton 
                        title='VISIT' 
                        onPressed={()=>{

                        }}
                    />
                </ProjectDescription>
                <img className="ml-[100px] w-[400px]" src={saasImage} alt="" />
            </div>
        </div>
    )
}