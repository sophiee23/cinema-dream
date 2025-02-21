let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  loading: true,
}

function movieReducer(state = initialState, action) {
    let {type, payload} = action;
    switch (type) {
        case 'GET_MOVIES_REQUEST':
            console.log('GET_MOVIES_REQUEST', state.loading)
            return {...state, loading: true}
        case 'GET_MOVIES_FAIL':
            console.log('GET_MOVIES_FAIL', state.loading)
            return {...state, loading: false}
        case 'GET_MOVIES':
            console.log('GET_MOVIES', state.loading)
            return {...state, 
                popularMovies: payload.popularMovies, 
                topRatedMovies: payload.topRatedMovies, 
                upcomingMovies: payload.upcomingMovies,
                loading: false,
            }
        default:
            return state;
    }
}

export default movieReducer;