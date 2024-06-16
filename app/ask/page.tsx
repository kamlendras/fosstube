
import Sidebar from "../_components/sidebar";
import Row from "../_components/row";
import Widgets from "../_components/widgets";
import styles from "../_styles/Ask.module.css";
export const metadata = {
  title: "Ask - FossTube",
  description: "Open & Decentralized",
};
export default function Ask() {
  return (
    <div>
      
       <div className={styles.void}>
      <Sidebar />
      <Row />
      <Widgets />
    </div>
    </div>
  )
}