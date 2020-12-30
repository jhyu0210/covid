<script context="module">

  import stateNames from '../data/stateNames.js';
  import requests from '../data/requests.js'

	export async function preload(page){
		// console.log("error page");
    const state = page.params["state"];
    // console.log(state)
		if(stateNames.find(s => s.abbreviation === state) === undefined){
      // console.log("should get errror")
			this.error(404, 'State Not Found');
			return;
    }
    
    try {
      const stats = await requests.stateStats(state);
      const historic = await requests.historicState(state);
      return {state, stats,historic};

    } catch (e) {
      // console.log(e);//
      this.error(
        500,
        "There was an error in calling the api, please try again in 5 minutes."
      );
      return;
    }
	}
</script>
<script>
  import CovidStat from '../components/CovidStat.svelte'
  import CovidChart from '../components/CovidChart.svelte'
  import TableContainer from '../components/TableContainer.svelte'
  export let state;
  export let stats;
  export let historic;
</script>

<svelte:head>
	<title> {state} - Covid 19</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - {state}</h1>
	</div>
</div>

<h1>{state}</h1>
<CovidStat  {...stats}/>
<CovidChart historicData={historic} title= "Covid 19 -{state}"/>