import React, { useState } from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    border-box: 2px #000;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    width: 300px;
`;

function SearchBox(props) {

    const [texto, setTexto] = useState('');

    function inputTextChange(e) {

        setTexto(e.target.value);

    }

    function handleKeyUp(e) {
        if (e.keyCode === 13) {
            if (props.onEnter) {
                props.onEnter(texto);
            }
            setTexto('');

        }
    }

    return (

        <>
            <InputText
                type="text"
                value={texto} onChange={inputTextChange}
                onKeyUp={handleKeyUp}
                placeholder={props.frasePadrao ?? 'Digite alguma coisa'}
            />
        </>

    );

}

export default SearchBox;