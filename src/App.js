import { Link, Routes, Route} from "react-router-dom"

import NotFound from "./components/NotFound/not_found";
import Friend from "./components/Friend/friend";
import Friends from "./components/Friends/friends";
import Home from "./components/Home/home";
import Profile from "./components/Profile/profile";
import './index.css';


export default function App() {
  
  return (
    <main>
      <nav>
        <div className="flex">
            <Link to="/" className="navlink">
              Home
            </Link>
            <Link to="/profile" className="navlink">
              Profile
            </Link>
            <Link to="/friends" className="navlink">
              Friends
            </Link>
        </div>
      </nav>


    <div className="container">
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />}>
          <Route path=":friend" element={<Friend />} />
        </Route>
        
      </Routes>
    </div>
    </main>
  )
}