import { useEffect, useReducer } from 'react';
import { initialState, reducer } from "./store/reducer";
import axios from "axios";

export const useFetch = (url) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(url).then(jsonResponse => {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        });
      }, [url]);
	return state;
};