import { createSignal, onMount, Show } from "solid-js";
import { calcJsBruteUnoptimized, calcJsPrimeSieve } from "../utils/primes";
import { primes_naive_slow, primes_sieve } from "../wasm/wasm_visual";
import BarChart from "./BarChart";

const labels = [
  "JS bruteforce",
  "Rust bruteforce",
  "JS sieve optimized",
  "Rust sieve optimized",
];

interface Props {
  bruteUpperBound: number;
  sieveUpperBound: number;
  bruteTimes: number;
  sieveTimes: number;
}

const BigPrimesOnce = (props: Props) => {
  const [unoptimizedBruteRust, setUnoptimizedBruteRust] = createSignal<
    number | undefined
  >();
  const [unoptimizedBruteJs, setUnoptimizedBruteJs] = createSignal<
    number | undefined
  >();
  const [sieveRustTime, setSieveRustTime] = createSignal<number | undefined>();
  const [sieveJsTime, setSieveJsTime] = createSignal<number | undefined>();
  const [isMounted, setMounted] = createSignal<boolean>(false);

  // const bruteUpperBound = 20000;
  // const sieveUpperBound = 10000000;

  // Dummy assign to a variable so it's not tree-shaken out of build
  const calculateUnoptimizedBruteJs = () => {
    const before = performance.now();

    for (let i = 0; i < props.bruteTimes; i++) {
      const x = calcJsBruteUnoptimized(props.bruteUpperBound);
    }
    const after = performance.now();
    // x;

    setUnoptimizedBruteJs(after - before);
  };
  const calculateUnoptimizedBruteRust = () => {
    const before = performance.now();

    for (let i = 0; i < props.bruteTimes; i++) {
      const x = primes_naive_slow(props.bruteUpperBound);
    }
    const after = performance.now();

    setUnoptimizedBruteRust(after - before);
  };
  const calculateSieveJs = () => {
    const before = performance.now();
    for (let i = 0; i < props.sieveTimes; i++) {
      const x = calcJsPrimeSieve(props.sieveUpperBound);
    }
    const after = performance.now();

    setSieveJsTime(after - before);
  };
  const calculateSieveRust = () => {
    const before = performance.now();
    for (let i = 0; i < props.sieveTimes; i++) {
      const x = primes_sieve(props.sieveUpperBound);
    }
    const after = performance.now();

    setSieveRustTime(after - before);
  };

  const calcAllAlgs = () => {
    // for consistency, put calculations at the end of event loop + 500 ms of delay
    setTimeout(() => {
      calculateUnoptimizedBruteJs();
      calculateUnoptimizedBruteRust();
      calculateSieveJs();
      calculateSieveRust();
    }, 1000);
  };

  onMount(() => {
    calcAllAlgs();
    setMounted(true);
  });

  return (
    <div>
      <div>
        <button onclick={calculateUnoptimizedBruteJs}>Recalculate</button>
        Time for unoptimized brute JS: {unoptimizedBruteJs()} ms
      </div>
      <div>
        <button onclick={calculateUnoptimizedBruteRust}>Recalculate</button>
        Time for unoptimized brute rust: {unoptimizedBruteRust()} ms
      </div>
      <div>
        <button onclick={calculateSieveJs}>Recalculate</button>
        Time for optimized sieve JS: {sieveJsTime()} ms
      </div>
      <div>
        <button onclick={calculateSieveRust}>Recalculate</button>
        Time for optimized sieve rust: {sieveRustTime()} ms
      </div>
      <div>
        <button onclick={calcAllAlgs}>Recalculate everything</button>
      </div>
      {isMounted() ? (
        <BarChart
          dataValues={[
            unoptimizedBruteJs()!,
            unoptimizedBruteRust()!,
            sieveJsTime()!,
            sieveRustTime()!,
          ]}
          labels={labels}
        />
      ) : (
        "Loading chart..."
      )}
    </div>
  );
};

export default BigPrimesOnce;
