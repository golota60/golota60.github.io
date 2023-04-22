import { Strategies, StrategiesType } from "fixelart";
import { fixImage } from "fixelart";
import { Show, createSignal } from "solid-js";
import ImageOverlap from "./ImageOverlap";

const defaultText = "Paste a file, drop a file or select with a button below";
const dragText = "Drop the file!";

const strategiesToUse = [
  Strategies.AVERAGE,
  Strategies.MAJORITY,
  Strategies.HARMONIC,
  Strategies.MIDRANGE,
  Strategies.QUADRATIC,
  Strategies.GEOMETRIC,
  Strategies.ALG05,
  Strategies.ALG10,
  Strategies.ALG20,
];
console.log(strategiesToUse);
interface ImageOptions {
  inputResolution: {
    height: number;
    width: number;
  };
  outputResolution: {
    height: number;
    width: number;
  };
  pixelSize: number;
  tolerance: number;
  selectedStrategies: Array<StrategiesType>;
  shrinkOutput: boolean;
}

const FixelArtDemo = () => {
  const canvasElem = <canvas class="fixed invisible z-[-99]">asd</canvas>;
  const imgElem = <img width="450" src="" />;
  const [originalBase64Image, setOriginalBase64Image] = createSignal<string>();
  const [displayedText, setDisplayedText] = createSignal(
    "Paste a file, drop a file or select with a button below"
  );
  const [fixedImages, setFixedImages] = createSignal<
    {
      strategy: string | number;
      imageData: Array<number>;
      outWidth: number;
      outHeight: number;
    }[]
  >();
  const [isLoading, setLoading] = createSignal(false);
  const [imageOptions, setImageOptions] = createSignal<ImageOptions>({
    inputResolution: {
      height: 0,
      width: 0,
    },
    outputResolution: {
      height: 0,
      width: 0,
    },
    pixelSize: 8,
    tolerance: 1,
    selectedStrategies: strategiesToUse,
    shrinkOutput: false,
  });
  const [fixedBase64, setFixedBase64] =
    createSignal<Array<{ path: string; strategy: string }>>();

  const handleImage = (file: any) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result;
      (imgElem as any).onload = function () {
        setImageOptions((prevOptions) => ({
          ...prevOptions,
          inputResolution: {
            width: (imgElem as any).naturalWidth,
            height: (imgElem as any).naturalHeight,
          },
        }));
      };
      (imgElem as any).src = base64;

      setOriginalBase64Image(base64 as string);
    };
    reader.readAsDataURL(file);
  };

  // Detect paste event
  addEventListener("paste", (hopefullyPNG) => {
    const clipData =
      hopefullyPNG.clipboardData || (window as any).clipboardData;
    const file = clipData.files[0];
    handleImage(file);
  });

  addEventListener("drop", (e) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer!.files[0];
    handleImage(droppedFile);
  });
  // Prevent random behavior
  addEventListener("dragend", (e) => {
    e.preventDefault();
  });

  const fixImageFromBase64 = async (base64Img: string) => {
    // Fixelart expects an array of r,g,b,a due to 900 iq of its developer
    const ctx = (canvasElem as any).getContext("2d");
    const image = new Image();
    image.onload = function () {
      (canvasElem as any).width = image.width;
      (canvasElem as any).height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);
      const imageData = ctx.getImageData(0, 0, image.width, image.height);
      console.log(imageData);

      const fixedImagesLoc = imageOptions().selectedStrategies.map(
        (strategy) => {
          //TODO: make outpixwidth inputtable
          const fixedImage = fixImage(
            {
              height: image.height,
              width: image.width,
              // Copy the data
              data: [...imageData.data],
            },
            {
              outPixWidth: imageOptions().pixelSize,
              outPixHeight: imageOptions().pixelSize,
              strategy,
              shrinkOutput: imageOptions().shrinkOutput,
            }
          );
          return {
            strategy,
            imageData: fixedImage.data as number[],
            outWidth: fixedImage.width,
            outHeight: fixedImage.height,
          };
        }
      );
      setFixedImages(fixedImagesLoc);
      setLoading(false);
    };

    image.src = base64Img;
  };

  return (
    <>
      <Show when={!!canvasElem}>{canvasElem}</Show>
      {originalBase64Image() ? (
        <div>
          <div class="flex">
            <div class="flex flex-col justify-center items-center">
              {imgElem}
              <span>Original image</span>
            </div>
            <div class="ml-3">
              <h3>Options</h3>
              <p>
                <a
                  target="_blank"
                  href="https://www.github.com/golota60/fixelart"
                >
                  visit the github readme
                </a>{" "}
                to see what each property does
              </p>
              <p>
                Input image resolution: {imageOptions().inputResolution.width}x
                {imageOptions().inputResolution.height}
              </p>
              <p>
                Output pixel resolution:{" "}
                {Math.floor(
                  imageOptions().inputResolution.width /
                    imageOptions().pixelSize
                )}
                x
                {Math.floor(
                  imageOptions().inputResolution.height /
                    imageOptions().pixelSize
                )}
              </p>
              <div class="my-3">
                <label for="pixsize">Pixel size</label>
                <input
                  id="pixsize"
                  class="w-32"
                  type="number"
                  min="1"
                  value={imageOptions().pixelSize}
                  onchange={(e) =>
                    setImageOptions((prev) => ({
                      ...prev,
                      pixelSize: (e.target as any).value,
                    }))
                  }
                />
              </div>
              <div class="my-3">
                <label for="tolerance">Mode tolerance</label>
                <input
                  id="tolerance"
                  class="w-32"
                  type="number"
                  min="0"
                  value={imageOptions().tolerance}
                  onchange={(e) =>
                    setImageOptions((prev) => ({
                      ...prev,
                      tolerance: (e.target as any).value,
                    }))
                  }
                />
              </div>

              <div class="my-3">
                <label for="shrink">Shrink output?</label>
                <input
                  id="shrink"
                  type="checkbox"
                  checked={imageOptions().shrinkOutput}
                  onchange={() =>
                    setImageOptions((prev) => ({
                      ...prev,
                      shrinkOutput: !prev.shrinkOutput,
                    }))
                  }
                />
              </div>

              <div class="grid grid-cols-2">
                {Object.entries(Strategies).map(([key, strategy]) => {
                  const isChecked =
                    imageOptions().selectedStrategies.includes(strategy);
                  return (
                    <div>
                      <label for={key}>{key}</label>
                      <input
                        id={key}
                        checked={isChecked}
                        onchange={() => {
                          if (isChecked) {
                            setImageOptions((prev) => ({
                              ...prev,
                              selectedStrategies:
                                prev.selectedStrategies.filter(
                                  (e) => e !== strategy
                                ),
                            }));
                          } else {
                            setImageOptions((prev) => ({
                              ...prev,
                              selectedStrategies: [
                                ...prev.selectedStrategies,
                                strategy,
                              ],
                            }));
                          }
                        }}
                        type="checkbox"
                      />
                    </div>
                  );
                })}
              </div>
              <Show
                when={!isLoading()}
                fallback={
                  <span>
                    Loading...if your image is big it might take up to a minute
                  </span>
                }
              >
                <button
                  class="p-2"
                  onclick={async () => {
                    setLoading(true);
                    setFixedImages(undefined);
                    setFixedBase64(undefined);
                    await new Promise((r) =>
                      setTimeout(async () => {
                        await fixImageFromBase64(originalBase64Image()!);
                        console.log("after");
                        r(undefined);
                      }, 100)
                    );
                  }}
                >
                  Click to generate
                </button>
              </Show>
            </div>
          </div>
        </div>
      ) : (
        <div
          class="flex w-full flex-col border-slate-300 border-dashed border-4 rounded-md p-16"
          onDragEnter={() => setDisplayedText(dragText)}
          onDragLeave={() => setDisplayedText(defaultText)}
        >
          {displayedText()}
          <input
            onchange={(e) => {
              const file = (e.target as any).files[0];
              handleImage(file);
            }}
            type="file"
            accept="image/*"
          />
        </div>
      )}
      <Show when={!isLoading() && !!fixedImages()}>
        <Show when={!!fixedBase64()}>
          <div class="mt-2">
            Preview:
            <ImageOverlap
              images={[
                { path: originalBase64Image()!!, title: "Original" },
                ...fixedBase64()!.map((e) => {
                  return {
                    path: e.path,
                    title: e.strategy,
                  };
                }),
              ]}
            />
          </div>
        </Show>

        <div class="grid grid-cols-3 mt-2 gap-2 w-max">
          {fixedImages()?.map((elem) => {
            const locCanvas = (
              <canvas class="max-w-[450px] min-w-[100px] h-auto"></canvas>
            );
            const ctx = (locCanvas as any).getContext("2d");

            const image = new Image();
            (image as any).onload = function () {
              (locCanvas as any).width = elem.outWidth;
              (locCanvas as any).height = elem.outHeight;

              const imageData = ctx.createImageData(
                elem.outWidth,
                elem.outHeight
              );
              for (let i = 0; i < imageData.data.length; i++) {
                imageData.data[i] = elem.imageData[i];
              }

              ctx.putImageData(imageData, 0, 0);
              setFixedBase64((prev = []) => [
                ...prev,
                {
                  path: (locCanvas as any).toDataURL(),
                  strategy: String(elem.strategy),
                },
              ]);
            };

            (image as any).src = originalBase64Image()!;

            return (
              <div class="flex flex-col justify-center items-center">
                {locCanvas}
                <span>Fixelart strategy: {elem.strategy}</span>
              </div>
            );
          })}
        </div>
      </Show>
    </>
  );
};

export default FixelArtDemo;
