import { createContext, useReducer } from "react";

const initialState = {
  projects: [],
};

export const projectReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    case "CREATE_PROJECT":
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const ProjectContext = createContext(); //main context
export const ProjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  return (
    <ProjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

//import createContext,create ProjectContext call createCOntext, create ProjectContextProvider then return provider ,declire state with useReducer(reducer,initalState) and return arry [state,dispatch]   , provider value added, top declire initalState, create projectReducer function, action= type--"CREATE_PROJECT" / payload-- data
