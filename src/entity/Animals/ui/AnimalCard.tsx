import React, {FC} from 'react';
import {AnimalsState, AnimalState} from "@/entity/Animals/model/types";
import {useAppSelector} from "@/shared/store/hooks";
import {getAnimalByName} from "@/entity/Animals/model/selectors";
import {HSize, Typo} from "@/shared/ui/Typo";
import cls from './AnimalCard.module.scss'
import classNames from "classnames";

interface AnimalProps {
    animal: keyof AnimalsState
    className?: string
    id?: string
}

const AnimalCard: FC<AnimalProps> = ({animal, ...props}) => {
    const animalInfo = useAppSelector(getAnimalByName(animal)) as AnimalState

    return (
        <div className={classNames(cls.animalCard, animalInfo.isValid ? cls.valid : cls.invalid, props.className)}>
            <div>
                <Typo.H size={HSize.h2}>{String(animalInfo.translation)}</Typo.H>
            </div>
            <div>
                <div className={classNames(cls.row)}>
                    <Typo.P>Первая "С"?</Typo.P> <Typo.P>{String(animalInfo.isFirstLetterC)}</Typo.P>
                </div>
                <div className={classNames(cls.row)}>
                <Typo.P>Земное?</Typo.P><Typo.P>{String(animalInfo.isMostlyTerrestrial)}</Typo.P>
                </div>
                <div className={classNames(cls.row)}>
                    <Typo.P>7 букв?</Typo.P><Typo.P>{String(animalInfo.isSevenOrFourLetters)}</Typo.P>

                </div>
            </div>
        </div>
    );
};

export default AnimalCard;