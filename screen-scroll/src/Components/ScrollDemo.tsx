import useScrollTo from "./ScrollTo";

const ScrollDemo = () => {
  const scrollToHeight = useScrollTo();

  return (
    <div>
      <button onClick={() => scrollToHeight(500)}>Scroll to 500px</button>
    </div>
  );
};

export default ScrollDemo;
