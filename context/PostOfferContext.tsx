import { createContext, useReducer } from 'react';

interface IPostOfferContext {
  sketchData: any;
  setSketch: (formValues: any) => void;
}
const initialContext: IPostOfferContext = {
  sketchData: {},
  setSketch: (formValues: any) => {},
};
const initialState = {
  sketchData: {},
};

const PostJobContext = createContext(initialContext);

function postJobReducer(state: any, action: any) {
  console.log('action', action.payload);
  switch (action.type) {
    case 'SET_SKETCH':
      return {
        ...state,
        sketchData: {
          ...state.sketchData,
          ...action.payload,
        },
      };
    // case 'CLEAR_SKETCH':
    //   return {
    //     ...state
    //   }

    default:
      return state;
  }
}

// interface IPostData {
//   sketchData: any;
// }

function PostJobProvider(props: any) {
  const [state, dispatch] = useReducer(postJobReducer, initialState);

  function setSketch(sketchData: any) {
    console.log('sketchData', sketchData);
    dispatch({
      type: 'SET_SKETCH',
      payload: sketchData,
    });
  }

  return (
    <PostJobContext.Provider
      value={{ sketchData: state.sketchData, setSketch }}
      {...props}
    />
  );
}
export { PostJobContext, PostJobProvider };
