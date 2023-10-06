// import React, { useState, useEffect } from 'react';
// // import NairobiMap from '../components/dynamicNairobiMap';
// import NairobiMap from './map';
// // import Dashboard from './Dashboard';
// import Dashboard from '../dashboard/page';
// import { FaSearch } from 'react-icons/fa';
// import SideBar from '../components/Sidebar';
// function App() {
//   const [leadPoisoningLocations, setLeadPoisoningLocations] = useState<any[]>([]); // Modify the type according to your data structure
//   useEffect(() => {
//     fetch('/lead-poisoning-locations.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setLeadPoisoningLocations(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching lead poisoning locations:', error);
//       });
//   }, []);
//   return (
//     <div>
//       <SideBar />
//       <Dashboard leadPoisoningLocations={leadPoisoningLocations} />
//       <NairobiMap leadPoisoningLocations={leadPoisoningLocations} />
//     </div>
//   );
// }
// export default App;









