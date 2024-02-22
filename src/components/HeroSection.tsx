import URLInput from "./URLInput";

const HeroSection = () => {
  return (
    <main className="flex mt-20 flex-col justify-center">
      <div className="px-8 text-center space-y-3 mb-5">
        <h1 className="text-3xl text-center text-[rgba(20,78,227,1)] font-bold">
          Shorten Your Loooong Links :)
        </h1>
        <p className=" font-light text-sm">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
      </div>
      <URLInput />
    </main>
  );
};

export default HeroSection;
