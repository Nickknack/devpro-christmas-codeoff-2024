export class GiftCalculator {
    getGiftTotal(age: number): number {
        if (age > 18) {
            return 1;
        } if (age > 5) {
            return 2;
        }

        return 3;
    }
}
