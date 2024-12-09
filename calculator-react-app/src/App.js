import React from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import ErrorBoundary from './ErrorBoundary';

function App () {
    return (
        <>
        <Wrapper>
            <ErrorBoundary fallback="error">
                <Screen value=""/>
            </ErrorBoundary>
            <ButtonBox>
                <Button 
                    className=''
                    value='0'
                    onClick={() => {
                        console.log('clicked');
                    }}
                />
            </ButtonBox>
        </Wrapper>
        </>
    );
};

export default App;