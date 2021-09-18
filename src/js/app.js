import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    // eslint-disable-next-line
    const saving = await GameSavingLoader.load();
  } catch (error) {
    throw new Error(error);
  }
})();
