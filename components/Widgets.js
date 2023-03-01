import styles from "../styles/Ask.module.css";
import SearchIcon from "@material-ui/icons/Search";
import CodeCardData from "./CodeCardData";
import Search from "./Search";
function Widgets() {
  return (
    <div className={styles.widgets}>
      <div class="mt-2 ml-10">
<Search />
</div>
      <div class="rounded-lg bg-white p-3 mt-5 ml-1" >
       <CodeCardData/>
      </div>
    </div>
  );
}

export default Widgets;
