const fs = require("fs");
fs.appendFile("./text.txt", "Welcome to TEXT ", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});

fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.writeFile("./text.txt", "Well we Meet again Parry the platypus", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});

fs.rename("./text.txt", "./InatorInator.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});

fs.unlink("./InatorInator.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});
