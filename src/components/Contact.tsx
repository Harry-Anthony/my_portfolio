import { css } from "aphrodite";
import classNames from "classnames";
import { buttonStyle } from "../styles/appStyle";
import { useState } from "react";
import axios from "axios";
import MotionScroll from "./MotionScroll";
const initialState = {
  name: "",
  mail: "",
  text: "",
};
export const Contact = () => {
  const [formData, setFormData] = useState<any>(initialState);
  const sendMail = async () => {
    try {
      await axios.post(
        "https://chat-back-2928.onrender.com/chat-harivola/mail",
        formData
      );
      setFormData(initialState);
    } catch (error) {
      alert("unable to send message");
    }
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.text.length >= 5) {
      sendMail();
    }
  };
  const mailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#ffaf23"
      className="w-6 h-6"
    >
      <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
      <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
    </svg>
  );
  const userIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#ffaf23"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
  const messageIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#ffaf23"
      className="w-6 h-6"
    >
      <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
      <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
    </svg>
  );
  return (
    <div
      id="contact"
      className="flex flex-col w-full items-center py-[100px] bg-[#252735]"
    >
      <div>
        <span className={"text-[#ffaf23] text-[2rem]"}>03. </span>
        <span className="text-4xl text-white">Contact</span>
      </div>
      <MotionScroll>
        <div className="form lg:w-[500px] sm:w-[350px] flex flex-col mt-[20px]">
          <form onSubmit={handleSubmit}>
            <ContactForm
              onChange={handleChange}
              name="name"
              icon={userIcon}
              width="w-full"
              height=""
              title="Name"
              value={formData.name}
            />
            <ContactForm
              onChange={handleChange}
              name="mail"
              icon={mailIcon}
              width="w-full"
              height=""
              title="Email"
              value={formData.mail}
            />
            <div className="flex flex-col items-start w-full">
              <div className="flex">
                {messageIcon}
                <span className="block ml-[8px] text-white">Message</span>
              </div>
              <textarea
                onChange={handleChange}
                name="text"
                value={formData.text}
                className="h-[242px] bg-[#d4ddf3] w-full my-2 p-2 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className={classNames(
                css(buttonStyle.button),
                "mt-[20px] self-end"
              )}
            >
              Submit
            </button>
          </form>
        </div>
      </MotionScroll>
    </div>
  );
};

function ContactForm(props: any) {
  return (
    <div className="flex flex-col items-start mb-5">
      <div className="flex">
        {props.icon}
        <span className="block ml-[8px] text-white">{props.title}</span>
      </div>
      <input
        type="text"
        name={props.name}
        onChange={props.onChange}
        className={classNames(
          props.width,
          props.height,
          "bg-[#d4ddf3] my-2 p-2 text-start rounded"
        )}
        value={props.value}
      />
    </div>
  );
}
