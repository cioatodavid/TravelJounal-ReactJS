import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
   return (
      <main>
         <div className='container'>
            <Navbar />
            <div className='body'>
               <Card />
               <Card />
               <Card />
            </div>
         </div>
      </main>
   );
}

export default App;