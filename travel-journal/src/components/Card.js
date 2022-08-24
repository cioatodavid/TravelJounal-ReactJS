function Card() {
   return (
      <div className="card">
         <div className="card-img">
            <img src="https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-1.2.1&dl=tomas-malik-N9Fl32CFMfU-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="fuji" />
         </div>
         <div className="card-info">
            <div className="card-location">
               <i class='bx bxs-map'></i>
               <span>JAPAN</span>
               <a href="https://boxicons.com/">View on Google Maps</a>
            </div>
            <div className="card-text">
               <h1>Mount Fuji</h1>
               <h4>12 Jan, 2021 - 24 Jan, 2021</h4>
               <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
         </div>
      </div>
   );
}

export default Card;