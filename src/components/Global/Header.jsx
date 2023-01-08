import Button from "./Button";

const Header = ({ darkModeSvg }) => {
  function handleChangeColor(darkMode) {
    colorMode(darkMode);
    darkModeSvg(darkMode);
    localStorage.setItem("darkMode", darkMode);
  }

  function colorMode(darkMode) {
    if (darkMode === "Dark Mode") {
      document.documentElement.style.setProperty("--color-back", "#202C37");
      document.documentElement.style.setProperty("--color-element", "#2b3945");
      document.documentElement.style.setProperty("--color-text", "#ffffff");
      document.documentElement.style.setProperty(
        "--color-hover-button",
        "rgba(255, 255, 255, 0.1)"
      );
    } else if (darkMode === "Light Mode") {
      document.documentElement.style.setProperty("--color-back", "#fafafa");
      document.documentElement.style.setProperty("--color-element", "#ffffff");
      document.documentElement.style.setProperty("--color-text", "#111517");
      document.documentElement.style.setProperty(
        "--color-hover-button",
        "rgba(0, 0, 0, 0.1)"
      );
    }
  }

  return (
    <header>
      <div id="header">
        <h1>Where in the world ?</h1>
        <Button
          type="button"
          value="Light Mode"
          darkModeValue={handleChangeColor}
          isHeader={true}
        />
      </div>
    </header>
  );
};

export default Header;
