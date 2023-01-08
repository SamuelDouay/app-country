import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MoonLigth } from "../../assets/images/moon_white.svg";
import { ReactComponent as MoonDarck } from "../../assets/images/moon_black.svg";

const Button = ({
  type,
  value,
  chemin,
  placeholder,
  filterSearchValue,
  darkModeValue,
  isHeader,
}) => {
  const navigate = useNavigate();
  const [path, setPath] = useState();
  const [moon, setMoon] = useState(<MoonLigth />);
  const [valueMode, setValueMode] = useState(value);

  useEffect(() => {
    navigate(path);
  }, [path, navigate]);

  const navigation = () => {
    setPath(chemin);
  };

  const headerOnClick = () => {
    darkMode(valueMode);
  };


  function handleChangeSearch(event) {
    filterSearchValue(event.target.value);
  }

  function darkMode(mode) {
    if (mode === "Light Mode") {
      setMoon(<MoonDarck/>);
      darkModeValue(mode);
      setValueMode("Dark Mode");
    }

    if (mode === "Dark Mode") {
      setMoon(<MoonLigth/>);
      darkModeValue(mode);
      setValueMode("Light Mode");
    }
  }

  function render(isHeader) {
    if (!isHeader) {
      return (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onClick={navigation}
          onChange={handleChangeSearch}
        />
      );
    }
    return (
      <button type={type} onClick={headerOnClick}>
        {moon}{valueMode}
      </button>
    );
  }
  return render(isHeader);
};

export default Button;
