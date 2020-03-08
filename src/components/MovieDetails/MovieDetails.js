import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import { Typography } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

class MovieDetails extends Component {
    componentDidMount(){
        console.log('history', this.props.history);   
    }
    render() {
        const movieId = this.props.history.location.pathname
        return (
            <div className='MovieDetails'> 
                {/* <h1>{JSON.stringify(movieId.charAt(movieId.length-1))}</h1> */}
                {/* {JSON.stringify(this.props.reduxState.movies)} */}
                {this.props.reduxState.movies.map(movie => (movieId.charAt(movieId.length-1) == movie.id)? <h3>YEP</h3>: <></>)}

            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(MovieDetails);