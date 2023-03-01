import clsx from "clsx";
import { Project } from "./projectsData";

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
      className={clsx(
        "rounded border p-4 border-gray grid grid-cols-[3rem_auto_3rem]",
        className
      )}
    >
      <div className="w-12 flex justify-center items-center">{logo}</div>
      <div className="flex flex-col ml-2 pr-2">
        <a href={githubLink}>
          <h2 className="text-xl font-bold hover:underline">{title}</h2>
        </a>
        <p className="text-md text-gray decoration-solid">{description}</p>
        {language && (
          <span className="flex items-center text-sm text-gray mt-1">
            <span
              className={clsx(
                "block w-3 h-3 rounded-[50%] mr-1",
                language && getLanguageColor(language)
              )}
            />
            {language}
          </span>
        )}
      </div>
      <a href={githubLink} className="flex justify-center items-center">
        <img
          src="/github.svg"
          alt="github image linking to the repository"
          className="w-12"
        />
      </a>
    </div>
  );
};

export default ProjectPreview;
