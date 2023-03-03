import { useState } from "react";
import { useProjectContext } from "../hooks/useProjectContext";
import { useAuthContext } from "../hooks/useAuthContext";

const ProjectFrom = ({ project, setIsModalOpen, setIsOverlayOpen }) => {
  const [title, setTitle] = useState(project ? project.title : "");
  const [tech, setTech] = useState(project ? project.tech : "");
  const [budget, setBudget] = useState(project ? project.budget : "");
  const [duration, setDuration] = useState(project ? project.duration : "");
  const [manager, setManager] = useState(project ? project.manager : "");
  const [dev, setDev] = useState(project ? project.dev : "");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const { dispatch } = useProjectContext();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("you must be logged in!");
      return;
    }
    //data
    const projectObj = { title, tech, budget, duration, manager, dev };

    //if there is no project send post req
    if (!project) {
      //post request
      const res = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(projectObj),
      });
      const json = await res.json();

      //!req.ok, set error
      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }
      //req.ok, reset
      if (res.ok) {
        setTitle("");
        setTech("");
        setBudget("");
        setDuration("");
        setManager("");
        setDev("");
        setEmptyFields([]);
        setError(null);

        // console.log("new project has been added to the db", json);
        dispatch({ type: "CREATE_PROJECT", payload: json });
      }

      return;
    }

    //if there is project send patch req
    if (project) {
      //send patch req
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/projects/${project._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(projectObj),
        }
      );
      const json = await res.json();

      //!res.ok
      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }

      //res.ok
      if (res.ok) {
        setError(null);
        setEmptyFields([]);
        //dispatch
        dispatch({ type: "UPDATE_PROJECT", payload: json });
        //close overlay and modal
        setIsModalOpen(false);
        setIsOverlayOpen(false);
      }
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`project-form flex flex-col ${project ? "gap-3" : "gap-4"}`}
    >
      <h2
        className={`text-3xl font-medium text-sky-400 ${
          project ? "hidden" : ""
        }`}
      >
        Add a new project
      </h2>
      <div className="from-control flex flex-col gap-1 ">
        <label
          htmlFor="title"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Project title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          placeholder="e.g. e-commerce website"
          className={`bg-transparent border  py-2 px-5 rounded-lg outline-none focus:border-sky-400 duration-300 ${
            emptyFields?.includes("title")
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>
      <div className="from-control flex flex-col gap-1 ">
        <label
          htmlFor="tech"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Technologies
        </label>
        <input
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          type="text"
          id="tech"
          placeholder="e.g. node js react"
          className={`bg-transparent border  py-2 px-5 rounded-lg outline-none focus:border-sky-400 duration-300 ${
            emptyFields?.includes("tech")
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>
      <div className="from-control flex flex-col gap-1 ">
        <label
          htmlFor="budget"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Budget (in usd)
        </label>
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          type="number"
          id="budget"
          placeholder="e.g. 500"
          className={`bg-transparent border  py-2 px-5 rounded-lg outline-none focus:border-sky-400 duration-300 ${
            emptyFields?.includes("budget")
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>
      <div className="from-control flex flex-col gap-1 ">
        <label
          htmlFor="duration"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Project Duration
        </label>
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          type="number"
          id="duration"
          placeholder="e.g. 4 weeks"
          className={`bg-transparent border  py-2 px-5 rounded-lg outline-none focus:border-sky-400 duration-300 ${
            emptyFields?.includes("duration")
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>
      <div className="from-control flex flex-col gap-1 ">
        <label
          htmlFor="manager"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Project manager
        </label>
        <input
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          type="text"
          id="manager"
          placeholder="e.g. project manager name"
          className={`bg-transparent border  py-2 px-5 rounded-lg outline-none focus:border-sky-400 duration-300 ${
            emptyFields?.includes("manager")
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>
      <div className="from-control flex flex-col gap-1 ">
        <label
          htmlFor="dev"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Developers
        </label>
        <input
          value={dev}
          onChange={(e) => setDev(e.target.value)}
          type="number"
          id="dev"
          placeholder="e.g. 5"
          className={`bg-transparent border  py-2 px-5 rounded-lg outline-none focus:border-sky-400 duration-300 ${
            emptyFields?.includes("dev")
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>

      <button
        type="submit"
        className="bg-sky-400 text-slate-900 rounded-lg py-2 hover:bg-sky-50 duration-300"
      >
        {project ? "Confirm Update" : "Add Project"}
      </button>
      {error && (
        <p className="bg-rose-500/20 rounded-lg p-5 text-rose-500 border border-rose-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default ProjectFrom;
