import clsx from "clsx";
import { Component, createSignal, JSX, onMount } from "solid-js";

interface Props {
  children: JSX.Element;
  title: string;
  defaultOpen?: boolean;
}

const Spoiler = (props: Props) => {
  const [open, setOpen] = createSignal(props.defaultOpen || false);
  const [isServer, setIsServer] = createSignal(true);

  // isServer solid variable doesn't seem to work too well
  onMount(() => setIsServer(false));

  return (
    <div>
      {isServer() ? (
        <details>
          <summary>{props.title}</summary>
          <p>{props.children}</p>
        </details>
      ) : (
        <>
          <div class="flex items-center">
            <div
              class={clsx(
                "w-0 h-0 border-solid transition-all ease-in",
                "border-t-transparent border-b-transparent border-t-8 border-b-8 border-l-[10px] border-r-0",
                open() && "origin-center rotate-90"
              )}
              onclick={() => {
                setOpen((prev) => !prev);
              }}
            ></div>
            <span class="ml-1.5">{props.title}</span>
          </div>
          <div class={open() ? "" : "h-0 invisible"}>{props.children}</div>
        </>
      )}
    </div>
  );
};

export default Spoiler;
