<script lang="ts">
    import type { HourPrice } from '../tools/api'
	export let hour: HourPrice;

    const formatPrice = (price: number): String => {
        let newPrice = price * 1.24;
        newPrice += 0.39;
        return newPrice.toFixed(2);
    }
</script>

<tr>
    <td>{hour.timeStampDay}</td>
    <td>{hour.timeStampHour}</td>
    <td>{formatPrice(hour.value)}</td>
</tr>

<style>

td {
    padding: 12px 15px;
}

tr {
    border-bottom: 1px solid #dddddd;
}

tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

tr:last-of-type {
    border-bottom: 2px solid #009879;
}

tr {
    font-weight: bold;
}

</style>