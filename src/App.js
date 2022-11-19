import Users from "./Users";
import Posts from "./Posts";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" exact element={<Users urlEnd="users" />} />
        <Route path="/users" element={<Users urlEnd="users" />} />
        <Route path="/posts" element={<Posts urlEnd="posts" />} />
      </Routes>
    </Router>
  );
}

export default App;
