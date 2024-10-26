import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./App.css";
import StarRating from "./StarRating.jsx";
import Sample from "./showMore.jsx";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
    />
    <StarRating size={24} className="test" defaultRating={3} />
    <Test />
    <Sample />
  </StrictMode>
);
