const ProjectFrom = () => {
  return (
    <form className="project-form flex flex-col gap-5 ">
      <h2 className="text-3xl font-medium text-sky-400 mb-10 ">
        Add a new project
      </h2>
      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="title"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Project title
        </label>
        <input
          type="text"
          id="title"
          placeholder="e.g. e-commerce website"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="tech"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Technologies
        </label>
        <input
          type="text"
          id="tech"
          placeholder="e.g. node js react"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="budget"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Budget (in usd)
        </label>
        <input
          type="number"
          id="budget"
          placeholder="e.g. 500"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="duration"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Project Duration
        </label>
        <input
          type="number"
          id="duration"
          placeholder="e.g. 4 weeks"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="manager"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Project manager
        </label>
        <input
          type="text"
          id="manager"
          placeholder="e.g. project manager name"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="dev"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Developers
        </label>
        <input
          type="number"
          id="dev"
          placeholder="e.g. 5"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>

      <button
        type="submit"
        className="bg-sky-400 text-slate-900 rounded-lg py-3 hover:bg-sky-50 duration-300"
      >
        Add Project
      </button>
    </form>
  );
};

export default ProjectFrom;
