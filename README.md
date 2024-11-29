# devpro-christmas-codeoff-2024

## Instructions

Welcome to Nick and Ian's DevPro Christmas Code-Off 2024! We will review these instructions with you ***before*** starting the timer.

**Every mistake** in your solution will **add 1 minute to your time!** Also, if your solution fails to produce the **exact output for part 1** will result in a **5 minute penalty**.

#### GL;HF, and may the best DevPro'er win!

## How to run

- `npm install`
- `npm start`

----

### PART 1: TypeScript Refactor

#### 1. Niceness Rating Enum

- Create `NicenessRating.ts` exporting a `NicenessRating` enum with 4 values:
  - `NICE`
  - `VERY_NICE`
  - `NAUGHTY`
  - `VERY_NAUGHTY`
- Convert hardcoded strings to enum references in `main.ts` and `CoalCalculator.ts`. 
- Refactor all nicenessRating function arguments to use the new enum.

#### 2. CoalCalculator.ts

- Lines 7-15, refactor nicenessRating `if-else-if` to a switch statement.
- Lines 17-23, remove `else` statements and return **totalCoal** as soon as it is known.
- Extract **coalCoefficient** and **totalCoal** calculations into separate methods named `getCoalCoefficient` and `getTotalCoal`.

#### 3. GiftThing.ts

- Rename the `GiftThing` class to `GiftCalculator`.
- Rename the `GiftThing.ts` file to `GiftCalculator.ts`.
- Remove `else` statements in `getGiftThing` and return **giftTotal** as soon as it is known. 
- Rename the `getGiftThing` method to `getGiftTotal`.

#### 4. Person interface

- create a `Person.ts` file and create and export a `Person` interface containing the following fields:
  - `name` of type `string`
  - `age` of type `number`
  - `nicenessRating` of type `NicenessRating`
- Update the `printGiftTotal` method in `main.ts` to take in a single `Person` argument instead of 3 seperate arguments. 

#### 5. Nice List

- Create and export a new `NiceList` class in a new `NiceList.ts` file with one method called `getList` returning an array of `Person`. Return the hard-coded values in `santasList` from `main.ts` from this method.
- Update `main.ts` to use the new function to populate `santasList`.

#### 6. Reorganize
- Move `CoalCalculator.ts` and `GiftCalculator.ts` into a new `calculator` directory under `src`. 
- Move `Person.ts` and `NicenessRating.ts` into a new `model` directory under `src`.


#### Confirm output with `npm start`: 

```
Nick recieves: 1 gifts
Nick Jr. recieves: 2 gifts
Baby Nick recieves: 3 gifts
Ian recieves: 1 gifts
Ian Jr. recieves: 2 gifts
Baby Ian recieves: 3 gifts
Rawley recieves: 4 lumps of coal
Rawley Jr. recieves: 1 lumps of coal
Baby Rawley recieves: 1 gifts
Tim recieves: 9 lumps of coal
Tim Jr. recieves: 4 lumps of coal
Baby Tim recieves: 1 lumps of coal
```

----

### PART 2: Java to JSON

Manually convert the `InvoiceListDto` class in `JavaClass.java` into a **valid JSON** object with the same schema.

Include the the following values with the JSON object:

```
{ 
  [ 
    {
      0d16892e-7992-4d70-9301-d7ecaca1ebd3
      553ba3a1-24b4-433b-a0e2-4f210b71aaaa
      "Jan-15-2023"
      "Sep-1-2024"
      "PAID"
      "Nick&Ian"
      "ACME Coding INC. Memo: Fixed all DevPro bugs"
      "ACME Coding INC."
      "acmecoding@inc.com"
      "P. Sherman, 42 Wallaby Way, Sydney"
      "H. Potter, 42 Privet Drive, Little Whinging, England"
      9001
      "$800"
      "$800,000"
      [
        {
          6fb56f4a-9b36-4a04-b1f6-7960b8907be8
          aa426d90-c699-4e1a-b871-f54ad0566e85
          "Nick&Ian"
        }
      ]
    false
    true
    } 
  ]
  "oldInvoices"
}

```
