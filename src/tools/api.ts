import { mande } from 'mande'
import { PUBLIC_PRICE_API } from '$env/static/public'


export interface HourPrice {
    timeStamp: string;
    timeStampDay: string;
    timeStampHour: string;
    value: number;
    priceArea: string;
    unit: string;
}

const vattenfall = mande(PUBLIC_PRICE_API)

const getToday = async (): Promise<Array<HourPrice>> => {
    return await vattenfall.get('today')
}

const getTomorrow = async (): Promise<Array<HourPrice>> => {
    return await vattenfall.get('tomorrow')
}

export {
    getToday,
    getTomorrow
}