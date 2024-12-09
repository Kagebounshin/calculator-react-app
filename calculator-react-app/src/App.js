import React from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

function App () {
    return (
        <>
        <Wrapper>
            <Screen />
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