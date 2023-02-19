import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export const useProjectContext = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error(
      "You must call useProjeectContext inside a ProjectContextProvider"
    );
  }

  return context;
};

//customiz context use hook--useContext first import,context in which the hook is created to use must be imported,create funcation name file name related,context= projectContext.provider value return
