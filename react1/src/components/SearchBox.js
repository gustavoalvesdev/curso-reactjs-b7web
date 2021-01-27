import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        if (props.onChangeText) {
            props.onChangeText(texto);
        }
    }, [texto]);

    function inputTextChange(e) {

        setTexto(e.target.value);

    }

    return (

        <>
            <InputText type="text" value={texto} onChange={inputTextChange} placeholder={props.frasePadrao ?? 'Digite alguma coisa'} />
        </>

    );

}

export default SearchBox;