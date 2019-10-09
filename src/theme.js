import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Arial',
  },
  palette: {
    primary: {
      light: '#ed0e14',
      main: '#9D090D',
      dark: '#7d070a',
    },
    background: {
      light: '#E6E6DA',
      main: '#c4c4a7',
      dark: '#9b9b6b',
    },
    footer: {
      light: '#929292',
      main: '#3d3d3d',
      dark: '#242424',
    },
  },
})

export default theme
