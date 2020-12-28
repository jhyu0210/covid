<script context="module">
	import requests from '../data/requests.js';

	export async function preload(){
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
	export let usStats;
	console.log(`US STATS : ${JSON.stringify(usStats)}`);

</script>

<style>

</style>

<svelte:head>
	<title>Covid 19 Tracker US</title>
</svelte:head>
<div>
<div class="section header">
	<div class="container">
		<h1>Covid 19 US</h1>
	</div>
</div>
	<CovidStat />
	<CovidChart />
	<TableContainer />

</div>
