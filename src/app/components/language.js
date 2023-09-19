import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";

import IconButton from "@mui/material/IconButton";
export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <TranslateOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Language: English</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse 
      in={open}
       timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Afrikaans" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Azərbaycan" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Bahasa Indonesia" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Bahasa Malaysia" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Bosanski" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Català" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Čeština" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Dansk" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Deutsch" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Eesti" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="English (India)" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="English (UK)" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="English (US)" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Español (España)" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Español (Latinoamérica)" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Español (US)" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Euskara" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Filipino" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Français" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Français (Canada)" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Galego" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Hrvatski" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="IsiZulu" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Íslenska" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Italiano" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Kiswahili" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Latviešu valoda" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Lietuvių" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Magyar" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Nederlands" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Norsk" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="O‘zbek" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Polski" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Português" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Português (Brasil)" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Română" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Shqip" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Slovenčina" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Slovenščina" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Srpski" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Suomi" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Svenska" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Tiếng Việt" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Türkçe" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Беларуская" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Български" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Кыргызча" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Қазақ Тілі" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Македонски" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Монгол" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Русский" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Српски" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Українська" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Ελληνικά" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="Հայերեն" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="עברית" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="اردو" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="العربية" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="فارسی" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="नेपाली" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="मराठी" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="हिन्दी" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="অসমীয়া" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="বাংলা" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="ਪੰਜਾਬੀ" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="ગુજરાતી" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="ଓଡ଼ିଆ" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="தமிழ்" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="తెలుగు" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="ಕನ್ನಡ" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="മലയാളം" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="සිංහල" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="ภาษาไทย" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="ລາວ" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="ဗမာ" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="ქართული" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="አማርኛ" />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText primary="ខ្មែរ" />
          </ListItemButton>{" "}
        
        </List>
      </Collapse>
    </>
  );
}
