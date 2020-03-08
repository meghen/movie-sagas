import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class MovieDetails extends Component {
    componentDidMount(){
        console.log('history', window.location.href);   
    }
    seeAllMovies=()=>{
        this.props.history.push(`/#`)
    }
    render() {
        // this.props.history.location.pathname gets the url after button click
        // .charAt allows us to target the last character in the url, which happens to be our movie id
        const movieId = this.props.history.location.pathname
        return (
            <div className='MovieDetails'> 
        {this.props.reduxState.movies.map(movie => 
            (movieId.charAt(movieId.length-1) == movie.id)? 
                <Card className="movieResult" key={movie.id}>
                    {/* <CardMedia 
                        style={{height: 100}}
                        image={movie.poster}
                        className="moviePoster"
                        title= {movie.title}
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{movie.title}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{movie.description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" color="primary" onClick={this.seeAllMovies}>All Movies</Button>
                        <Button size="small" variant="outlined" color="secondary" onClick={this.editPage}>Edit</Button>
                    </CardActions>
                 </Card>
                 //empty JSX tags to fill in for "else" in ternary operator
                : <></>)}

            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(MovieDetails);