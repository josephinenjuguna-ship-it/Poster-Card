import albert from "../assets/albert.jpg";

function PosterImage() {
  return (
    <div className="bg-black text-white">
      <img
        src={albert}
        alt="Albert  Odero"
        className="w-full h-[500px] object-cover"
      />
    </div>
  );
}

export default PosterImage;