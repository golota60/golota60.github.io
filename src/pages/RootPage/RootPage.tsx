// import Blogposts from "../../components/Blogposts";
import Introduction from "../../components/Introduction";
import Projects from "../../components/Projects";

const RootPage = () => {
  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col items-center">
      <Introduction className="flex flex-col items-center" />
      <div className="text-gray text-md flex flex-col items-center">
        <p>Business contact:</p>
        <a href="mailto: szymon.wiszczuk@gmail.com" className="hover:underline">
          szymon.wiszczuk@gmail.com
        </a>
      </div>
      {/* Enable once I've actually created any blogposts and move to grid 2/1 layout*/}
      {/* <Blogposts /> */}
      <Projects className="flex flex-col items-center" />
    </div>
  );
};

export default RootPage;
