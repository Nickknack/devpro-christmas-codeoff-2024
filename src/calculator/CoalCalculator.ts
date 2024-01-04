import { NicenessRating } from "../model/NicenessRating";

export class CoalCalculator {

    calculateCoalTotal(nicenessRating: NicenessRating, age: number): number {
        let coalCoefficient = this.getCoalCoefficient(nicenessRating);

        return this.getTotalCoal(age, coalCoefficient);
    }

    private getTotalCoal(age: number, coalCoefficient: number) {
        if (age > 18) {
            return coalCoefficient * 5;
        } else if (age > 5) {
            return coalCoefficient * 3;
        } else {
            return coalCoefficient * 2;
        }
    }

    private getCoalCoefficient(nicenessRating: NicenessRating) {
        switch (nicenessRating) {
            case NicenessRating.NICE:
            case NicenessRating.VERY_NICE:
                return 0;
            case NicenessRating.NAUGHTY:
                return 1;
            case NicenessRating.VERY_NAUGHTY:
                return 2;
        }
    }
}