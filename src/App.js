import './App.css';
import User from './components/User.js';
import Header from './components/Header';
import {FollowingProvider} from './FollowingContext';
function App() {

  return (
    <div>
      <FollowingProvider>
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <h1>Find new users like you</h1>
          <User />
        </div>
      </FollowingProvider>
    </div>
  );
}

export default App;
