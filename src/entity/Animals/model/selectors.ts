import {RootState} from "@/shared/store/store";
import {Animals, AnimalsState, AnimalState} from "./types";

export const getAllAnimals = (state: RootState) => state.animals;

export const getAnimalByName = (animal: keyof AnimalsState) => (state: RootState) => state?.animals[animal]

