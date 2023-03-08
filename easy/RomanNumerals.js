let legend = new Map();
legend.set("I", 1);
legend.set("V", 5);
legend.set("X", 10);
legend.set("L", 50);
legend.set("C", 100);
legend.set("D", 500);
legend.set("M", 1000);

function romanToInt(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (legend.get(s[i]) < legend.get(s[i + 1])) {
      sum += legend.get(s[i + 1]) - legend.get(s[i]);
      i++; //skip already checked two characters
    } else {
      sum += legend.get(s[i]);
    }
  }

  return sum;
}
console.log(romanToInt("XII"));
