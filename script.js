function multiplyBy(array, multiplier) {
  console.log(
    "Oryginalna tablica " + " × mnożnik: " + array + " × " + multiplier
  ); // niemodyfikowana oryginalna tablica zgodnie z treścią zadania
  return array.map((element) => element * multiplier);
}

// Przykładowy input:
const newArray1 = multiplyBy([1, 2, 3], 2);
const newArray2 = multiplyBy([1, 1, 1, 1, 1], 10);

console.log("Wynik 1" + ": " + newArray1);
console.log("Wynik 2: " + newArray2);
