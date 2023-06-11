function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("u got it"), 10e20);
  });
}
