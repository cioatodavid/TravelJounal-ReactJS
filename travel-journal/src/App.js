import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Data from './data/data';

function App() {
   const cardEl = Data.map(card => {
      return <Card {...card} />
   })
   return (
      <main>
         <div className='container'>
            <Navbar />
            <div className='body'>
               {cardEl}
            </div>
         </div>
      </main>
   );
}

export default App;