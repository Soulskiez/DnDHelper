import React, { useState } from 'react'
import { makeStyles, mergeClasses } from '@material-ui/styles'
import logo from './logo.svg'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  appLogo: {
    height: '40vmin',
  },
  appLink: {
    color: '#09D3AC',
  },
})

function App() {
  const [tyler, setTyler] = useState('tyler')
  const classes = useStyles()
  const changeToKristina = () => {
    setTyler('kristina')
  }
  return (
    <div className={classes.root}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{tyler}</p>
        <button onClick={changeToKristina}>
          click this button to change tyler ^ to kristina
        </button>
        <a
          className={classes.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
