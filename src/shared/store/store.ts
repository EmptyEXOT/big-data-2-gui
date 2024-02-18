import { configureStore } from '@reduxjs/toolkit'
import {animalsReducer} from "@/entity/Animals/model/animalsSlice";

export const store = configureStore({
    reducer: {
        animals: animalsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch