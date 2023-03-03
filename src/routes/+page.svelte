<script>
	import Day from '../components/day.svelte';
import { getToday, getTomorrow } from '../tools/api'
	
    let todayPromise = getToday();
    let tomorrowPromise = getTomorrow();
</script>


<header>
    <h1>Electricity prices</h1>
</header>

<article>
    <Day dayPromise={todayPromise} title="Today" />
    <Day dayPromise={tomorrowPromise} title="Tomorrow" />
</article>


<style>
article {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

</style>