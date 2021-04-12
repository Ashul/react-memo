import React, {useContext} from "react";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import { useFetch } from './hooks';

import './App.css'

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";



const App = () => {
	const { loading, movies, errorMessage } = useFetch(MOVIE_API_URL);

  // useEffect(() => {
  //   console.log('render')
  // }, []);

  // you can add this to the onClick listener of the Header component
  const refreshPage = () => {
    window.location.reload();
  };

  const search = searchValue => {
    
    // dispatch({
    //   type: "SEARCH_MOVIES_REQUEST"
    // });

    // const { status, data, error } = useFetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`);

    // console.log('hi', data)
    // axios().then(
    //   jsonResponse => {
    //     if (jsonResponse.data.Response === "True") {
    //       dispatch({
    //         type: "SEARCH_MOVIES_SUCCESS",
    //         payload: jsonResponse.data.Search
    //       });
    //     } else {
    //       dispatch({
    //         type: "SEARCH_MOVIES_FAILURE",
    //         error: jsonResponse.data.Error
    //       });
    //     }
    //   }
    // );
  };


  const retrievedMovies =
    loading && !errorMessage ? (
      // <img className="spinner" src={spinner} alt="Loading spinner" />
      'loading...'
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );



  return (
    <div className="App">
      <div className="m-container">
        <Header text="HOOKED" />
        
        <Search search={search} />

        <p className="App-intro">Sharing a few of our favourite movies</p>

        <div className="movies">{retrievedMovies}</div>
      </div>
    </div>
  );
};

export default App;
