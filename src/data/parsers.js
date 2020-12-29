import format from './format.js';
import moment from 'moment';

function usStats(data){
  const [usStatsRaw] = data;
  return parseStats(usStatsRaw);
}

function stateStats(state,data){
  const stateRawData = data.find(d=>d.state ===state);
  return parseStats(stateRawData);
}


function parseStats(rawStats) {
  return {
    cases: format.number(rawStats.positive),
    deaths: format.number(rawStats.death),
    recovered: format.number(rawStats.recovered),
    vantilator: format.number(rawStats.onVentilatorCurrently),
    hospitalized:format.number(rawStats.hospitalized),
    icu: format.number(rawStats.inIcuCurrently),
    tested: format.number(rawStats.totalTestResults),
    // updated: format.number(rawStats.lastModified),
    updated: moment(rawStats.lastModified).format('LLLL'),
  };
}

export default {
  usStats, stateStats
}