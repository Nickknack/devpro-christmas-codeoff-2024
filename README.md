# devpro-christmas-codeoff-2023

## How to run

- `npm install`
- `npm start`

### Objectives

#### Niceness Rating Enum

- create a `NicenessRating` enum with 4 values:
  - `"NICE"`
  - `"VERY_NICE"`
  - `"NAUGHTY"`
  - `"VERY_NAUGHTY"`
- Replace all references to these hardcoded strings to enum references. 
- Any variable that contains strings that are niceness ratings should be typed to the new enum.

#### CoalCalculator.ts

- Change the type of the nicenessRating parameter to the `NicenessRating` enum type.
- refactor the nicenessRating `if-else-if` checks to a switch statement.
- extract the coalCoefficient conditional into its own method named `getCoalCoefficient`
- extract the totalCoal conditional into its own method named `getTotalCoal`

#### GiftThing.ts

- rename the `GiftThing` class to `GiftCalculator`.
- Refactor the `getGiftThing` method to fail-fast and return as soon as the gift total is known.
- Rename the `getGiftThing` method to `getGiftTotal`. 

#### Person interface

- create a `Person.ts` file and create and export a `Person` interface containing the following fields:
  - `name` of type `string`
  - `age` of type `number`
  - `nicenessRating` of type `NicenessRating`
- Update the `printGiftTotal` method in `main.ts` to take in a single `Person` argument instead of 3 seperate arguments. 

#### Nice List

- Create a `NiceList.ts` file and create and export a `NiceList` class with a method called `getList` that returns an array of `Person`. Move the hard-coded data in `main.ts` into this method.
- Update main to use the new `NiceList` to populate `santasList`.

#### Reorganize
- Create a `calculator` directory under `src` and move `CoalCalculator.ts` & `GiftCalculator.ts` into this directory. 
- Create a `model` directory under `src` and move `Person.ts` into the `model` directory.