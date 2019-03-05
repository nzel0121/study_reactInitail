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
    console.log('didMount');
    setTimeout(()=>{
      this.setState({
        movies: [
          {
            id:1,
            title:"Matrix",
            poster:"https://images-na.ssl-images-amazon.com/images/I/5117ZW5600L._SY445_.jpg"
          },
          {
            id:2,
            title:"Full metal jacket",
            poster:"https://images-na.ssl-images-amazon.com/images/I/71qDKzqJZrL._SL1101_.jpg"
          },
          {
            id:3,
            title:"Old boy",
            poster:"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          }
        ]
      })
    },5000)
  }
  state = {
  }

  _renderMovies = () => {
      console.log("_renderMovies");
      const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
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
