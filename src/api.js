const API = "https://opentdb.com/api.php?";

export const getQuestions = (isBoolean, amount, category, difficulty) => {
  let type = isBoolean ? "boolean" : "multiple";
  return fetch(
    `${API}amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
