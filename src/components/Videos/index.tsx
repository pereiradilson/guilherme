import Video from "../Video";

type typeVideo = {
  id: string;
  image: string;
  description: string;
  videoUrl: string;
  typeVideo: string;
};

interface VideosProps {
  videos: typeVideo[];
}

export default function Videos({ videos }: VideosProps) {
  return (
    <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3">
      {videos.map((value) => (
        <Video
          key={value.id}
          src={value.image}
          videoUrl={value.videoUrl}
          typeVideo={value.typeVideo}
          alt={value.description}
        />
      ))}
    </div>
  );
}
