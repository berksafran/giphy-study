class LocalStorage {
  getThemeFromLS = async () => {
    const initialTheme = JSON.parse(localStorage.getItem("GiphyRecreationApp"));

    if (initialTheme === (undefined || null)) {
      await this.setThemeToLS(true); // default initial theme is "light"
      return true;
    } else {
      return initialTheme.IsCurrentThemeLight;
    }
  };

  setThemeToLS = selectedTheme => {
    localStorage.setItem(
      "GiphyRecreationApp",
      JSON.stringify({ IsCurrentThemeLight: selectedTheme })
    );
  };
}

export default new LocalStorage();
