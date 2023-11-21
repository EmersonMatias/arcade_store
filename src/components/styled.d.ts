// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      h1: string,
      h2: string,
      h3: string,
      h4: string,
      h5: string,
      h6: string,
      p: string,
    },
    lineHeight: {
      h1: string,
      h2: string,
      h3: string,
      h4: string,
      h5: string,
      h6: string,
      p: string,
    }

    size: {
      px16: string,
      px24: string,
      px32: string,
      px40: string,
      px48: string,
      px80: string,
      px120: string,
      px160: string,
      px200: string,
      px680: string,
      px700: string
      px820: string,

    },
    colors: {
      black: string
    }

  }
}

