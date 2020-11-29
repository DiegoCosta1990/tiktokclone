import React from 'react';
import './App.css';
import Video from './Video';
import Video1 from './video1.mp4';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video 
          url={Video1}
          channel="@diegoalbertocosta"
          description="Video of a Video of the sea"
          song="The best song ever"
          likes={200}
          messages={100}
          shares={154}
        />
        <Video
          url={Video1}
          channel="@diegoalbertocosta"
          description="Video of a Video of the sea"
          song="The best song ever"
          likes={100}
          messages={50}
          shares={10}
        />
      </div>
    </div>
  );
}

export default App;
