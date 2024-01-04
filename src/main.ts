import { NiceList } from './NiceList';
import { CoalCalculator } from './calculator/CoalCalculator';
import { GiftCalculator } from './calculator/GiftCalculator';
import { Person } from './model/Person';

const coalCalculator = new CoalCalculator();
const giftThing = new GiftCalculator();

let niceList:NiceList = new NiceList();

for (let person of niceList.getList()) {
    printGiftTotal(person);
}

function printGiftTotal(person:Person) {
    let coalTotal = coalCalculator.calculateCoalTotal(person.nicenessRating, person.age);
    let giftTotal = giftThing.getGiftTotal(person.age);

    console.log(`${person.name} recieves: ${Math.abs(giftTotal - coalTotal)} ${coalTotal > giftTotal ? "lumps of coal" : "gifts"}`);
}