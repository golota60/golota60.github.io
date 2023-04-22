import { createSignal } from "solid-js";

interface Image {
  title: string;
  path: string | HTMLCanvasElement;
}

interface Props {
  images: Array<Image>;
}

const ImageOverlap = (props: Props) => {
  const [selectedImage, setSelectedImage] = createSignal<Image>(
    props.images[0]
  );

  return (
    <div class="w-full flex items-center justify-center">
      <div class="w-[500px]">
        {typeof selectedImage().path === "string" ? (
          <img src={selectedImage().path as string} />
        ) : (
          (selectedImage() as any).path
        )}
        <div class="w-full flex justify-center">{selectedImage().title}</div>
        <div class="flex justify-between">
          {props.images.map((e) => (
            <div
              class="cursor-pointer hover:border-gray border-2 border-solid"
              onclick={() => {
                console.log(e);
                setSelectedImage(e);
              }}
            >
              {typeof e.path === "string" ? (
                <img class="block" src={e.path} />
              ) : (
                e.path
              )}
            </div>
          ))}
        </div>
        <span>Click on images to swap between them</span>
      </div>
    </div>
  );
};

/*

outside:

      <div class="w-full h-full absolute"></div>

          <div class="relative h-0 left-0 top-0">
            <div class="w-[450px] absolute">
              <img src={path} />
              <span>{title}</span>
            </div>
          </div>

* */

export default ImageOverlap;
