import React, { useState } from 'react';
import './App.css';
import Routes from './routes'
import { Provider } from 'react-redux';
import store from './reducers/store';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <>
    <Provider store={store}>
      <div className="App-test">
      <ThemeProvider theme={theme === 'dark' ? lightTheme : darkTheme}> 
        <GlobalStyles /> 
          <Routes />
        </ThemeProvider>
        </div>
    </Provider>
    </>
  );
}

export default App;