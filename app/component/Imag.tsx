interface Imageprop {
  srclink: string;
}

const Imag: React.FC<Imageprop> = ({ srclink }) => {
  return (
    <div>
      <img
        src={srclink}
        alt=""
        className=" h-[300px] min-w-[280px] object-fill md:h-[400px] md:min-w-[380px] transition
        hover:scale-105"
      />
    </div>
  );
};

export default Imag;
