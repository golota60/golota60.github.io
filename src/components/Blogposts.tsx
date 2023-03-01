import clsx from "clsx";

interface Props {
  className?: string;
}

const Blogposts = ({ className }: Props) => {
  return (
    <div className={clsx("p-8", className)}>
      <p className="text-4xl font-extrabold">Posts</p>
      <p className="text-md text-gray">
        Thoughts about software development and other things
      </p>
    </div>
  );
};

export default Blogposts;
