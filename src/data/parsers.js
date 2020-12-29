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
function historicUS(historicData){
  return parseHistoric(historicData);
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
function parseHistoric(historicData){
  return [
    {
      label:'Cases',
      key:'positive',
      color: 'rgb(100,0,200)'
  },
  {
    label: 'Recovered',
    key: 'recovered',
    color: 'rgb(100, 100, 200)',
  },
  {
    label: 'Total Tested',
    key: 'totalTestResults',
    color: 'rgb(10, 30, 100)',
  },
  {
    label: 'Hospitalized',
    key: 'hospitalizedCurrently',
    color: 'rgb(20, 100, 230)',
  },
  {
    label: 'Deaths',
    key: 'death',
    color: 'rgb(255, 99, 132)',
  },
  ].reduce((prev, next) => {
    const dLength=historicData.filter((d) => d[next.key]).length;
    console.log("hitoricData",historicData);
    if (dLength > 4) { //why??4?
     console.log("length",dLength,next.key);
      prev.push(parseChart(historicData, next.key, next.label, next.color));
    }
    console.log("parsehistoric",prev)

    return prev;
  }, []);
}

function parseChart(historicData, key, label, color) {
  const chartData = historicData.map((data) => {
    return {
      x: moment(data.date, 'YYYYMMDD'),
      y: data[key] || 0,
    };
  });

  return {
    label,
    data: chartData,
    fill: false,
    borderColor: color,
  };
}

export default {
  usStats, stateStats, historicUS
}