import * as React from 'react'
import { Card, Image, Header } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import { IMovies } from '../../../interfaces/movie';


interface IProps {
  moviesData: IMovies[];
}

const MoviesListing = (props: IProps) => {
  const { moviesData } = props;
  const [selectedMovieId, setSelectedMovieId] = React.useState('');
  const history = useHistory();

  const openMovieDetails = (movieId: string) => {
    console.log("openMovieDetails")
    setSelectedMovieId(movieId);
    history.push(`/movie/${movieId}`, {
      selectedMovieId: movieId
    });
  }

  const markFavouroiteMovie = () => {
    console.log("mark favourite functionality here")
  }

  const watchLaterMovie = () => {
    console.log("watch LaterMovie functionality here")
  }

  return (
    <>
    <div
      style={{
        display: "flex",
        marginLeft: "2rem",
        marginTop: "2rem",
      }}
      >
      <Header as='h1' color='red' style={{ textTransform: 'capitalize' }}>{`Movies List`}</Header>
      </div>
      <div
        style={{
          padding: 12,
        }}
          >
            {(moviesData).map((movie: any) => (
              <Card 
              style={{ width: "22rem", height: "30rem", margin: "1rem", display: 'inline-block' }} 
              >
                <Image 
                src={`http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/package/Christopher-300x300.png`}
                 wrapped
                 ui={false} 
                 />
                <Card.Content>
                  <Card.Header
                  onClick={() => openMovieDetails(movie.id)}
                   className="movie-header" style={{ fontSize: 12, display: '-webkit-box', whiteSpace: 'nowrap',
                    overflow: 'hidden',textOverflow: 'ellipsis' }}>{movie.title}</Card.Header>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                 <div 
                 className="ui bottom attached button" 
                 style={{width: '110px', marginTop: '10px'}}
                 onClick={watchLaterMovie}
                 >
                    Watch Later
                  </div>
                  <div 
                  className="ui bottom attached button" 
                  style={{width: '110px', marginTop: '10px'}}
                  onClick={markFavouroiteMovie}
                  >
                  Mark Favourite
                  </div>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>
    </>
  );
}

export default MoviesListing;
