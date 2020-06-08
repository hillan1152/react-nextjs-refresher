import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import SideMenu from '../components/SideMenu.js'
import Carousel from '../components/Carousel.js'
import MovieList from '../components/MovieList.js';
import Footer from '../components/Footer.js';
import { getMovies } from '../actions';
import { render } from 'react-dom';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      errorMessage: ""
    }
  }
  // state = {
  //   movies: []
  // }

  // Called only once when component is mounted!
  componentDidMount() {
    getMovies()
      .then((movies) => {
        this.setState({movies}) 
      })
      .catch((err) => {
        this.setState({ errorMessage: err})
      })
  };
  
  render(){
    const { movies, errorMessage } = this.state;
  return (
      <div>
          <Head>
            <title>Home</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
          </Head>
          <Nav/>
          <div className="home-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <SideMenu 
                    appName={"movie DB"}
                  /> 
                </div>
                <div className="col-lg-9">
                  <Carousel/>
                  <div className="row">
                    { errorMessage && 
                      <div className="alert alert-danger" role="alert">
                        { errorMessage }
                      </div>
                    }
                    <MovieList movies={movies}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
          <style jsx>{`
            .home-page {
              padding-top: 80px;
            }
          `}
          </style>
    </div>
  )
 }
}

export default Home;
// export default function Home() {
//   const [ movies, setMovies ] = useState([])
//   const [ count, setCount ] = useState(0)

//   useEffect(() => {
//     // getMovies().then((movies) => {
//     //   setMovies(movies)
//     // });
//     const fetchData = async () => {
//       const resMovies = await getMovies()
//       setMovies(resMovies)
//     }
//     fetchData();
//   }, [count])

  
//   return (
//       <div>
//           <Head>
//             <title>Home</title>
//             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
//             <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
//             <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
//           </Head>
//           <Nav/>
//           <div className="home-page">
//             <div className="container">
//               <button onClick={() => setCount(count)}>clickme</button>
//               <div className="row">
//                 <div className="col-lg-3">
//                   <SideMenu 
//                     appName={"movie DB"}
//                   /> 
//                 </div>
//                 <div className="col-lg-9">
//                   <Carousel/>
//                   <div className="row">
//                     <MovieList movies={movies}/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Footer/>
//           <style jsx>{`
//             .home-page {
//               padding-top: 80px;
//             }
//           `}
//           </style>
//     </div>
//   )
// }
