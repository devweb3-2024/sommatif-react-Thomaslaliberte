import { Button } from '@mui/material';
import './App.css';
import GrilleMot from './components/grille.component';

function recommencer(): void {
  window.location.reload();
}

function App() {
  return (
    <>
      <Button variant="contained" onClick={recommencer} sx={{ marginTop: 0, marginBottom:0 }}>
        Redemarer la partie
      </Button>
      <GrilleMot></GrilleMot>
    </>
  );
}

export default App;
