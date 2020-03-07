import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MovieList.css';

class MovieList extends Component {
    componentDidMount(){
        this.getMovies()
    }
    getMovies=()=>{
        this.props.dispatch({type: 'GET_MOVIES'})
    }
    render() {
        return (
            <div className='MovieList'>
                <h1>{this.props.reduxState.movies.map(movie => <div className="movieResult" key={movie.id}><img src={movie.poster} className="moviePoster"/></div>)}</h1>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(MovieList);