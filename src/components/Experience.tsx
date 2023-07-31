import { StyleSheet, css } from "aphrodite";
import { textStyle } from "../styles/appStyle";
import classNames from "classnames";
import { useState } from "react";

export function Experience() {
  const [index, setIndex] = useState(0);
  return (
    <div
      id="exp"
      className={classNames(
        "flex items-center flex-col bg-[#252735] l:py-[200px] sm:py-[200px]",
        css(styles.container)
      )}
    >
      <div>
        <span className={css(textStyle.yellow_title, textStyle.h2)}>02. </span>
        <span className="text-4xl text-white">Where I’ve Worked</span>
      </div>
      <div
        className={classNames(
          "w-[500px] mt-[50px] h-full",
          css(styles.tabChild)
        )}
      >
        <div className="flex w-full">
          <div>
            <TabButton
              onPressed={() => {
                setIndex(0);
              }}
              title="Clicar"
              selected={index === 0}
            />
            <TabButton
              onPressed={() => {
                setIndex(1);
              }}
              title="Naizup"
              selected={index === 1}
            />
          </div>
          <div className={classNames(css(styles.tabChild), "relative w-full")}>
            <div
              className={classNames(
                "absolute text-white ml-5 w-full",
                index === 0 ? css(styles.displayBlock) : css(styles.displayNone)
              )}
            >
              <div>
                <span>Mobile developer </span>
                <span className={css(textStyle.yellow_title)}>@ Clicar</span>
              </div>
              <div className="mt-5">
                <span className={css(textStyle.yellow_title)}># </span>
                <span>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </span>
              </div>
              <div className="mt-5">
                <span className={css(textStyle.yellow_title)}># </span>
                <span>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </span>
              </div>
              <div className="mt-5">
                <span className={css(textStyle.yellow_title)}># </span>
                <span>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </span>
              </div>
            </div>
            <div
              className={classNames(
                "absolute text-white w-full ml-5",
                index === 1 ? css(styles.displayBlock) : css(styles.displayNone)
              )}
            >
              <div className="">
                <span>Mobile developer </span>
                <span className={css(textStyle.yellow_title)}>@ Naizup</span>
              </div>
              <div className="mt-5">
                <span className={css(textStyle.yellow_title)}># </span>
                <span>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </span>
              </div>
              <div className="mt-5">
                <span className={css(textStyle.yellow_title)}># </span>
                <span>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </span>
              </div>
              <div className="mt-5">
                <span className={css(textStyle.yellow_title)}># </span>
                <span>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </span>
              </div>
            </div>
            {/* <div className={classNames("absolute text-white",index === 2 ? css(styles.displayBlock):css(styles.displayNone))}>
                            Chat
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton(props: any) {
  return (
    <div
      onClick={props.onPressed}
      className={classNames(
        css(styles.borderButton),
        css(styles.pointer),
        "w-[150px] py-[10px] text-center",
        props.selected ? css(styles.active_Button) : "text-white"
      )}
    >
      {props.title}
    </div>
  );
}
const styles = StyleSheet.create({
  p: {
    marginTop: "20px",
    maxWidth: "500px",
    lineHeight: "30px",
  },
  img: {
    width: "300px",
    height: "350px",
    backgroundColor: "black",
    marginTop: "50px",
    marginLeft: "40px",
    borderRadius: "20px",
  },
  techno_container: {
    display: "flex",
    justifyContent: "space-between",
    width: "250px",
    marginTop: "20px",
  },
  li: {
    // color: 'white'
    margin: "8px 0px",
  },
  arrow_right: {
    marginRight: "10px",
    color: "#ffaf23",
  },
  active_Button: {
    backgroundColor: "rgb(37, 19, 53, 0.2)",
    color: "#ffaf23",
    borderLeft: "3px solid #ffaf23",
  },
  borderButton: {
    borderLeft: "2px solid #323344;",
  },
  displayNone: {
    display: "none",
  },
  displayBlock: {
    display: "block",
  },
  pointer: {
    cursor: "pointer",
  },
  container: {
    "@media screen and (max-width: 640px)": {
      height: "100%",
      padding: "100px 0px",
    },
  },
  tabChild: {
    height: "max-content",
    // overflow: "hidden",
    // backgroundColor: "green"
  },
});
