import axios from "axios"
import api from "../api"

function getMovies(){

    
    return async (dispatch)=>{
        try{
            dispatch({type: "GET_MOVIES_REQUEST"})
            const popularMovieApi = api.get('/movie/popular?language=en-US&page=1')
            console.log('movieAction', popularMovieApi.data)
            
            const topRatedMovieApi = api.get('/movie/top_rated?language=en-US&page=1');
            const upcomingMovieApi = api.get('/movie/upcoming?language=en-US&page=1');

            let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([popularMovieApi, topRatedMovieApi, upcomingMovieApi])
            console.log('popularMovies', popularMovies.data)
            console.log('topRatedMovies', topRatedMovies.data)
            console.log('upcomingMovies', upcomingMovies.data)
            dispatch({
                type: 'GET_MOVIES',
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data
                }
            })
        }catch(error){
            console.log('error', error)
            dispatch({type: 'GET_MOVIES_FAIL', payload: error})
        }
        

    }
}

export const movieAction = {
    getMovies,
}