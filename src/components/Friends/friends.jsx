import { Link, Outlet } from "react-router-dom";

export default function Friends() {
  const friends = ['Alex', 'John', 'Martha'];

  return (
      <div>
          <div className="flex">
              {friends.map((friend) => ( 
                  <Link to={`/friends/${friend}`}>
                      <p className="friends-link">{friend}</p>
                  </Link>
              ))}
          </div>
          <div className="friend-block">
              <Outlet/>
          </div>
      </div>
  )
}