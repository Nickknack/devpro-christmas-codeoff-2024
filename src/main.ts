import { CoalCalculator } from './CoalCalculator';
import { GiftThing } from './GiftThing';

const coalCalculator = new CoalCalculator();
const giftThing = new GiftThing();

const santasList = [
    { name: "Nick", age: 20, nicenessRating: "VERY_NICE" },
    { name: "Nick Jr.", age: 11, nicenessRating: "VERY_NICE" },
    { name: "Baby Nick", age: 1, nicenessRating: "VERY_NICE" },
    { name: "Ian", age: 21, nicenessRating: "NICE" },
    { name: "Ian Jr.", age: 10, nicenessRating: "NICE" },
    { name: "Baby Ian", age: 1, nicenessRating: "NICE" },
    { name: "Rawley", age: 22, nicenessRating: "NAUGHTY" },
    { name: "Rawley Jr.", age: 9, nicenessRating: "NAUGHTY" },
    { name: "Baby Rawley", age: 1, nicenessRating: "NAUGHTY" },
    { name: "Tim", age: 20, nicenessRating: "VERY_NAUGHTY" },
    { name: "Tim Jr.", age: 11, nicenessRating: "VERY_NAUGHTY" },
    { name: "Baby Tim", age: 1, nicenessRating: "VERY_NAUGHTY" }
];

for (let person of santasList) {
    printGiftTotal(person.name, person.age, person.nicenessRating);
}

function printGiftTotal(name: string, age: number, nicenessRating: string) {
    let coalTotal = coalCalculator.calculateCoalTotal(nicenessRating, age);
    let giftTotal = giftThing.getGiftThing(age);

    console.log(`${name} recieves: ${Math.abs(giftTotal - coalTotal)} ${coalTotal > giftTotal ? "lumps of coal" : "gifts"}`);
}