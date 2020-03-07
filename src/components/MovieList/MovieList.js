import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MovieList.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

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
                {this.props.reduxState.movies.map(movie => 
                    <Card className="movieResult" key={movie.id}>
                            <CardMedia 
                                style={{height: 300}}
                                image={movie.poster}
                                className="moviePoster"
                                title= {movie.title}
                            />
                        <CardContent>
                            <Typography>{movie.title}</Typography>
                        </CardContent>
                    </Card>)}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(MovieList);