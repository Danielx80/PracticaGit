document.getElementById("indeterminate").indeterminate = true;

setInterval(
  () =>
    document.documentElement.style.setProperty(
      "--color",
      `#${Math.floor(Math.random() * 16777215).toString(16)}`
    ),
  1000
);
