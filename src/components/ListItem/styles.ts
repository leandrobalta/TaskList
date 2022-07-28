import styled from "styled-components";

type ContentProps ={
    done: boolean;
}

export const Content = styled.div(({done}: ContentProps) => (`
    display: flex;
    justify-content: space-between;
    background-color: #022;
    margin: 10px 0px;
    padding: 10px;
    font-size: 20px;
    max-width: 1000px;
    border-radius: 10px;
  
    input{
        margin-right: 10px;
        width: 20px;
        height: 20px;
    }

    label {
        text-decoration: ${done ? "line-through" : "initial"}
    }

     button {
         border-radius: 7px;
         display: table;
         cursor: pointer;
         transition: transform 0.4s;
     }

     button: hover{
         transform: scale(1.2);
     }
`));
