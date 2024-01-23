import { useState, useEffect } from "react";
import Robots from "./components/Robots";
import Search from "./components/Search";
import Scroll from "./components/Scroll";

function App() {
  const [robots, setRobots] = useState([]);
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filterSearch = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  return !robots.length ? (
    <div className="loading">
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </div>
  ) : (
    <div>
      <h3 className="logo">RoboFriends</h3>
      <Search onSearchChange={onSearchChange} />
      <Scroll>
        <Robots robots={filterSearch} />
      </Scroll>
    </div>
  );
}

export default App;
