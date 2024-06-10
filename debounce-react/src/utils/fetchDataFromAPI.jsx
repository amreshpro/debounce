export async function fetchDataFromAPI(text) {
  try {
    return await fetch(`https://dummyjson.com/products/search?q=${text}`)
      .then((res) => res.json())
      .then((res) => res);
  } catch (error) {
    console.log(error);
    return error;
  }
}
