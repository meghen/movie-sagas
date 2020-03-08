import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MovieList.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class MovieList extends Component {
    componentDidMount(){
        this.getMovies()
    }
    getMovies=()=>{
        //dispatching to generator fx
        this.props.dispatch({type: 'GET_MOVIES'})
    }
    detailsPage=(movie)=>{
        //routes to movies details page
        this.props.history.push(`/details/${movie.id}`)
    }
    render() {
        return (
            //loop thru db results, display on DOM as MaterialUI cards in grid (see css)
            <div className='MovieList'>
                {this.props.reduxState.movies.map(movie => 
                    <Card className="movieResult" key={movie.id}>
                            <CardMedia 
                                style={{height: 400}}
                                image={movie.poster}
                                className="moviePoster"
                                title= {movie.title}
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{movie.title}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined" color="primary" onClick={()=>this.detailsPage(movie)}>Learn More</Button>
                        </CardActions>
                    </Card>)}
            </div>
        )
    }
}
//pulling movies from reduxStore
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(MovieList);