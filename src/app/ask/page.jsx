"use client"
import Sidebar from "../components/sidebar";
import Row from "../components/row";
import Widgets from "../components/widgets";
import styles from "../styles/Ask.module.css";
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