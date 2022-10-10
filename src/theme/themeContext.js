import { createContext, useReducer} from 'react';

export const TContext = createContext({});
export const TConsumer = TContext.Consumer;

const reducer = (state, action) => {
  switch (action.type) {
    case "day":
      return {
        ...state,
        theme: "day"
      };
    case "night":
      return {
        ...state,
        theme: "night"
      };
    default: {
      return state;
    }
  }
};

export const TProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { theme: "day" });

  const { theme } = state;
  const toggler = () => {
    dispatch(theme === "day" ? { type: "night" } : { type: "day" });
  };
  let value = {
    theme,
    toggler
  };
  return <TContext.Provider value={value}>{children}</TContext.Provider>;
};