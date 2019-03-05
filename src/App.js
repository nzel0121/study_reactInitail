import React, { Component } from 'react';
import './App.css';
import './Movie';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full metal jacket",
  "Old boy"
]

const movieImgs = [
  "https://images-na.ssl-images-amazon.com/images/I/5117ZW5600L._SY445_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71qDKzqJZrL._SL1101_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
]
class App extends Component {
  //componentWillReceiveProps -> shouldComponentUpdate == true -> componentWillUpdate -> render -> componentDidUpdate
  componentWillMount(){
    console.log('willMount');
  }
  componentDidMount(){
    this._getMovies();
  }
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies 
    })
  }
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
        .then(potato => potato.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
  }
  state = {}
  _renderMovies = () => {
      console.log("_renderMovies");
      const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id}/>
    })
    return movies
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        {
          this.state.movies ? this._renderMovies() : 'Loading'
        }
      </div>
    );
  }
}

export default App;
