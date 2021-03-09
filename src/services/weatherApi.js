let apiKey = `b17a2dddb01d7481fea6373f92c2e546`;
let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
// let query = "Kyiv";

function getFetch(query) {
  let url = `${baseUrl}${query}&units=metric&appid=${apiKey}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => data);
}

export default { getFetch };
