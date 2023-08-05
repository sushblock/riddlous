// jokeUtils.js

export const getNextWockaJokes = async (index) => {
    const nextIndex = index + 1;
    try {
      const paddedIndex = nextIndex.toString().padStart(2, '0');
      const module = await import(`../assets/wocka/wocka_jokes_${paddedIndex}.json`);
      return module.default;
    } catch (error) {
      console.error("Error loading next Wocka jokes:", error);
      return [];
    }
  };
  
  export const getNextRedditJokes = async (index) => {
    const nextIndex = index + 1;
    try {
      const paddedIndex = nextIndex.toString().padStart(2, '0');
      const module = await import(`../assets/reddit_jokes/reddit_jokes_${paddedIndex}.json`);
      return module.default;
    } catch (error) {
      console.error("Error loading next Reddit jokes:", error);
      return [];
    }
  };
  