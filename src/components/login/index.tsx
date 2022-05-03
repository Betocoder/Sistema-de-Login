import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth/authContext";


const Login =  () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
    };

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signIn(email,password);
            if(isLogged) {
                navigate('/');
                }else{
                alert('Login inválido');
            };
        };
    };
    return(
        <div>
            <h2>Página fechada</h2>

            <input type="text"  
            value={email} 
            onChange={handleEmailInput}
            placeholder="Digite o email" />
            
            <input type="text" 
            value={password}
            onChange={handlePasswordInput}
            placeholder="Digite a senha" />
            
            <button onClick={handleLogin }>Logar</button>
        </div>
    );
};

export default Login