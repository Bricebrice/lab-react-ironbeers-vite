import beersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="category">
        <img src={beersImage} alt="beers" />
        <h2>
          <Link to="/beers">All Beers</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet diam nec arcu pretium egestas ac pellentesque nibh. Nam in urna
          in sapien iaculis molestie sit amet ut risus. Etiam nec quam massa.
          Nam commodo in sapien eu dapibus. Suspendisse facilisis diam in
          accumsan eleifend. Sed non dignissim eros.
        </p>
      </div>
      <div className="category">
        <img src={randomBeerImage} />
        <h2>
          <Link to="/random-beer">Random Beer</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet diam nec arcu pretium egestas ac pellentesque nibh. Nam in urna
          in sapien iaculis molestie sit amet ut risus. Etiam nec quam massa.
          Nam commodo in sapien eu dapibus. Suspendisse facilisis diam in
          accumsan eleifend. Sed non dignissim eros.
        </p>
      </div>
      <div className="category">
        <img src={newBeerImage} />
        <h2>
          <Link to="/new-beer">New Beer</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet diam nec arcu pretium egestas ac pellentesque nibh. Nam in urna
          in sapien iaculis molestie sit amet ut risus. Etiam nec quam massa.
          Nam commodo in sapien eu dapibus. Suspendisse facilisis diam in
          accumsan eleifend. Sed non dignissim eros.
        </p>
      </div>
    </>
  );
}

export default HomePage;
