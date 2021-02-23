import './App.css';
import Header from './components/Header/Header';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <h1></h1>
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>

      {/*RecommendedVideos */}
    </div>
  );
}

export default App;
