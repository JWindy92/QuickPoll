import WebFont from 'webfontloader'
import Header from './components/header'

import './App.css';

WebFont.load({
  google: {
    families: ['Roboto Web:300,400,700', 'sans-serif']
  }
})

function App() {
  return (
    <Header />
  );
}

export default App;
