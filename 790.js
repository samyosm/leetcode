/**
 * @param {number} n
 * @return {number}
 */

const MOD = 1000000007;

const tilings = {};
const numTilings = (n) => {
    if (tilings[n]) return tilings[n];
    if (n === 0 || n === 1 || n === 2) {
        return n;
    }

    if (n === 3) {
        return 5;
    }

    tilings[n] = (numTilings(n - 1) * 2 % MOD + numTilings(n - 3) % MOD) % MOD;
    return tilings[n];

};

console.log(numTilings(1), 1);
console.log(numTilings(3), 5);
console.log(numTilings(4), 11);
console.log(numTilings(6), 53);
console.log(numTilings(8), 258);
console.log(numTilings(10), 1255);