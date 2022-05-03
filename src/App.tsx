import React, { useContext } from 'react';
import { Route , Routes , Link, useNavigate } from 'react-router-dom';
import Home from './components/home'; 
import Private from './components/private';
import AuthContext from './contexts/auth/authContext';
import { ReaquireAuth } from './contexts/auth/requireAuth';
import './GlobalStyle.css'

function App() {

  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogOut = async () => {
    await auth.signOut();
    navigate('/')
  }

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/private">Página privada</Link>
        {auth.user && <button onClick={handleLogOut}>Sair</button>}
      </nav>
      <hr/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/private" element={<ReaquireAuth><Private /></ReaquireAuth>}/>
      </Routes>

    </div>
  );
}

export default App;
