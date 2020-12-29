
<script>
  //import data from index.svelte
  export let cases;
  export let deaths;
  export let recovered;
  export let updated; 
  export let hospitalized;
  export let icu;
  export let tested;
  export let vantilator;
</script>
<style>

</style>

<div class="
  py-2 m-2
  sm:grid sm:grid-cols-4
  columns
  border border-gray-700 
  rounded-lg
  text-center
  sm:text-left"
  >
  <h2 class="m-1 text-xs">Cases: {cases} </h2>
  <h2 class="m-1 text-xs">Deaths: {deaths}</h2>
  <h2 class="m-1 text-xs">Recovered: {recovered}</h2>
  <h2 class="m-1 text-xs">{updated}</h2>
</div>

<div class="
py-2 m-2
sm:grid sm:grid-cols-4 sm:gap-1
columns
border border-gray-700 
rounded-lg
text-center

sm:text-left"
>
  <h4 class="m-1 text-xs">Tested: {tested}</h4>
  <h4 class="m-1 text-xs ">Hospitalized: {hospitalized}</h4>
  <h4 class="m-1 text-xs">Total ICU: {icu}</h4>
  <h4 class="m-1 text-xs">Total Ventilator: {vantilator}</h4>
</div>