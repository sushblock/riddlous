// src/utils/categoryUtils.js

const LOCAL_STORAGE_KEY = "jokes_category";

const loadCategories = async () => {
  const storedCategories = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedCategories) {
    return JSON.parse(storedCategories);
  } else {
    // Load the categories from the split files (wocka_jokes_01.json, wocka_jokes_02.json, etc.)
    const wockaCategoryPromises = [];
    let wockaPageIndex = 1;
    while (true) {
      try {
        const paddedIndex = wockaPageIndex.toString().padStart(2, "0");
        const module = await import(`../assets/wocka/wocka_jokes_${paddedIndex}.json`);
        wockaCategoryPromises.push(module.default);
        wockaPageIndex++;
      } catch (error) {
        // No more split files to load
        break;
      }
    }

    const wockaJokes = (await Promise.all(wockaCategoryPromises)).flat();

    // Load the categories from the main bulky file (stupidstuff.json)
    const stupidstuffJokes = require("../assets/stupidstuff.json");
    const wockaCategories = [...new Set(wockaJokes.map((joke) => joke.category))];
    const stupidstuffCategories = [...new Set(stupidstuffJokes.map((joke) => joke.category))];

    // Load the categories from the split files (reddit_jokes_01.json, reddit_jokes_02.json, etc.)
    const redditCategoryPromises = [];
    let redditPageIndex = 1;
    while (true) {
      try {
        const paddedIndex = redditPageIndex.toString().padStart(2, "0");
        const module = await import(`../assets/reddit_jokes/reddit_jokes_${paddedIndex}.json`);
        redditCategoryPromises.push(module.default);
        redditPageIndex++;
      } catch (error) {
        // No more split files to load
        break;
      }
    }

    const redditJokes = (await Promise.all(redditCategoryPromises)).flat();
    const redditCategories = [...new Set(redditJokes.map((joke) => joke.category))];

    const categories = {
      wocka: wockaCategories,
      stupidstuff: stupidstuffCategories,
      reddit: redditCategories,
    };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(categories));
    return categories;
  }
}; 

export { loadCategories };
