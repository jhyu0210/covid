<script context="module">
	import requests from '../data/requests.js';


	export async function preload(page){
		try {
			const usStats = await requests.usStats();
			return {usStats}; 
		}catch(e){
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
import About from './about.svelte';
	export let usStats;
	console.log(`US STATS : ${JSON.stringify(usStats)}`);

</script>

<style>

</style>

<svelte:head>
	<title>Covid 19 Tracker US</title>
</svelte:head>


<div class="text-center mb-3">
		<h1 class="font-bold text-2xl">Covid 19 US</h1>
</div>
<div class="max-w-screen-xl">
	<CovidStat  {...usStats}/>
	<CovidChart />
	<TableContainer />
</div>

