import './App.css';
import { 
  Container, 
  Grid,
} from '@mui/material';
import TourCard from './components/TourCard';

function App() {
  return (
    <div className="App">
    <Container sx={{height: '100vh'}}>
      <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
      </Grid>
    </Container>
    </div>
  );
}

export default App;
