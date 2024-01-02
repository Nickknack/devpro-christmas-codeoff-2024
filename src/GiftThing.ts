export class GiftThing {
    getGiftThing(age: number): number {
        let giftTotal = 3;
        if (age > 18) {
            giftTotal = 1;
        } else if (age > 5) {
            giftTotal = 2;
        }

        return giftTotal;
    }
}
