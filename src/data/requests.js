// import axios from 'axios';
// import parsers from './parsers';

// async function usStats(){
//   const response = await axios.get('https://covidtracking.com/api/v1/us/current.json');
//   console.log(response.data);
//   const [stats] = response.data; 
//   return parsers.usStats(reponse.data);
// }

// export default {
//   usStats,
// }

import axios from 'axios';
import parsers from './parsers';

async function usStats() {
  const response = await axios.get(
    'https://covidtracking.com/api/v1/us/current.json'
  );

  return parsers.usStats(response.data);
  // return response.data;
}

export default {
  usStats,
};
// import axios from 'axios';
// // import parsers from './parsers';

// async function usStats() {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts'
//   );

//   return response.data
// }

// export default {
//   usStats,
// };