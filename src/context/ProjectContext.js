import { createContext, useReducer } from "react";

const initalState = {
  projects: null,
};
export const projectReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROJECTs":
      return {
        projects: action.payload,
      };
    case "CREATE_PROJECT":
      return {
        projects: [action.payload, ...state.projects],
      };
    default:
      return state;
  }
};
export const ProjectContext = createContext();

//create provider--top label component wrap ,provider provide state
export const ProjectContextProvider = ({ Children }) => {
  //dispatch =  dispatch(type=ki dhoroner action,payload= ki data) for state menuplate
  const [state, dispatch] = useReducer(projectReducer, initalState);

  return (
    <ProjectContext.Provider value={{ ...state, dispatch }}>
      {Children}
    </ProjectContext.Provider>
  );
};
