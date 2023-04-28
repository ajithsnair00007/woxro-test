import './App.css';
import Footer from './components/Footer/Footer';

import Headers from './components/Headers/Headers';
import Middle from './components/Middle/Middle';



function App() {
  return (
    <div className="container" style={{backgroundColor:"white",paddingLeft:'0%',paddingRight:'0%'}}>
      <Headers/>
      <Middle/>
      
      <Footer/>
      
      
    </div>
  );
}

export default App;
