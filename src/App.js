import './App.css';
import Container from '@mui/material/Container';
import FormSignUp from './components/FormSignUp';
import Typography from '@mui/material/Typography';

function App() {

  //manejar el envio
  const handleSubmit = (valores) => {
    console.log(`APPJS: `, valores)
  }

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant='h3' align='center'>Formulario registro</Typography>
      <FormSignUp handleSubmit={handleSubmit}/>
    </Container>
  );
}

export default App;
