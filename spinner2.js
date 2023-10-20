const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

let delay = 0;
for (const char of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
  delay += 200;
};
