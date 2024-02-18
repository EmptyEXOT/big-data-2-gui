import React from 'react';
import AnimalCard from "@/entity/Animals/ui/AnimalCard";
import cls from './App.module.scss'
import classNames from "classnames";
import {HSize, Typo} from "@/shared/ui/Typo";
import Button from "@/shared/ui/Button/Button";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {animalsActions} from "@/entity/Animals/model/animalsSlice";
import {getAllAnimals} from "@/entity/Animals/model/selectors";

export const App = () => {
    const dispatch = useAppDispatch();
    const animals = useAppSelector(getAllAnimals);

    const onFirstQuestion = (value: boolean) => {
        for (let animal in animals) {
            if (animals[animal].isFirstLetterC !== value) {
                dispatch(animalsActions.setInvalid(animal))
            }
        }
    }

    const onSecondQuestion = (value: boolean) => {
        for (let animal in animals) {
            if (animals[animal].isMostlyTerrestrial !== value) {
                dispatch(animalsActions.setInvalid(animal))
            }
        }
    }

    const onThirdQuestion = (value: boolean) => {
        for (let animal in animals) {
            if (animals[animal].isSevenOrFourLetters !== value) {
                dispatch(animalsActions.setInvalid(animal))
            }
        }
    }

    return (
        <div>
            <div className={classNames(cls.questionWrapper)}>
                <div className={classNames(cls.question)}>
                    <Typo.H size={HSize.h1}>
                        Название начинается на С?
                    </Typo.H>
                    <div className={classNames(cls.btnsWrapper)}>
                        <Button onClick={() => onFirstQuestion(true)}><Typo.H size={HSize.h2}>Да</Typo.H></Button>
                        <Button onClick={() => onFirstQuestion(false)}><Typo.H size={HSize.h2}>Нет</Typo.H></Button>
                    </div>
                </div>
            </div>
            <div className={classNames(cls.row)}>
                <AnimalCard animal={"titmouse"}></AnimalCard>
                <AnimalCard animal={"sardine"}></AnimalCard>
                <AnimalCard animal={"pig"}></AnimalCard>
                <AnimalCard animal={"elephant"}></AnimalCard>
                <AnimalCard animal={"crow"}></AnimalCard>
                <AnimalCard animal={"parrot"}></AnimalCard>
                <AnimalCard animal={"giraffe"}></AnimalCard>
                <AnimalCard animal={"tiger"}></AnimalCard>
            </div>
            <div className={classNames(cls.questionsGroupWrapper)}>
                <div className={classNames(cls.questionWrapper)}>
                    <div className={classNames(cls.question)}>
                        <Typo.H size={HSize.h1}>
                            Животное преимущественно земное?
                        </Typo.H>
                        <div className={classNames(cls.btnsWrapper)}>
                            <Button onClick={() => onSecondQuestion(true)}><Typo.H size={HSize.h2}>Да</Typo.H></Button>
                            <Button onClick={() => onSecondQuestion(false)}><Typo.H
                                size={HSize.h2}>Нет</Typo.H></Button>
                        </div>
                    </div>
                </div>
                <div className={classNames(cls.questionWrapper)}>
                    <div className={classNames(cls.question)}>
                        <Typo.H size={HSize.h1}>
                            Животное преимущественно земное?
                        </Typo.H>
                        <div className={classNames(cls.btnsWrapper)}>
                            <Button onClick={() => onSecondQuestion(true)}><Typo.H size={HSize.h2}>Да</Typo.H></Button>
                            <Button onClick={() => onSecondQuestion(false)}><Typo.H
                                size={HSize.h2}>Нет</Typo.H></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames(cls.row)}>
                <AnimalCard animal={"titmouse"}></AnimalCard>
                <AnimalCard animal={"sardine"}></AnimalCard>
                <AnimalCard animal={"pig"}></AnimalCard>
                <AnimalCard animal={"elephant"}></AnimalCard>
                <AnimalCard animal={"crow"}></AnimalCard>
                <AnimalCard animal={"parrot"}></AnimalCard>
                <AnimalCard animal={"giraffe"}></AnimalCard>
                <AnimalCard animal={"tiger"}></AnimalCard>
            </div>
            <div className={classNames(cls.questionsGroupWrapper)}>
                <div className={classNames(cls.questionWrapper)}>
                    <div className={classNames(cls.question)}>
                        <Typo.H size={HSize.h1}>
                            Кол-во букв 7 или 4?
                        </Typo.H>
                        <div className={classNames(cls.btnsWrapper)}>
                            <Button onClick={() => onThirdQuestion(true)}><Typo.H size={HSize.h2}>Да</Typo.H></Button>
                            <Button onClick={() => onThirdQuestion(false)}><Typo.H
                                size={HSize.h2}>Нет</Typo.H></Button>
                        </div>
                    </div>
                </div>
                <div className={classNames(cls.questionWrapper)}>
                    <div className={classNames(cls.question)}>
                        <Typo.H size={HSize.h1}>
                            Кол-во букв 7 или 4?
                        </Typo.H>
                        <div className={classNames(cls.btnsWrapper)}>
                            <Button onClick={() => onThirdQuestion(true)}><Typo.H size={HSize.h2}>Да</Typo.H></Button>
                            <Button onClick={() => onThirdQuestion(false)}><Typo.H
                                size={HSize.h2}>Нет</Typo.H></Button>
                        </div>
                    </div>
                </div>
                <div className={classNames(cls.questionWrapper)}>
                    <div className={classNames(cls.question)}>
                        <Typo.H size={HSize.h1}>
                            Кол-во букв 7 или 4?
                        </Typo.H>
                        <div className={classNames(cls.btnsWrapper)}>
                            <Button onClick={() => onThirdQuestion(true)}><Typo.H size={HSize.h2}>Да</Typo.H></Button>
                            <Button onClick={() => onThirdQuestion(false)}><Typo.H
                                size={HSize.h2}>Нет</Typo.H></Button>
                        </div>
                    </div>
                </div>
                <div className={classNames(cls.questionWrapper)}>
                    <div className={classNames(cls.question)}>
                        <Typo.H size={HSize.h1}>
                            Кол-во букв 7 или 4?
                        </Typo.H>
                        <div className={classNames(cls.btnsWrapper)}>
                            <Button onClick={() => onThirdQuestion(true)}><Typo.H size={HSize.h2}>Да</Typo.H></Button>
                            <Button onClick={() => onThirdQuestion(false)}><Typo.H
                                size={HSize.h2}>Нет</Typo.H></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames(cls.row)}>
                <AnimalCard animal={"titmouse"}></AnimalCard>
                <AnimalCard animal={"sardine"}></AnimalCard>
                <AnimalCard animal={"pig"}></AnimalCard>
                <AnimalCard animal={"elephant"}></AnimalCard>
                <AnimalCard animal={"crow"}></AnimalCard>
                <AnimalCard animal={"parrot"}></AnimalCard>
                <AnimalCard animal={"giraffe"}></AnimalCard>
                <AnimalCard animal={"tiger"}></AnimalCard>
            </div>
        </div>

    );
};
