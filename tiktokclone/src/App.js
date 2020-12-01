import React from 'react';
import './App.css';
import Video from './Video';
import Video1 from './video1.mp4';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video 
          url="https://vod-progressive.akamaized.net/exp=1606838984~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2427%2F15%2F387139746%2F1632272081.mp4~hmac=652c11e7f01fd747b963a044213b785d54ffe1c2d6113aaad55b657ac62ee2bb/vimeo-prod-skyfire-std-us/01/2427/15/387139746/1632272081.mp4?filename=video.mp4"
          channel="@diegoalbertocosta"
          description="Video of a Video of the sea"
          song="The best song ever"
          likes={200}
          messages={100}
          shares={154}
        />
        <Video
          url="https://vod-progressive.akamaized.net/exp=1606839064~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3839%2F15%2F394197229%2F1673203924.mp4~hmac=581adf4e890d4a1835c851c9b5a1fdf095174e7b745051291d28ae412b5413d3/vimeo-prod-skyfire-std-us/01/3839/15/394197229/1673203924.mp4?filename=production+ID%3A3818490.mp4"
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
