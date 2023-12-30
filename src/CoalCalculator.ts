export class CoalCalculator {

    calculateCoalTotal(nicenessRating: string, age: number): number {
        let coalCoefficient: number;
        let totalCoal = 0;

        if (nicenessRating === "NICE") {
            coalCoefficient = 0;
        } else if (nicenessRating === "VERY_NICE") {
            coalCoefficient = 0;
        } else if (nicenessRating === "NAUGHTY") {
            coalCoefficient = 1;
        } else if (nicenessRating === "VERY_NAUGHTY") {
            coalCoefficient = 2;
        }

        if (age > 18) {
            totalCoal = coalCoefficient * 5;
        } else if (age > 5) {
            totalCoal = coalCoefficient * 3;
        } else {
            totalCoal = coalCoefficient * 2;
        }

        return totalCoal;
    }
}



