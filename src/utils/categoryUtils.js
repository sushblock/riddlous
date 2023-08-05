// src/utils/categoryUtils.js

const LOCAL_STORAGE_KEY = "jokes_category";

const loadCategories = async () => {
  const storedCategories = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedCategories) {
    return JSON.parse(storedCategories);
  } else {
    const wockaJokes = require("../assets/wocka.json");
    const stupidstuffJokes = require("../assets/stupidstuff.json");

    const wockaCategories = [...new Set(wockaJokes.map((joke) => joke.category))];
    const stupidstuffCategories = [...new Set(stupidstuffJokes.map((joke) => joke.category))];

    const categories = {
      wocka: wockaCategories,
      stupidstuff: stupidstuffCategories,
    };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(categories));
    return categories;
  }
};

export { loadCategories };
