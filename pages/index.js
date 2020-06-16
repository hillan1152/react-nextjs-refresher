import React, { useState, useEffect } from 'react';

import SideMenu from '../components/SideMenu.js'
import Carousel from '../components/Carousel.js'
import MovieList from '../components/MovieList.js';
import Footer from '../components/Footer.js';
import { getMovies } from '../actions';
import { render } from 'react-dom';


export default function Home(props) {

  const { images } = props
  return (
      <div>
        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <SideMenu 
                  appName={"movie DB"}
                /> 
              </div>
              <div className="col-lg-9">
                <Carousel images={images}/>
                <div className="row">
                  <MovieList movies={props.movies || []}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

Home.getInitialProps = async () => {  
  const movies = await getMovies()
  const images = movies.map((movie) => {
    return {
      id: `image-${movie.id}`,
      url: movie.image,
      name: movie.name, 
      cover: movie.cover}})
  return {
    movies, 
    images,
  }
}
