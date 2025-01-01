import { Parallax } from "react-parallax";

function Cover({ img, heading, subHeading }) {
  return (
    <Parallax
      blur={{ min: -55, max: 55 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[700px] uppercase font-cinzel">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center bg-black/70 w-9/12 py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl 2xl:text-9xl font-bold ">{heading}</h1>
            <p className="mb-5 font-semibold text-2xl">{subHeading}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default Cover;
