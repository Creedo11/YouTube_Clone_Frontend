import React, { useState } from "react";
// import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { API_KEY } from "../../API_KEYS/API_KEY";
import VidMapper from "../../components/VidMapper";
import SearchBar from "../../components/SearchBar";

class HomePage extends React.Component {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  
//   const [user, token] = useAuth();
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setCars(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchCars();
//   }, [token]);
//   return (
//     <div className="container">
//       <h1>Home Page for {user.username}!</h1>
//       {cars &&
//         cars.map((car) => (
//           <p key={car.id}>
//             {car.year} {car.model} {car.make}
//           </p>
//         ))}
//     </div>
//   );
// };




   handleSubmit = async(searchTerm)=>{
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=5&type=video&key=${API_KEY}`)
    
    console.log(response);
};

render(){
  return (
      <div>
        <SearchBar onFormSubmit={this.handleSubmit}/>
        {/* <VidMapper vidArray={videos} /> */}
      </div>
  );
}
}

export default HomePage;
