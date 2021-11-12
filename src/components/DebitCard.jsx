import styled from 'styled-components';

const Div = styled.div`
width:62%;
background:white;
border: 1px solid rgb(161, 161, 161);
border-left:none;
`

function DebitCard(){
    return(
        <Div>
            <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjBks16C7FQEU1g9HAfJVLxrRFFCeKbRAFHUPyHzSRwf-1qdqvoKpisz62xAZPSYvfP_7hHcdPBA50cIsqZQEYwiYbEW64H_zqP3PcrPCP_7v6EcZE6vuicYIVTXJ0xudnQVxuXfIOHHJqUMd2xXgfp9cdeKbpmtB7PzNACvVxqEhspQ4E2rsJ6n1zbXQ=w745-h585"></img>
        </Div>
    )
}
export {DebitCard}