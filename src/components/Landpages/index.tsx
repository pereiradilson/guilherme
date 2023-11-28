import Landpage from "../Landpage";

type typeLandpage = {
  id: string;
  description: string;
  image: string;
  link_url: string;
};

interface LandpagesProps {
  landpages: typeLandpage[];
}

export default function Landpages({ landpages }: LandpagesProps) {
  return (
    <div className="p-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 gap-2">
      {landpages.map((value) => (
        <Landpage
          key={value.id}
          src={value.image}
          alt={value.description}
          link_url={value.link_url}
        />
      ))}
    </div>
  );
}
