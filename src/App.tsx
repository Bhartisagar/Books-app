import React from 'react';
import Template from './components/templates';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Entrepreneurship from './components/templates/Entrepreneurship';
import Bookdetailviewpage from './components/templates/Bookdetailviewpage';
import CoverPage from './pages/CoverPage';
import Theme from './Theme/Theme'
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (  
    //  <Template/>
    <ThemeProvider theme={Theme}>
    <Router>
       <Routes>
        <Route path="/" element={<CoverPage/>} />
        
        <Route path='/library' element={<Template/>}/>

        <Route path='/entrepreneurship' element={<Entrepreneurship/>}> </Route>

        <Route path='/bookdetailviewpage/:id' element={<Bookdetailviewpage/>}> </Route>
      
        </Routes>

    </Router>
    </ThemeProvider>
     
   
  )
}

export default App;
