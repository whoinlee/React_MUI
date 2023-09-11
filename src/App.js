import './App.css';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" size="large" color="secondary" startIcon={<SaveIcon />}>
          Save Button
        </Button>
      </header>
    </div>
  );
}

export default App;
