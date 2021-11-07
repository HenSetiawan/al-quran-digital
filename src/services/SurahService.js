exports.getAllSurah = async () => {
  try {
    const allSurah = await fetch(`https://api.quran.sutanlab.id/surah`);
    const result = await allSurah.json();
    return result;
  } catch (error) {
    return error;
  }
};

exports.getSurahByNumber = async (number) => {
  try {
    const surah = await fetch(`https://api.quran.sutanlab.id/surah/${number}`);
    const result = await surah.json();
    return result;
  } catch (error) {
    return error;
  }
};
