import { useGetGamesQuery } from "./redux/api/api";
import { useSelector } from "react-redux";

function App() {
  const { isLoading } = useGetGamesQuery();
  const games = useSelector((state) => state.games);

  const items = games.map((itm) => <h1 key={itm.id}>{itm.name}</h1>);

  return <div>{isLoading ? <h1>Loading...</h1> : items}</div>;
}

export default App;
