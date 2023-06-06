import React, {useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return(
        <div onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}>
            <span
                style={{"backgroundColor":"red", "padding": "10px", "cursor": "pointer"}}
            >{themeMode === "light" ? "Turn Off" : "Lights On"}</span>
        </div>
    )
}

export default ThemeToggler;
