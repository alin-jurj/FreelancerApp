import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import {Container} from 'react-bootstrap'
function App() {
  return(
    <Container className="d-flex align-items-center justify-content-cebter"
    style={{minHeight:"100vh"}}
    >
      <div className="w-100" style={{maxWidth:"400px"}}>
      <SignUp/>
    </div>
    
    </Container>
  )

}

export default App;
