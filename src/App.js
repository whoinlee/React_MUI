import './App.css';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

function App() {
  return (
    <Container sx={{height: '100vh'}}>
      <Typography 
        variant="h1"
        sx={{my:4, textAlign: "center", color: "primary.main"} }
      >
        Learning Material UI
      </Typography>
        <Button variant="contained" size="large" color="secondary" startIcon={<SaveIcon />}>
          Save Button
        </Button>
    </Container>
  );
}

export default App;
