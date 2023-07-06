import video from "../data/video.js";
import Header from "./Header.js";
import Comments from "./Comments.js";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <div>
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      </div>
      <Header data={video}/> 
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
