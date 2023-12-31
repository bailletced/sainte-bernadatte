type THeadPageProps = {
  title: string;
  subtitle: string;
};

export const HeadPage: TFC<THeadPageProps> = ({ title, subtitle }) => {
  return (
    <div
      className="flex items-center justify-center w-full h-80 "
      style={{
        backgroundImage: "url(/images/groupes.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="text-center">
        <h1 className=" text-white text-5xl text-center font-beautiful">
          {title}
        </h1>
        <hr className="w-40 text-white mx-auto my-5" />
        <p className="text-center text-white">{subtitle}</p>
      </div>
    </div>
  );
};
