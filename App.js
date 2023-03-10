import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore} from '../contexts/LanguageContext.js';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from '../components/LanguageSelector'
class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
        <LanguageSelector /> 
        <ColorContext.Provider value="red">
            <UserCreate />
        </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
