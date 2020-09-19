import { createGlobalStyle } from 'styled-components';

export const colors = {
  orange: '#FFC401',
  blue: '#2584FF',
  salmon: '#FF7552',
};

const GlobalStyles = createGlobalStyle`
  :root {
    /* text */
    --navy: #505f79;
    --light-navy: #68778C;

    /* icons */
    --dark-grey: #767676;
    --light-grey: #B7B8B8;

    /* color accents */
    --blue: #2584FF;
    --orange: #FFC401;
    --salmon: #FF7552;

    --layout-border: #dfe1e5;
    --menu-hover: #deebff;
  }

  * {
    box-sizing: border-box;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    color: var(--navy);

    > div {
      height: 100%;
    }

    ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
`;

export default GlobalStyles;
