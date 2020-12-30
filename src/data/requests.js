import axios from 'axios';
import parsers from './parsers';

async function usStats() {
  const response = await axios.get(
    'https://covidtracking.com/api/v1/us/current.json'
  );

  return parsers.usStats(response.data);
  // return response.data;
}

async function stateStats(state) {
  const response = await axios.get(
    'https://covidtracking.com/api/v1/states/current.json'
  );

  return parsers.stateStats(state, response.data);
  // return response.data;
}

async function historicUS() {
  const response = await axios.get('https://covidtracking.com/api/us/daily');//맞음..
    // console.log(response.data.toString());
    return parsers.historicUS(response.data);

}

async function historicState(state) {
  const response = await axios.get('https://covidtracking.com/api/v1/states/daily.json');
    // console.log(response.data.toString());
    return parsers.historicState(state,response.data);

}

async function statesData() {
  const response = await axios.get('https://covidtracking.com/api/v1/states/current.json');
  const res =  parsers.statesTable(response.data);
  console.log(res);
  return res;

}
export default {
  usStats, stateStats, historicUS, historicState, statesData 
};
