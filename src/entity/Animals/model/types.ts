export enum Animals {

}

export interface AnimalState {
    readonly isFirstLetterC: boolean,
    readonly isMostlyTerrestrial: boolean,
    readonly isSevenOrFourLetters: boolean,
    readonly translation: string,
    isValid: boolean
}

export interface AnimalsState {
    // titmouse: AnimalState
    // pig: AnimalState
    // sardine: AnimalState
    // parrot: AnimalState
    // tiger: AnimalState
    // crow: AnimalState
    // elephant: AnimalState
    // giraffe: AnimalState
    [animal: string]: AnimalState
}
