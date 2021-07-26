import WebFont from 'webfontloader'
import Header from './components/header'
import PollEditor from './components/poll-editor'
import { Fragment, useState, useEffect  } from 'react'

import './App.css';

WebFont.load({
  google: {
    families: ['Roboto Web:300,400,700', 'sans-serif']
  }
})

function App() {

  const [showEditor, setShowEditor] = useState(false);

  const showEditorHandler = () => {
      setShowEditor(current => !current)
      console.log(showEditor)
  }

  useEffect(() =>{}, [showEditor])

  return (
    <Fragment>
      <Header show={showEditor} btn_handler={showEditorHandler}/>
      <div className="poll-container">
        <PollEditor show={showEditor}/>
      </div>
    </Fragment>
  );
}

export default App;
