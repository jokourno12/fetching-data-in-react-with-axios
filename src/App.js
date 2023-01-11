import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Data1 from './Data1'
import Data1Map from './Data1Map'
import Navbar from './Components/Navbar'
import LifeCycleMethod from './LifeCycleMethod';
import Home from './Home';
import Newsapi from './Newsapi';

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="/data-1" element={<Data1/>} />
          <Route exact path="/data-1-map" element={<Data1Map/>} />
          <Route exact path='/lifecyclemethod' element={<LifeCycleMethod/>} />
          <Route exact path='/newsapi' element={<Newsapi/>} />
        </Routes>
      </Router>
    )
  }
}