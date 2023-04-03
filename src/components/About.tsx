import { StyleSheet, css } from "aphrodite";
import { textStyle } from '../styles/appStyle';
import img from './about_bg.png'
import { images } from "../assets/image";

const ItemFormation = ({ diplome, date, school, lieu }: { diplome: string, date: string, school: string, lieu: string }) => {
    return (
        <div className="flex items-start bg-[#ffffff29] mx-[10px] sm:my-[10px] md:my-[10px]  max-w-[300px] px-[8px] py-[50px]">
            <img className="w-[45px] mr-[10px]" src={images.degree} alt="" />
            <div>
                <h4 className="text-[#ffaf23] mb-[10px] text-[23px]">{diplome}</h4>
                <h5 className="text-[#e1cc8acc] mb-[10px]">{school}</h5>
                <span className="mb-[10px] text-[white]">{date}</span>
                <div className="text-[#8f94e3] text-[18px] mb-[10px]">{lieu}</div>
            </div>
        </div>
    )
}

export function About() {
    return (
        <div id="about" className="about relative flex sm:px-6 sm:flex-col-reverse sm:items-center sm:py-[100px] lg:flex-row bg-[#252735] text-white lg:py-[300px] justify-center">
            <img className="about-bg" src={img} alt="" />
            <div className="flex flex-col items-center">
                <div className="mb-[50px] text-center mb-[50px]">
                    <span className={css(textStyle.yellow_title, textStyle.h2)}>01. </span>
                    <span className={css(textStyle.h2)}>About Me</span>
                    <p className={css(textStyle.paragraph, aboutStyles.p)}>
                        My name is Harivola, I started developing web and mobile applications since 2019.
                        I like the challenge, I always look for it to build my character and increase my skills.
                    </p>
                </div>
                <span className={css(textStyle.h2)}>University degrees</span>
                <div className="flex my-[50px] md:flex-row lg:flex-row sm:flex-col">
                    {/* <ItemFormation diplome={"LICENCE I"} date={"2018-2019"} school={"Mathématiques et Informatique"} lieu={"Université d'Antananarivo"} /> */}
                    <ItemFormation diplome={"LICENCE II"} date={"2019-2020"} school={"Mathématiques et Informatique"} lieu={"Université d'Antananarivo"} />
                    <ItemFormation diplome={"LICENCE III"} date={"2020-2021"} school={"Mathématiques Informatique et Statistiques Appliquées"} lieu={"Université d'Antananarivo"} />
                    <ItemFormation diplome={"MASTER I"} date={"2021-2022"} school={"Mathématiques Informatique et Statistiques Appliquées"} lieu={"Université d'Antananarivo"} />
                </div>
                <p className={"text-[20px]"}>
                    Here are a few technologies I’ve been working with recently:
                </p>
                <div className={css(aboutStyles.techno_container)}>
                    <ul>
                        <li className={css(aboutStyles.li)}><span className={css(aboutStyles.arrow_right)}>#</span> Javascript</li>
                        <li className={css(aboutStyles.li)}><span className={css(aboutStyles.arrow_right)}>#</span> React</li>
                        <li className={css(aboutStyles.li)}><span className={css(aboutStyles.arrow_right)}>#</span> Node.js</li>
                    </ul>
                    <ul>
                        <li className={css(aboutStyles.li)}><span className={css(aboutStyles.arrow_right)}>#</span> MongoDB</li>
                        <li className={css(aboutStyles.li)}><span className={css(aboutStyles.arrow_right)}>#</span> Dart</li>
                        <li className={css(aboutStyles.li)}><span className={css(aboutStyles.arrow_right)}>#</span> Flutter</li>
                    </ul>
                </div>
            </div>
            {/* <img className={css(aboutStyles.img)} src={harivola} alt="" /> */}
        </div>
    )
}


const aboutStyles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100vw',
        backgroundColor: '#252735',
        padding: '13rem 30rem',
        color: 'white'
    },
    p: {
        marginTop: '20px',
        maxWidth: '500px',
        lineHeight: '30px'
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
        display: 'flex',
        justifyContent: 'space-between',
        width: '250px',
        marginTop: '20px'
    },
    li: {
        // color: 'white'
        margin: '8px 0px'
    },
    arrow_right: {
        marginRight: '10px',
        color: '#ffaf23'
    }
})