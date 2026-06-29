const first = "Nurudeen";
  const city = "Kumasi";

  // Old way — concatenation
  console.log("Hi " + first + " from " + city);

  // Better — template literal
  console.log(`Hi ${first} from ${city}`);

  console.log(first.length);          // 8
  console.log(first.toUpperCase());   // NURUDEEN
  console.log(city.includes("um"));   // true
  console.log("  spaced  ".trim());   // "spaced"
  console.log("a,b,c".split(","));    // ["a","b","c"]