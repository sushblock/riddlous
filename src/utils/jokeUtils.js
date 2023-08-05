export const getNextWockaJokes = async (fileIndex, jokeIndex) => {
    const nextIndex = jokeIndex + 1;    
    try {
      
      return { nextIndex, fileIndex };
    } catch (error) {
      return { nextIndex:0, fileIndex: fileIndex + 1 };
    }
  };
  
  export const getNextRedditJokes = async (fileIndex, jokeIndex) => {
    const nextIndex = jokeIndex + 1;    
    try {
      
      return { nextIndex, fileIndex };
    } catch (error) {
      return { nextIndex:0, fileIndex: fileIndex + 1 };
    }
  };
  