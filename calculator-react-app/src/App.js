import React from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import ErrorBoundary from './ErrorBoundary';

const btnValues = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '=']
];

function App () {
    return (
        <>
        <Wrapper>
            <ErrorBoundary fallback="error">
                <Screen value=""/>
            </ErrorBoundary>
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