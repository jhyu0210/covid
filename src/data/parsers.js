import format from './format.js';
import moment from 'moment';
function usStats(data){
  const [usStatsRaw] = data;
  console.log(usStatsRaw);
  console.log(format.number(123));
  console.log(format.number(usStatsRaw.positive));
  return {
    cases: format.number(usStatsRaw.positive),
    deaths: format.number(usStatsRaw.death),
    recovered: format.number(usStatsRaw.recovered),
    vantilator: format.number(usStatsRaw.onVentilatorCurrently),
    hospitalized:format.number(usStatsRaw.hospitalized),
    icu: format.number(usStatsRaw.inIcuCurrently),
    tested: format.number(usStatsRaw.totalTestResults),
    updated: format.number(usStatsRaw.lastModified),
  };
  // return {
  //   cases:format.number(usStatsRaw.positive),
  //   deaths: usStatsRaw.death,
  //   recovered: usStatsRaw.recovered,
  //   vantilator: usStatsRaw.onVentilatorCurrently,
  //   hospitalized:usStatsRaw.hospitalized,
  //   icu: usStatsRaw.inIcuCurrently,
  //   tested: usStatsRaw.totalTestResults,
  //   updated: moment(usStatsRaw.lastModified).format('LLLL'),
  // };
}

export default {
  usStats
}