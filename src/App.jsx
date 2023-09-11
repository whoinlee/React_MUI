import './App.css';
import { 
  Container, 
  Grid,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import SearchAppBar from './components/AppBar';
import TourCard from './components/TourCard';
import cities from './data/data.json';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{height: '100vh', marginY:5}}>
        {/*  */}
        {
          cities.map((city) => 
            <>
              <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
                Top {city.name} Tours
                <Grid container spacing={5}>
                  {
                    city.tours.map((tour, i) => <TourCard key={i} tour={tour} />)
                  }
                </Grid>
              </Typography>
            </>
          )
        }
      </Container>
    </div>
  );
}

export default App;
