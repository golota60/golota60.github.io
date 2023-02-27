import React, { useRef } from "react";
import TextWrapper from "../../components/generic/TextWrapper";
import ElementLooper from "../../components/generic/TextLooper";
import Repobox from "../../components/generic/Repobox";
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
    <div>
      <div>
        <div>
          <TextWrapper textType="h1">
            I'm Szymon
          </TextWrapper>
          <TextWrapper textType="h2">
            And I really like{" "}
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
              <img src="/github.svg"></img>
            </a>
          </div>
          <TextWrapper
            textType="h3"
            onClick={() => {
              yayfetchPageRef.current &&
                yayfetchPageRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            fun-stuff i wrote
          </TextWrapper>
          <div>
            <img src="/coffee.svg"></img>
          </div>
          <div>
            <Repobox
              reponame="szymon-wiszczuk"
              description="The best JS developer around"
              languages={technologies}
              languageMsTransitionTime={1500}
            />
          </div>
        </div>
        <div
          onClick={() => {
            yayfetchPageRef.current &&
              yayfetchPageRef.current.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
        </div>
      </div>
      <div ref={yayfetchPageRef}>
        <YayfetchLogo />
        <TextWrapper textType="h4">
          Multi-platform node.js screenfetch tool
        </TextWrapper>
        <div>
          <a href="https://www.github.com/golota60/yayfetch" target="_blank">
            <img src="/github.svg"></img>
          </a>
          <a href="https://www.npmjs.com/package/yayfetch" target="_blank">
            <img src="/npmlogo.svg"></img>
          </a>
        </div>
        <div>
          <img src="/sitegif.gif" />
        </div>
        <div
          onClick={() => {
            termiClickerPageRef.current &&
              termiClickerPageRef.current.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
        </div>
      </div>
      <div ref={termiClickerPageRef}>
        <TextWrapper>
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
            <img src="/github.svg"></img>
          </a>
          <a href="https://www.npmjs.com/package/termi-clicker" target="_blank">
            <img src="/npmlogo.svg"></img>
          </a>
        </div>
        <div>
          <img src="/termi-clicker-logo.png" />
        </div>
      </div>
    </div>
  );
};

export default RootPage;
