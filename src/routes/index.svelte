<script>
	import CovidStat from '../components/CovidStat.svelte'
	import CovidChart from '../components/CovidChart.svelte'
	import TableContainer from '../components/TableContainer.svelte'

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
