import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './MovieDetails.css';
class MovieDetails extends Component {
    state = {
        moviesDisplaying: true,
        dataToSend: {
            id: 0,
            title: '',
            description: ''
        }
    }
    componentDidMount(){
        this.getAllInfo();
    }
    editPage=()=>{
        this.setState({
            ...this.state,
            moviesDisplaying: false
        })
    }
    getAllInfo=()=>{
        this.props.dispatch({type: 'GET_GENRES'})
    }
    handleChange=(event, typeOf)=>{
        this.setState({
            ...this.state,
            dataToSend: {
                ...this.state.dataToSend,
                [typeOf]: event.target.value
            }
        })
    }
    saveEdits=(id)=>{
        //dispatch to generator function
        this.setState({ 
            ...this.state,
            moviesDisplaying: true
        })   
        console.log('after typing we have:', this.state);
        this.props.dispatch({type:'PUT_MOVIES', payload: this.state.dataToSend}) 
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
                {this.state.moviesDisplaying ? (
                    this.props.reduxState.movies.map(movie => 
                        // eslint-disable-next-line
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
                                    <Button size="small" variant="outlined" color="primary" onClick={this.seeAllMovies}>Back To All Movies</Button>
                                    <Button size="small" variant="outlined" color="secondary" onClick={()=>this.editPage(movie.id)}>Edit</Button>
                                </CardActions>
                             </Card>
                             //empty JSX tags to fill in for "else" in ternary operator
                            : <></>)
                    ) : (
                        <Card>
                            <CardContent>
                                <input className="editTitle" placeholder="Edit Movie Title" onChange={(event)=>this.handleChange(event, 'title')}></input>
                                <br></br>
                                <textarea className="editDesc" placeholder="Edit Movie Description" onChange={(event)=>this.handleChange(event, 'description')}></textarea>
                                <br></br>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined" color="primary" onClick={this.saveEdits}>Save</Button>
                            </CardActions>
                        </Card>
                    )}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(MovieDetails);