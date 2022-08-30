/* 
      title: "Mount Fuji",
      location: "Japan",
      googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
      startDate: "12 Jan, 2021",
      endDate: "24 Jan, 2021",
      description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
      imageUrl: "https://source.unsplash.com/WLxQvbMyfas"*/

function Card(props) {
   return (
      <div className="card">
         <div className="card-img">
            <img src={props.imageUrl} alt={props.title} />
         </div>
         <div className="card-info">
            <div className="card-location">
               <i class='bx bxs-map'></i>
               <span>{props.location}</span>
               <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <div className="card-text">
               <h1>{props.title}</h1>
               <h4>{props.startDate + " - " + props.endDate}</h4>
               <p>{props.description}</p>
            </div>
         </div>
      </div>
   );
}

export default Card;