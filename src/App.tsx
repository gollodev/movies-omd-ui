import { FC, useState, useCallback, useEffect } from 'react';
import { Carousel, Text, Box } from 'grommet';
import axios from 'axios';
import Theme from './theme';
import Layout from './components/Layout';
import Container from './components/Container';
import CardMovie from './components/CardMovie';
import LoadedSpinner from './components/LoadedSpinner';

const urlRequest = 'http://localhost:8000';

interface Movie {
  id: number;
  imdbID?: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  createdAt?: string;
  updatedAt?: string;
};

const App: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getMovies = useCallback( async () => {
    try {
      setLoading(true);
      const movies = await axios.get(`${urlRequest}/movies`);
      if (movies.status === 200) {
        setLoading(false);
        setMovies(movies.data);
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies])

  return (
    <Theme darkMode>
      <Layout>
        <Container>
          {loading && <LoadedSpinner size={'large'}/>}
          {error && <Text tag={'span'} size={'small'}>Some error happened, Try again :(</Text>}
          <Box align={'center'} pad={'large'}>
          <Carousel>
            { 
              movies.map(movie => 
                <CardMovie
                  key={movie.id}
                  title={movie.Title}
                  image={movie.Poster}
                  year={Number(movie.Year)}
                  type={movie.Type}
                />  
              )
            }
          </Carousel>
          </Box>
        </Container>
      </Layout>
    </Theme>
  );
}

export default App;
