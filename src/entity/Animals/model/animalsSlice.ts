import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Animals, AnimalsState, AnimalState} from "@/entity/Animals/model/types";
import {titmouseInitialState} from "@/entity/Animals/model/Titmouse";
import {crowInitialState} from "@/entity/Animals/model/Crow";
import {elephantInitialState} from "@/entity/Animals/model/Elephant";
import {giraffeInitialState} from "@/entity/Animals/model/Giraffe";
import {parrotInitialState} from "@/entity/Animals/model/Parrot";
import {pigInitialState} from "@/entity/Animals/model/Pig";
import {sardineInitialState} from "@/entity/Animals/model/Sardine";
import {tigerInitialState} from "@/entity/Animals/model/Tiger";

const initialState: AnimalsState = {
    titmouse: titmouseInitialState,
    crow: crowInitialState,
    elephant: elephantInitialState,
    giraffe: giraffeInitialState,
    parrot: parrotInitialState,
    pig: pigInitialState,
    sardine: sardineInitialState,
    tiger: tigerInitialState,
}

const animalsSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
        setValid: (state, action: PayloadAction<keyof AnimalsState>) => {
            state[action.payload].isValid = true
        },
        setInvalid: (state, action: PayloadAction<keyof AnimalsState>) => {
            state[action.payload].isValid = false
        }
    }
})

export const {actions: animalsActions} = animalsSlice
export const {reducer: animalsReducer} = animalsSlice
