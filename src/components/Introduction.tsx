import clsx from "clsx";

interface Props {
  className?: string;
}

const Introduction = ({ className }: Props) => {
  return (
    <div className={clsx("p-8", className)}>
      <p className="text-4xl font-extrabold">Szymon Wiszczuk</p>
      <p className="text-md mt-1 text-gray">
        Typescript and Rust enthusiast and hobbyist tinkerer
      </p>
      <a href="https://github.com/golota60">
        <img className="w-16" src="/github.svg" alt="github logo" />
      </a>
    </div>
  );
};

export default Introduction;
