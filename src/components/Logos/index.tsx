import Art from "../Art";

type typeLogo = {
  id: string;
  description: string;
  image: string;
};

interface LogosProps {
  logos: typeLogo[];
}

export default function Logos({ logos }: LogosProps) {
  return (
    <div className="p-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 gap-2">
      {logos.map((value) => (
        <Art key={value.id} src={value.image} alt={value.description} />
      ))}
    </div>
  );
}
