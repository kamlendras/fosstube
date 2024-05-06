import Toolbar from "@mui/material/Toolbar";
import Cardgrid from "./_components/home/cardgrid";
import Chips from "./_components/chips";
export const metadata = {
  title: "FossTube",
  description: "Open & Decentralized",
};
export default function C() {
  return (
    <>
      <Toolbar />
      <Toolbar />
      <Chips />
      <Cardgrid />

    </>
  );
}
