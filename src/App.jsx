import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <div className="container">
      <div className="container__content">
        <span>discover</span>
        <h1>Mountains</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut tenetur
          nihil voluptatibus! Repudiandae illum minus omnis nesciunt
          perspiciatis debitis aut?
        </p>
        <a
          href="#"
          className="hero__btn"
        >
          See more
        </a>
      </div>
      <Carousel />
    </div>
  );
};
export default App;
