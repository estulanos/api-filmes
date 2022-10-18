import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;

    h1 {
        font-family: Dejavu Sans, Arial, Verdana, sans-serif;
        text-align: center;
        margin: 4rem 0;
        font-size: 50px;
        margin-top: 10px;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
    column-gap: 5rem;
    row-gap: 5rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
        width: 180px;
        border-radius: 0.2rem;
        margin-bottom: 2rem;
        border-style: solid;
        border-width: 1px;

    }
    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
        font-family: Dejavu Sans, Arial, Verdana, sans-serif;
    }
    a {
        transition: all 0.3s;
        
    }
    a:hover {
        transform: scale(1.1);
        
    }
`;

export const Btn = styled.button`
    margin-top: 15px;
    padding: 0.7rem 3.5rem;
    border: none;
    border-radius: 5px;
    background-color: white;
    font-weight: 1000;
    font-size: 16px;
    cursor: pointer;
    transition: all 250ms;
    font-family: Dejavu Sans, Arial, Verdana, sans-serif;
`;
