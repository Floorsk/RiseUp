import { createGlobalStyle } from 'styled-components';
import themes from './themes/themes';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${themes.colors.background};
        font-size: 14px;
        color: #333;
        font-family: 'Space Grotesk', sans-serif;
    }
`