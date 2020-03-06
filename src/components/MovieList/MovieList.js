import React, {Component} from 'react';
import {connect} from 'react-redux';

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
                <h1>{JSON.stringify(this.props.reduxState.movies)}</h1>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(MovieList);