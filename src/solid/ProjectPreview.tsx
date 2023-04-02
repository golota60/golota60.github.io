import clsx from "clsx";
import type { Project } from "./projectData";

interface Props extends Project {
  className?: string;
}

const getLanguageColor = (color: Project["language"]) => {
  if (color === "Rust") {
    return "bg-rust";
  }
  if (color === "Typescript") {
    return "bg-typescript";
  }
};

const ProjectPreview = ({
  className,
  logo,
  title,
  description,
  githubLink,
  language,
}: Props) => {
  return (
    <div
      class={clsx(
        "mb-1 w-full rounded border p-2 border-black border-solid grid grid-cols-[3rem_auto_3rem]",
        className
      )}
    >
      <div class="w-12 flex justify-center items-center">{logo}</div>
      <div class="flex flex-col ml-2 pr-2">
        <a href={githubLink} class="no-underline">
          <h2 class="text-xl font-bold no-underline hover:underline m-0">
            {title}
          </h2>
        </a>
        <p class="text-md decoration-solid m-0">{description}</p>
        {language && (
          <span class="flex items-center text-sm mt-1">
            <span
              class={clsx(
                "block w-3 h-3 rounded-[50%] mr-1",
                language && getLanguageColor(language)
              )}
            />
            {language}
          </span>
        )}
      </div>
      <a href={githubLink} class="flex justify-center items-center">
        <img
          src="/github.svg"
          alt="github image linking to the repository"
          class="w-12"
        />
      </a>
    </div>
  );
};

export default ProjectPreview;
