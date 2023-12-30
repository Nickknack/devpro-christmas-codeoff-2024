import { CoalCalculator } from './CoalCalculator';

let coalCalculator = new CoalCalculator();

const nick = { name: "Nick", age: 20, nicenessRating: "VERY_NICE" };
const nickJr = { name: "Nick Jr.", age: 12, nicenessRating: "VERY_NICE" };
const babyNick = { name: "Baby Nick", age: 1, nicenessRating: "VERY_NICE" };

const ian = { name: "Ian", age: 20, nicenessRating: "NICE" };
const ianJr = { name: "Ian Jr.", age: 12, nicenessRating: "NICE" };
const babyIan = { name: "Baby Ian", age: 1, nicenessRating: "NICE" };

const rawley = { name: "Rawley", age: 20, nicenessRating: "NAUGHTY" };
const rawleyJr = { name: "Rawley Jr.", age: 12, nicenessRating: "NAUGHTY" };
const babyRawley = { name: "Rawley Ian", age: 1, nicenessRating: "NAUGHTY" };

const tim = { name: "Tim", age: 20, nicenessRating: "VERY_NAUGHTY" };
const timJr = { name: "Tim Jr.", age: 12, nicenessRating: "VERY_NAUGHTY" };
const babyTim = { name: "Baby Tim", age: 1, nicenessRating: "VERY_NAUGHTY" };

console.log(`${nick.name}: ${coalCalculator.calculateCoalTotal(nick.nicenessRating, nick.age)}`);
console.log(`${nickJr.name}: ${coalCalculator.calculateCoalTotal(nickJr.nicenessRating, nickJr.age)}`);
console.log(`${babyNick.name}: ${coalCalculator.calculateCoalTotal(babyNick.nicenessRating, babyNick.age)}`);

console.log(`${ian.name}: ${coalCalculator.calculateCoalTotal(ian.nicenessRating, ian.age)}`);
console.log(`${ianJr.name}: ${coalCalculator.calculateCoalTotal(ianJr.nicenessRating, ianJr.age)}`);
console.log(`${babyIan.name}: ${coalCalculator.calculateCoalTotal(babyIan.nicenessRating, babyIan.age)}`);

console.log(`${rawley.name}: ${coalCalculator.calculateCoalTotal(rawley.nicenessRating, rawley.age)}`);
console.log(`${rawleyJr.name}: ${coalCalculator.calculateCoalTotal(rawleyJr.nicenessRating, rawleyJr.age)}`);
console.log(`${babyRawley.name}: ${coalCalculator.calculateCoalTotal(babyRawley.nicenessRating, babyRawley.age)}`);

console.log(`${tim.name}: ${coalCalculator.calculateCoalTotal(tim.nicenessRating, tim.age)}`);
console.log(`${timJr.name}: ${coalCalculator.calculateCoalTotal(timJr.nicenessRating, timJr.age)}`);
console.log(`${babyTim.name}: ${coalCalculator.calculateCoalTotal(babyTim.nicenessRating, babyTim.age)}`);