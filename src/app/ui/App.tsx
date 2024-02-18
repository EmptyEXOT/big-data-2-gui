import React from 'react';
import {HSize, Typo} from '@/shared/ui/Typo';

export const App = () => {
    return (
        <div>
            <Typo.H size={HSize.h1}>Header</Typo.H>
            <Typo.P>hello!</Typo.P>
        </div>
    );
};
