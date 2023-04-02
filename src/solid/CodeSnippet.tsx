import { javascript } from "@codemirror/lang-javascript";
import { rust } from "@codemirror/lang-rust";
import { Compartment, EditorState } from "@codemirror/state";
import { EditorView, minimalSetup } from "codemirror";
import { createSignal, onMount } from "solid-js";
import { ayuLight } from "thememirror";
import Spoiler from "./Spoiler";

interface Props {
  title: string;
  code: string;
  lang: "rust" | "js";
}

const CodeSnippet = (props: Props) => {
  const [editor, setEditor] = createSignal<EditorView>();

  onMount(() => {
    let state = EditorState.create({
      extensions: [
        minimalSetup,
        props.lang === "js" ? javascript() : rust(),
        new Compartment().of(EditorState.readOnly.of(true)),
        ayuLight,
      ],
      doc: props.code,
    });

    setEditor(
      new EditorView({
        state,
      })
    );
  });

  return (
    <>
      <Spoiler title={props.title}>
        {!!editor() ? (
          editor()!.dom
        ) : (
          <div>
            <code class="whitespace-pre-line block">{props.code}</code>
          </div>
        )}
      </Spoiler>
    </>
  );
};

export default CodeSnippet;
