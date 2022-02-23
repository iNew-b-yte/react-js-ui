import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import MiddlePanel from './MiddlePanel';
import Text from './Text';

function App() {
  return (
    <div className='App'>
          <Text class="top-text" text="Lorem Ipsum is simply dummy text of the printing" />
      <div className='body'>
        <LeftPanel />
        <MiddlePanel />
        <RightPanel />
      </div>
    </div>
  )
}

export default App;
