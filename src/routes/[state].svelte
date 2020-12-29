<script context="module">

  import stateNames from '../data/stateNames.js';
	export async function preload(page){
		// console.log("error page");
    const state = page.params["state"];
    console.log(state)
		if(stateNames.find(s => s.abbreviation === state) === undefined){
      // console.log("should get errror")
			this.error(404, 'State Not Found');
			return;
		}
		return {state: page.params["state"]};
	}
</script>
<script>
  import CovidStat from '../components/CovidStat.svelte'
  import CovidChart from '../components/CovidChart.svelte'
  import TableContainer from '../components/TableContainer.svelte'
  export let state;
</script>

<svelte:head>
	<title> {state} - Covid 19</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 US</h1>
	</div>
</div>

<h1>{state}</h1>
<CovidStat />
<CovidChart />