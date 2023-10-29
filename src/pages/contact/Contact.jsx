import { NavLink } from "react-router-dom";
import { ArrowIcon } from "../../components/bolt_icons/BoltIcons.jsx";
import {
  SmolLogo,
  BtLogos,
  BtOverlays,
  BtSchedules,
} from "../../components/nav/Nav.jsx";
import { MetaTags } from "../../components/MetaTags.jsx";
import { useForm } from "react-hook-form";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Footer3Icon } from "../../components/footer/Footer.jsx";

export const Contact = (props) => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [submitMessage, setSubmitMessage] = useState(null);

  const [Error, setError] = useState("");
  const clearFields = (e) => {
    if (Error || errors) {
      setError();
      clearErrors();
      setSubmitMessage(null);
      console.log("reset");
    }
  };

  const sendEmail = (e) => {
    //e.preventDefault();
    emailjs
      .sendForm(
        "service_r2c3ig8",
        "template_j385ah9",
        form.current,
        "PWAaqSbEwQXEo4NqD"
      )

      .then(
        (result) => {
          console.log(result.text);
          setSubmitMessage(true);
        },
        (error) => {
          console.log("fail");
          setError("Kunne ikke sende!");
        }
      );
    document.getElementById("Form").reset();
  };

  useEffect(() => {
    let timeoutId;
    if (isSubmitSuccessful) {
      timeoutId = setTimeout(() => {
        setSubmitMessage(null);
      }, 5000); // change back to "noShow" after 5 seconds (adjust as needed)
    }
    return () => clearTimeout(timeoutId);
  }, [isSubmitSuccessful]);

  const Flip = "Flip";
  const NoFlip = "NoFlip";
  const [SideState, setSideState] = useState(
    localStorage.getItem("SideState") || NoFlip
  );

  const handleClick = () => {
    if (SideState === NoFlip) {
      setSideState(Flip);
      localStorage.setItem("SideState", Flip);
    } else {
      setSideState(NoFlip);
      localStorage.setItem("SideState", NoFlip);
    }
  };

  return (
    <section id="Contact">
      <MetaTags title={props.title}></MetaTags>
      <ArrowIcon season={props.season}></ArrowIcon>
      <header>
        <h5>{props.title}</h5>
        <SmolLogo></SmolLogo>
        <h1 id="TOSTitle">Commission form</h1>
        <p>
          DId you find my work cool? <br /> Then feel free to DM me by just
          filling out the form down below.
          <br />
          <br />
          <i> I'll respown as soon as possible! :D </i>
        </p>
      </header>
      <hr />
      <main>
        <span></span>
        <form id="Form" ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div id="FormWrapper">
            <div
              className={
                Error || errors.userName ? "InputWrapperError" : "InputWrapper"
              }
            >
              <input
                onClick={clearFields}
                type="text"
                name="userName"
                placeholder="What's your name?*"
                autoComplete="off"
                {...register("userName", {
                  required: true,
                  min: 2,
                })}
              />
              {errors.userName?.type === "required" && (
                <span>You need to write your name!</span>
              )}
            </div>

            <div
              className={
                Error || errors.userContact
                  ? "InputWrapperError"
                  : "InputWrapper"
              }
            >
              <input
                onClick={clearFields}
                type="text"
                name="userContact"
                placeholder="Prefered contact?* (platform and username)"
                autoComplete="off"
                {...register("userContact", {
                  required: true,
                  min: 2,
                })}
              />
              {errors.userContact?.type === "required" && (
                <span>You need to write your contact!</span>
              )}
            </div>

            <div
              className={
                Error || errors.userInterested
                  ? "InputWrapperError"
                  : "InputWrapper"
              }
            >
              <textarea
                onClick={clearFields}
                type="text"
                name="userInterested"
                placeholder="What are you interested in?*"
                autoComplete="off"
                {...register("userInterested", {
                  required: true,
                  min: 2,
                })}
              />
              {errors.userInterested?.type === "required" && (
                <span>You need to write what you want!</span>
              )}
            </div>

            <div
              className={
                Error || errors.userQuestion
                  ? "InputWrapperError"
                  : "InputWrapper"
              }
            >
              <textarea
                onClick={clearFields}
                type="text"
                name="userQuestion"
                placeholder="Any questions?"
                autoComplete="off"
              />
            </div>
          </div>
          <button
            data-type="emoji"
            id="Submit"
            onClick={clearFields}
            type="submit"
          >
            Send
          </button>
          <h2 id={submitMessage ? "Show" : "noShow"}>👍</h2>

        </form>
        <span></span>
      </main>
      <hr />
      <footer>
        <Footer3Icon season={props.season} />
      </footer>
    </section>
  );
};
