import "./App.css";

import HeadingOne from "./components/HeadingOne";
import MovieCard from "./templates/MovieCard";
import Heading3 from "./components/Heading3";

function App() {
  return (
    <div className="App">
      <header>
        <HeadingOne />
      </header>
      <main>
        <section className="flexContainer">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </section>
        <section></section>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
