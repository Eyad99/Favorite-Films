import React from "react";
import i18next from "i18next";


const languageMap = {
    ar: { label: "العربية", lang: "ar", dir: "rtl", active: false },
    en: { label: "English", lang: "en", dir: "ltr", active: true }

  };
  const LanguageSelect = () => {
    const selected = localStorage.getItem("i18nextLng") || "en"; 
 
    const [menuAnchor, setMenuAnchor] = React.useState(null);
    React.useEffect(() => {
      document.body.dir = languageMap[selected].dir;
      document.documentElement.lang = languageMap[selected].lang;

    }, [menuAnchor, selected]);
    
return(
        <ul className="navbar-nav">
        {Object.keys(languageMap)?.map(item =>(
                <li className="nav-item mr-3" key={item} onClick={()=>{
                    i18next.changeLanguage(item);
                    setMenuAnchor(null);
                }}>
                    {languageMap[item].label}
                </li>
        ))
        }
        </ul>

)
  }
  export default LanguageSelect