import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        width: 100%;
        min-height: 100dvh;
        background-color: #22252b;
        display: grid;
        place-content: center;
    }

    #root {
        width: 300px;
        height: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

