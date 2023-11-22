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
    },
    colors: {
      black: string
    }

  }
}

