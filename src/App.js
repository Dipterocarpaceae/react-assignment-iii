import Users from "./Users";
import Posts from "./Posts";

function App() {
  return (
    <div>
      <Users urlEnd="users" />
      <Posts urlEnd="posts" />
    </div>
  );
}

export default App;
