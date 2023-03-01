import clsx from "clsx";
import { Link } from "found";
import ProjectPreview from "./ProjectPreview";
import { projects } from "./projectsData";

interface Props {
  className?: string;
}

const Projects = ({ className }: Props) => {
  return (
    <div className={clsx("p-8", className)}>
      <p className="text-4xl font-extrabold">Projects</p>
      <p className="text-md mt-1 text-gray mb-2">
        Some of the stuff I've created or worked on
      </p>
      <div className="grid gap-4">
        {projects.map(({ title, logo, description, githubLink, language }) => (
          <ProjectPreview
            key={title}
            logo={logo}
            title={title}
            description={description}
            githubLink={githubLink}
            language={language}
          />
        ))}
      </div>
      <p className="text-md text-gray mt-4">
        Plus some OSS projects like{" "}
        <a
          href="https://github.com/4Catalyzer/found"
          className="hover:underline"
        >
          found
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/react-bootstrap/react-bootstrap"
          className="hover:underline"
        >
          react-bootstrap
        </a>
      </p>
    </div>
  );
};

export default Projects;
