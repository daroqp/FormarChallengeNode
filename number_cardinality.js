function number_cardinality(number) {
  if (number % 2 === 0) {
    return number % 10 === 0 ? "zero" : "even";
  } else {
    return number % 5 === 0 ? "five" : "odd";
  }
}

console.log(number_cardinality(99));
