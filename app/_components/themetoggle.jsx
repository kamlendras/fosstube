import {useTheme} from "next-themes";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useState, useEffect} from "react";

const ThemeToggle = () => {

  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() =>{
    setMounted(true);
  },[])

   const renderThemeChanger= () => {
      if(!mounted) return null;

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          <LightModeIcon  role="button" onClick={() => setTheme('light')} />
          )
        }
  

      else {
        return (
          <DarkModeIcon  role="button" onClick={() => setTheme('dark')} 
       />
        )
      }
   };

  return (
    
    <header>
      
        <div>
        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default ThemeToggle;