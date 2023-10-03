import { useState } from 'react'
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Switch from '@mui/material/Switch';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormSignUp({handleSubmit}) {
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)
    const [errors, setErrors] = useState({
        name: {
            error: false,
            helperText: "Deben ser al menos 3 caracteres"
        }
    })

    function validarNombre(name) {
        if(name.length >= 3) {
            return { 
                name: { error: false, helperText:""}
            }
        } else {
            return { 
                name: { error: true, helperText:"Deben ser al menos 3 caracteres"}
            }
        }
    }

    return <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit({name, lastname, email, prom, nov})
        }}>
        <TextField 
            id="name" 
            label="Nombre" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            error={errors.name.error}
            helperText={errors.name.error ? errors.name.helperText : ""}
            onBlur={(e) => {
                setErrors(validarNombre(e.target.value))
            }}
        />
        <TextField 
            id="lastname" 
            label="Apellido" 
            variant="outlined" 
            color="error" 
            fullWidth 
            margin="normal"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
        />
        <TextField 
            id="email" 
            label="Email" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <FormGroup>
            <FormControlLabel 
                control={<Switch checked={prom} onChange={(e) => setProm(e.target.checked)}/>} 
                label="Promociones"
            />
            <FormControlLabel 
                control={<Switch checked={nov} onChange={(e) => setNov(e.target.checked)}/>} 
                label="Novedades"
            />
        </FormGroup>
        <Button 
            variant="contained" 
            color="error"
            type="submit"
        >
        Registrarse
        </Button>
    </form>
}

/* Reglas de Hooks (donde no se debe de utilizar un Hook)
    /// ciclos
        for(let i=0; i<1; i++) {
            const [valor, setValor] = useState(i)
        } 
        if (name === "abc") {
            const [valor, setValor] = useState("hola")
        }
    /// funciones anidadas
        function crearHook() { /// los componente de react debe de empezar con mayus (CrearHook) y devolver al menos un fragment (return <></>)
            const [a, setA] = useState('a')
        }
*/

export default FormSignUp