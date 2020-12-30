import format from './format.js';
import moment from 'moment';
import stateNames from './stateNames';

function usStats(data) {
  const [usStatsRaw] = data;
  return parseStats(usStatsRaw);
}

function stateStats(state, data) {
  const stateRawData = data.find(d => d.state === state);
  return parseStats(stateRawData);
}
function historicUS(historicData) {
  return parseHistoric(historicData);
}

function historicState(state, historicData) {
  const stateHistoric = historicData.filter((d) => d.state === state);
  return parseHistoric(stateHistoric);
}


function parseStats(rawStats) {
  return {
    cases: format.number(rawStats.positive),
    deaths: format.number(rawStats.death),
    recovered: format.number(rawStats.recovered),
    vantilator: format.number(rawStats.onVentilatorCurrently),
    hospitalized: format.number(rawStats.hospitalized),
    icu: format.number(rawStats.inIcuCurrently),
    tested: format.number(rawStats.totalTestResults),
    // updated: format.number(rawStats.lastModified),
    updated: moment(rawStats.lastModified).format('LT'),
  };
}
function parseHistoric(historicData) {
  return [
    {
      label: 'Cases',
      key: 'positive',
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
    const dLength = historicData.filter((d) => d[next.key]).length;
    if (dLength > 4) { //why??4?
      //  console.log("length",dLength,next.key);
      prev.push(parseChart(historicData, next.key, next.label, next.color));
    }
    // console.log(JSON.stringify(prev))
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

function statesTable(statesData){
  return statesData.map((data) => {
    const { name } = stateNames.find((d)=>d.abbreviation === data.state);
    console.log(">>> inParsers", name);
    return {
      cases: format.number(data.positive),
      death: format.number(data.death),
      tested: format.number(data.totalTestResults),
      state: format.number(data.state),
      fullStateName: name,
    }
  })
}

export default {
  usStats, stateStats, historicUS, historicState,statesTable
}



// test for reduce function

// const something=[
//   {date:1,a:50, b:30, c:21 ,d:72,e:13,f:43},
//   {date:2,a:51, b:32, c:25 ,d:74,e:12,f:44},
//   {date:3,a:52, b:33, c:23 ,d:76,e:13,f:45},
//   {date:4,a:53, b:33, c:22 ,d:71,e:15,f:46},
//   {date:5,a:53, b:35, c:24 ,d:73,e:16,f:47},
//   {date:6,a:55, b:36, c:26 ,d:75,e:17,f:48},
//   {date:7, b:41}
// ];
// //wants
// // const result = 
// //   {key:"a",[{x:1, y:50},{x:2,y:51},{x:3,y:52},{x:4,y:53},{x:5,y:54},{x:6,y:55}]},
// //   {key:"b",[{x:1, y:50},{x:2,y:51},{x:3,y:52},{x:4,y:53},{x:5,y:54},{x:6,y:55}]},
// //   {key:"c",[{x:1, y:50},{x:2,y:51},{x:3,y:52},{x:4,y:53},{x:5,y:54},{x:6,y:55}]},
// //   {key:"d",[{x:1, y:50},{x:2,y:51},{x:3,y:52},{x:4,y:53},{x:5,y:54},{x:6,y:55}]},
// // ]
// // // something.reduce((prev,next)=>{},[]);
// // const reduceresult=something.reduce((prev,next)=>{
// //   (prev.push())
// // },[]);

// function converting(data,key,label,color){
//   const convertedData = data.map((cd)=>{
//     return {
//       x:cd.date,
//       y:cd[key] || 0,
//     }
//   });
//   // console.log(convertedData);
//   const res=({
//     rdata:convertedData,
//     title:label,
//     bg_color:color
//   });
//   // console.log(res);
//   return res;
// }

// //
//   const arrayInfo = [
//     {key:"a",label:"A",color:"red"},
//     {key:"b",label:"B",color:"purple"},
//     {key:"c",label:"C",color:"yellow"},
//     {key:"d",label:"D",color:"green"},
//     {key:"e",label:"E",color:"blue"},
//     {key:"f",label:"F",color:"dark-blue"},
//   ];
// //

// const resultArray = arrayInfo.reduce((prev,next)=>{
//   prev.push(converting(something,next.key,next.label,next.color));
//   return prev;
// },[])

// console.log(JSON.stringify(resultArray,null,2));

// const testData = [];
// testData.push(converting(something,"a","A","red"));
// testData.push(converting(something,"b","B","blue"));
// testData.push(converting(something,"c","C","yello"));
// testData.push(converting(something,"d","D", "orange"));
// console.log(JSON.stringify(testData,null,2));

// converting(something,"a","A","red");
// converting(something,"b","B","blue");
// converting(something,"c","C","yello");
// converting(something,"d","D", "orange");

