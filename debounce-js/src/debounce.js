const input = document.getElementById("input");
let users = {
  data: [],
  isFetching: false,
};
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
const handler = (e) => {
    console.log(e.target.value);
    SearchDataFromAPI(e.target.value);
  };
const debounced = debounce(handler, 700);

input.addEventListener("input", debounced);



async function SearchDataFromAPI(search) {
  users.isFetching = true;
  await fetch(`https://dummyjson.com/products/search?q=${search}`)
    .then((res) => res.json())
    .then((data) => {
      users.data = data?.products;
      users.isFetching = false;
      console.log(data);
    });
}
