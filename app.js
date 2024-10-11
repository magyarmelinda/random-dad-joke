const button = document.querySelector("button");
const ul = document.querySelector("#jokes");

const getDadJokes = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO MORE JOKES FOR TODAY!";
  }
};

const addNewJoke = async () => {
  const joke = await getDadJokes();
  const newLi = document.createElement("li");
  newLi.innerText = joke;
  ul.append(newLi);
};

button.addEventListener("click", addNewJoke);
