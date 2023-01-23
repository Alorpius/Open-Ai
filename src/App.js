
import './App.css';
import {Navbar,Cta,Brand} from './component'
import {Possibility,Header,Footer,WhatGPT3,Blog,Feautures} from './container'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
         <Brand/>
         <WhatGPT3/>
         <Feautures/>
         <Possibility/>
         <Cta/>
         <Blog/>
         <Footer/>
    </div>
  );
}

export default App;
