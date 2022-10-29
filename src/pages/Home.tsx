import { useQuery } from "react-query";
import { getMoives } from "../api/api";

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMoives);
  console.log(data, isLoading);

  return <div style={{ backgroundColor: "whitesmoke", height: "200vh" }}></div>;
}
export default Home;
