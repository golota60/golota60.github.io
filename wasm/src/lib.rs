use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// This is for importing functions from JS into Rust - e.g. alert web browser api
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

}

#[wasm_bindgen]
pub fn return_string() -> String {
    "asdf".to_string()
}

#[wasm_bindgen]
pub fn primes_sieve(bound: usize) -> Vec<usize> {
    let mut primes: Vec<bool> = (0..bound + 1).map(|num| num == 2 || num & 1 != 0).collect();
    let mut num = 3usize;
    while num * num <= bound {
        let mut j = num * num;
        while j <= bound {
            primes[j] = false;
            j += num;
        }
        num += 2;
    }
    primes
        .into_iter()
        .enumerate()
        .skip(2)
        .filter_map(|(i, p)| if p { Some(i) } else { None })
        .collect::<Vec<usize>>()
}

#[wasm_bindgen]
pub fn primes_naive_slow(bound: usize) -> Vec<usize> {
    let mut primes_accumulator: Vec<usize> = Vec::new();
    for curr_num in 1..bound {
        let mut divisible_nums: Vec<bool> = Vec::new();
        for diviser in 1..curr_num {
            if curr_num % diviser == 0 {
                divisible_nums.push(true);
            }
        }
        if divisible_nums.len() == 1 {
            primes_accumulator.push(curr_num);
        }
    }
    primes_accumulator
}
