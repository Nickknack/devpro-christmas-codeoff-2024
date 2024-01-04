# devpro-christmas-codeoff-2023

## How to run

- `npm install`
- `npm start`

### Objectives

#### 1. Niceness Rating Enum

- create a `NicenessRating.ts` file with am exported `NicenessRating` enum with 4 values:
  - `NICE`
  - `VERY_NICE`
  - `NAUGHTY`
  - `VERY_NAUGHTY`
- Replace all references to these hardcoded strings to enum references. 
- Any variable that contains strings that are niceness ratings should be typed to the new enum.

#### 2. CoalCalculator.ts

- Change the type of the nicenessRating parameter to the `NicenessRating` enum type.
- refactor the nicenessRating `if-else-if` checks to a switch statement.
- refactor the totalCoal conditional to not use `else` or `else-if` and return as soon as the coal total is known.
- extract the coalCoefficient conditional into its own method named `getCoalCoefficient`
- extract the totalCoal conditional into its own method named `getTotalCoal`

#### 3. GiftThing.ts

- rename the `GiftThing` class to `GiftCalculator`.
- rename the `GiftThing.ts` file to `GiftCalculator.ts`.
- Refactor the `getGiftThing` method to not use `else` or `else-if` and return as soon as the gift total is known.
- Rename the `getGiftThing` method to `getGiftTotal`. 

#### 4. Person interface

- create a `Person.ts` file and create and export a `Person` interface containing the following fields:
  - `name` of type `string`
  - `age` of type `number`
  - `nicenessRating` of type `NicenessRating`
- Update the `printGiftTotal` method in `main.ts` to take in a single `Person` argument instead of 3 seperate arguments. 

#### 5. Nice List

- Create a `NiceList.ts` file and create and export a `NiceList` class with a method called `getList` that returns an array of `Person`. Move the hard-coded data in `main.ts` into this method.
- Update main to use the new `NiceList` to populate `santasList`.

#### 6. Reorganize
- Create a `calculator` directory under `src` and move `CoalCalculator.ts` & `GiftCalculator.ts` into this directory. 
- Create a `model` directory under `src` and move `Person.ts` & `NicenessRating.ts` into the `model` directory.

#### 7. Java to JSON

- Manually convert the `InviceListDto` class in `JavaClass.java` in to a valid JSON object with the same schema. Include the the following values with the JSON object:
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