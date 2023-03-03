
<script lang="ts">
    import type { HourPrice } from '../tools/api'
    import Hour from './hour.svelte';
	export let dayPromise: Promise<Array<HourPrice>>;
        export let title: string;
</script>


{#await dayPromise}
    <div class="loading">Loading day...</div>
{:then today}

    <table>
        <thead>
            <tr>
                <th colspan="3">{title}</th>
            </tr>
            <tr>
                <th>Date</th>
                <th>Hour</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {#each today as hour}
                <Hour hour={hour}/>
            {/each}
        </tbody>
    </table>

{:catch someError}
    <div class="error">ystem error: {someError.message}.</div>
{/await}


<style>
table {
    border-collapse: collapse;
    margin: 0;
    font-size: 0.9em;
    font-family: sans-serif;
}

@media only screen and (max-width: 600px) {
    table {
        min-width: 100vw;
    }
}

@media only screen and (min-width: 600px) {
    table {
        min-width: 45vw;
    }
}

thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}

th {
    padding: 12px 15px;
}


</style>