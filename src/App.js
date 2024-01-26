import About from './About';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Post from './Post';
import Products from './Productes';


function App() {
  
  return (
    <div className="App">
      
      <NavBar/>
      <Home />
      <About/>
      <Products />
      <Post/>
    </div>
  );
}

export default App;
