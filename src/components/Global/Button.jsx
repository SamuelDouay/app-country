import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
  type,
  value,
  chemin,
  placeholder,
  filterSearchValue,
  darkModeValue,
}) => {
  const navigate = useNavigate();
  const [path, setPath] = useState();
  const [themeMode, seThemeMode] = useState('');

  useEffect(() => {
    navigate(path);
  }, [path, navigate]);

  const navigation = (event) => {
    setPath(chemin);
    darkMode(event.target.value);
  };

  function handleChangeSearch(event) {
    filterSearchValue(event.target.value);
  }

  function darkMode(mode) {
    if (mode === "Light Mode") {
      seThemeMode("Dark Mode");
      darkModeValue(mode);
    }

    if (mode === "Dark Mode") {
      seThemeMode("Light Mode");
      darkModeValue(mode);
    }
  }

  function setValue(value) {
    if (themeMode === '') {
      return value;
    }
    return themeMode;
  }

  return (
    <input
      type={type}
      value={setValue(value)}
      placeholder={placeholder}
      onClick={navigation}
      onChange={handleChangeSearch}
    />
  );
};

export default Button;
