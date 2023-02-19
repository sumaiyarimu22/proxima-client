import { useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails";
import ProjectFrom from "../components/ProjectFrom";
import { useProjectContext } from "../hooks/useProjectContext";

const Home = () => {
  const { projects, dispatch } = useProjectContext();

  useEffect(() => {
    const gettAllProjects = async () => {
      const res = await fetch("http://localhost:5000/api/projects");
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };

    gettAllProjects();
  }, [dispatch]);

  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-10">
      <div className="left col-span-2">
        <h2 className="text-3xl font-medium text-sky-400 mb-10 ">
          All Projects
        </h2>
        <div className="project-wrapper flex gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectDetails key={project._id} project={project} />
            ))}
        </div>
      </div>
      <ProjectFrom />
    </div>
  );
};

export default Home;
