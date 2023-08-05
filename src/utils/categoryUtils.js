const LOCAL_STORAGE_KEY = "jokes_category";

const loadCategories = async () => {
  const storedCategories = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedCategories) {
    return JSON.parse(storedCategories);
  } else {
    const wockaCategoryPromises = [];
    let wockaPageIndex = 1;
    while (true) {
      try {
        const paddedIndex = wockaPageIndex.toString().padStart(2, "0");
        const module = await import(`../assets/wocka/wocka_jokes_${paddedIndex}.json`);
        wockaCategoryPromises.push(module.default);
        wockaPageIndex++;
      } catch (error) {
        // No more split files to load for wocka
        break;
      }
    }

    const wockaJokes = (await Promise.all(wockaCategoryPromises)).flat();
    const wockaCategories = [...new Set(wockaJokes.map((joke) => joke.category))];

    const stupidstuffJokes = require("../assets/stupidstuff.json");
    const stupidstuffCategories = [...new Set(stupidstuffJokes.map((joke) => joke.category))];

    const redditCategoryPromises = [];
    let redditPageIndex = 1;
    while (true) {
      try {
        const paddedIndex = redditPageIndex.toString().padStart(2, "0");
        const module = await import(`../assets/reddit_jokes/reddit_jokes_${paddedIndex}.json`);
        redditCategoryPromises.push(module.default);
        redditPageIndex++;
      } catch (error) {
        // No more split files to load for reddit_jokes
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
