import Toolbar from "@mui/material/Toolbar";
import styles from "../styles/Favorites.module.css";
import Cardgrid from "../components/home/cardgrid";
import Chips from "../components/chips";
export const metadata = {
  title: "FossTube",
  description: "Open & Decentralized",
};
export default function C() {
  return (
    <div className="expn">
      <Toolbar />

      <Chips />
      <Cardgrid />
    </div>
  );
}
