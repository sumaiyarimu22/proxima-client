import { useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails";
import ProjectFrom from "../components/ProjectFrom";
import { useProjectContext } from "../hooks/useProjectContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { projects, dispatch } = useProjectContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const gettAllProjects = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/projects`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };

    if (user) {
      gettAllProjects();
    }
  }, [dispatch, user]);

  return (
    <div className="home container mx-auto py-20 grid md:grid-cols-3 gap-10 w-full">
      <div className="left col-span-2">
        <h2 className="text-3xl font-medium text-sky-400 mb-10 ">
          {projects.length < 1 ? "No projects" : "All Projects"}
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
