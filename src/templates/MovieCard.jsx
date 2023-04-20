import Image from "../components/Image";
import MovieRating from "../components/MovieRating";
import Heading3 from "../components/Heading3";

const MovieCard = () => {
  return (
    <article>
      <figure>
        <Image />
        <Heading3 />
        <MovieRating />
      </figure>
    </article>
  );
};

export default MovieCard;

// sfc is the
