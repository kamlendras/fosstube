import styles from "../_styles/Ask.module.css";
import SearchIcon from '@mui/icons-material/Search';
import Codecarddata from "./codecarddata";
// import Search from "./Search";
function Widgets() {
  return (
    <div className={styles.widgets}>
      {/* <div class="mt-2 ml-10"> */}
{/* <Search /> */}
{/* </div> */}
      {/* <div class="rounded-lg bg-white p-3 mt-5 ml-1" > */}
      <div>
       <Codecarddata/>
      </div>
    </div>
  );
}

export default Widgets;
