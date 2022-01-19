import styles from "../styles/Ask.module.css";
import SearchIcon from "@material-ui/icons/Search";
import Icode from "./Icode";
function Widgets() {
  return (
    <div className={styles.widgets}>
      <div className={styles.widgets__input}>
        <SearchIcon className={styles.widgets__searchIcon} />
        <input placeholder="Search" type="text" />
      </div>

      <div className={styles.widgets__widgetContainer}>
        <h2>you may also like</h2>

      
        <Icode/>
      </div>
    </div>
  );
}

export default Widgets;
