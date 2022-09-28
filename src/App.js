import React from 'react';
import Header from './components/header';
import Service from './components/service';
import Featured from './components/featured';
import Buy from "./components/buy";
import Visit from "./components/visit";
import Footer from "./components/footer";
import './style/normalize.css';
import './style/style.css';


function App() {
  return (
    <div className="App">
        <Header/>
        <main>
            <Service/>
            <Featured/>
            <Buy/>
            <Visit/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
