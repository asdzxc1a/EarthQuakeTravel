import React from 'react';

import Header from '../components/header.js';
import Earthquakes from './earthquakes.js';
import Footer from '../components/footer.js';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component{
    render(){
      return (
        <div>
        
            <Header />
            <Earthquakes />
            <Footer />
           
        
          
        </div>
      );
    }
}

export default App;
