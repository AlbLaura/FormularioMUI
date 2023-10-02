import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Switch from '@mui/material/Switch';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormSignUp() {
    return <form>
        <TextField id="name" label="Nombre" variant="outlined" fullWidth margin="normal"/>
        <TextField id="lastname" label="Apellido" variant="outlined" color="error" fullWidth margin="normal"/>
        <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal"/>
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked label="Promociones"/>} label="Promociones"/>
            <FormControlLabel control={<Switch defaultChecked label="Novedades"/>} label="Novedades"/>
        </FormGroup>
        <Button variant="contained" color="error">Registrarse</Button>
    </form>
}

export default FormSignUp