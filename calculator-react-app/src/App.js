import React from 'react';
import { useState } from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '=']
];

function App () {
    const [calc, setCalc] = useState({
        sign: '',
        num: 0,
        res: 0,
    });
    
    return (
        <>
        <Wrapper>
            <Screen value=""/>
            <ButtonBox> 
                {
                    btnValues.flat().map((btn, i) => {
                        return (
                            <Button 
                                key={i}
                                className={btn === '=' ? 'equals' : '' }
                                value={btn}
                                onClick={() => {
                                console.log('clicked');
                            }}
                            />
                        )
                    })
                }
            </ButtonBox>
        </Wrapper>
        </>
    );
};

export default App;