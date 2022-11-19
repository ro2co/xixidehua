import { extendTheme,
    theme as baseTheme, 
    withDefaultColorScheme,
} from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const Container = {
  sizes: {
    xl: {
      maxWidth: 'container.xl',
    },
    lg: {
      maxWidth: 'container.lg',
    },
    md: {
      maxWidth: 'container.md',
    },
    sm: {
      maxWidth: 'container.sm',
    },
  },
  
  defaultProps: {
    size: ['sm','sm','sm','lg',]
  },
};


const fontSizes = {
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.625rem",
    xl: "1.25rem",
  }
}
const sizes = {
  sizes: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1150px',
      xl: '1400px',
    },
  }
}

const colors = {
  colors: {
    brand: baseTheme.colors.blue
  }
}

const breakpoints = {
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1150px',
    xl: '1400px',
  }
}
const components = {
  components: {
    Container,
  }
}

export const customTheme = extendTheme(
  colors,
  sizes,
  fontSizes,
  components,
  breakpoints,
  withDefaultColorScheme({
    colorScheme: 'brand'
  }),
  //withDefaultSize({
  //  size: 'lg',
  //  components: ['Button', 'Container'],
  //})
)
