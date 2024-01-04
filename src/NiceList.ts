import { NicenessRating } from './model/NicenessRating';
import { Person } from './model/Person';

export class NiceList{
    getList(): Person[]{
        const santasList: Person[] = [
            { name: "Nick", age: 20, nicenessRating: NicenessRating.VERY_NICE },
            { name: "Nick Jr.", age: 11, nicenessRating: NicenessRating.VERY_NICE },
            { name: "Baby Nick", age: 1, nicenessRating: NicenessRating.VERY_NICE },
            { name: "Ian", age: 21, nicenessRating: NicenessRating.NICE },
            { name: "Ian Jr.", age: 10, nicenessRating: NicenessRating.NICE },
            { name: "Baby Ian", age: 1, nicenessRating: NicenessRating.NICE },
            { name: "Rawley", age: 22, nicenessRating: NicenessRating.NAUGHTY },
            { name: "Rawley Jr.", age: 9, nicenessRating: NicenessRating.NAUGHTY },
            { name: "Baby Rawley", age: 1, nicenessRating: NicenessRating.NAUGHTY },
            { name: "Tim", age: 20, nicenessRating: NicenessRating.VERY_NAUGHTY },
            { name: "Tim Jr.", age: 11, nicenessRating: NicenessRating.VERY_NAUGHTY },
            { name: "Baby Tim", age: 1, nicenessRating: NicenessRating.VERY_NAUGHTY }
        ];
        return santasList;
    }
}
