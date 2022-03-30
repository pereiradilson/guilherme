import Video from "../Video";

export default function Videos() {
  return (
    <div className="pt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3">
      <Video src="image-1.jpg" typeVideo="youtube" />
      <Video src="image-2.jpg" typeVideo="vimeo" />
      <Video src="image-3.jpg" typeVideo="youtube" />
      <Video src="image-1.jpg" typeVideo="youtube" />
      <Video src="image-2.jpg" typeVideo="youtube" />
      <Video src="image-3.jpg" typeVideo="vimeo" />
      <Video src="image-1.jpg" typeVideo="youtube" />
      <Video src="image-2.jpg" typeVideo="youtube" />
      <Video src="image-3.jpg" typeVideo="youtube" />
      <Video src="image-1.jpg" typeVideo="youtube" />
      <Video src="image-2.jpg" typeVideo="youtube" />
      <Video src="image-3.jpg" typeVideo="vimeo" />
    </div>
  );
}
