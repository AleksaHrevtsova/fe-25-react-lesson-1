async function getFetch(q, p, pP = 12) {
  // let key = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
  // let key = `563492ad6f917000010000013bbd01457a39431887d74f69015c0d48`;
  let key = `563492ad6f917000010000012eb7a26bec714b6cbbd6f346c10047af`;
  const baseUrl = `https://api.pexels.com/v1`;

  // прописываем параметры запроса, согласно доков API
  // ДОБАВЛЯЕМ ПАРАМЕТР ДЛЯ СТРАНИЦ
  let params = `/search?query=${q}&per_page=${pP}&page=${p}`;

  // сливаем встроку запроса перед отправкой
  let url = baseUrl + params;

  // создаем объект опций для запроса, по докам API, для передачи ключа
  let options = {
    method: "GET",
    headers: {
      Authorization: key,
    },
  };

  // собственно запрос и обработка ответа на него
  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.photos;
  return data;
}

export default { getFetch };
