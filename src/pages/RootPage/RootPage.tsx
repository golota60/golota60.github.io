import React, { useRef } from "react";
import TextWrapper from "../../components/generic/TextWrapper";
import ElementLooper from "../../components/generic/TextLooper";
import Repobox from "../../components/generic/Repobox";
import coffee from "url:../../assets/coffee.svg";
import github from "url:../../assets/github.svg";
import arrLeft from "url:../../assets/arr_left.svg";
import chevronDown from "url:../../assets/chevron-down.svg";
import npmjs from "url:../../assets/npmlogo.svg";
import yayfetch from "url:../../assets/sitegif.gif";
import termiLogo from "url:../../assets/termi-clicker-logo.png";
import "./RootPage.scss";
import YayfetchLogo from "../../components/YayfetchLogo";

const technologies = [
  "Javascript",
  "Typescript",
  "React",
  "CSS",
  "SASS",
  "Node",
  "Express",
  "UI/UX",
];

const RootPage = () => {
  let yayfetchPageRef = useRef<HTMLDivElement>(null);
  let termiClickerPageRef = useRef<HTMLDivElement>(null);
  return (
    <div className="pageWrapper">
      <div className="informationWrapper">
        <div className="information snapped-page">
          <TextWrapper className="information__name" textType="h1">
            I'm Szymon
          </TextWrapper>
          <TextWrapper textType="h2" className="information__technologies">
            And I really like&nbsp;
            <ElementLooper
              msTransitionTime={1500}
              textArray={technologies}
            ></ElementLooper>
          </TextWrapper>
          <div className="information__github">
            <TextWrapper textType="h2" color="gray">
              How much? See for yourself
            </TextWrapper>
            <a href="https://www.github.com/golota60" target="_blank">
              <img src={github} className="image__github"></img>
            </a>
          </div>
          <TextWrapper
            className="information__notableWork"
            textType="h3"
            onClick={() => {
              yayfetchPageRef.current &&
                yayfetchPageRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            fun-stuff i wrote
          </TextWrapper>
          <div>
            <img src={coffee} className="image__coffee"></img>
          </div>
          <div className="information__repoboxWrapper">
            <Repobox
              reponame="szymon-wiszczuk"
              description="The best JS developer around"
              languages={technologies}
              languageMsTransitionTime={1500}
              className="information_repo"
            />
          </div>
          <span className="information__clickme githubfont">
            <img className="information__clickme__arr" src={arrLeft} />
            Try dragging me around!
          </span>
        </div>{" "}
        <div
          className="workpage__chevronContainer"
          onClick={() => {
            yayfetchPageRef.current &&
              yayfetchPageRef.current.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          <img className="workpage__chevron" src={chevronDown} />
          <img className="workpage__chevronSmall" src={chevronDown} />
          See more
        </div>
      </div>
      <div className="workpage snapped-page" ref={yayfetchPageRef}>
        <YayfetchLogo className="workpage__yayfetch" />
        <TextWrapper textType="h4">
          Multi-platform node.js screenfetch tool
        </TextWrapper>
        <div>
          <a href="https://www.github.com/golota60/yayfetch" target="_blank">
            <img src={github} className="image__github"></img>
          </a>
          <a href="https://www.npmjs.com/package/yayfetch" target="_blank">
            <img src={npmjs} className="image__github"></img>
          </a>
        </div>
        <div className="workpage__blackbar">
          <img className="workpage__yayfetchgif" src={yayfetch} />
        </div>
        <div
          className="workpage__chevronContainer"
          onClick={() => {
            termiClickerPageRef.current &&
              termiClickerPageRef.current.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          <img className="workpage__chevron" src={chevronDown} />
          <img className="workpage__chevronSmall" src={chevronDown} />
          See more
        </div>
      </div>
      <div className="workpage snapped-page" ref={termiClickerPageRef}>
        <TextWrapper className="termi-clicker-header">
          termi-clicker
        </TextWrapper>
        <TextWrapper textType="h4">
          🤖 A programming-themed based-in-terminal clicker game!
        </TextWrapper>
        <div>
          <a
            href="https://www.github.com/golota60/termi-clicker"
            target="_blank"
          >
            <img src={github} className="image__github"></img>
          </a>
          <a href="https://www.npmjs.com/package/termi-clicker" target="_blank">
            <img src={npmjs} className="image__github"></img>
          </a>
        </div>
        <div className="workpage__blackbar">
          <img className="workpage__termigif" src={termiLogo} />
        </div>
      </div>
    </div>
  );
};

export default RootPage;
