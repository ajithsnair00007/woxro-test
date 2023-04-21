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
//<nav  class="navbar navbar-dark bg-dark">
         // <div className='navb'>Home</div>
          //<div className='navb'>About Us</div>
          //<div className='navb'>Services</div>
          //<div className='navb'>Technology</div>
          //<div className='navb'>Careers</div>
          //<div className='navb'>Blogs</div>
          //<div className='navb'>Our Works</div>
          //<div className='navb'>Contact Us</div>
//</nav>