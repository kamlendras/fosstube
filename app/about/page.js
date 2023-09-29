// "use client";
import Qa from "../../components/accordion";
import Footer from "../../components/footer";
import Images from "../../components/about/images";
import Appbar from "../../components/about/appbar";
import Toolbar from "@mui/material/Toolbar";
import Text from "../../components/about/text";
import Cardgrid from "../../components/about/cardgrid";
export const metadata = {
  title: "About FossTube - FossTube",
  description: "Open & Decentralized",
};
export default function Habout() {
  return (
    <div>
      <Appbar />
      <Toolbar />
      <Images />
      <Text />
      <Cardgrid />

      <Qa />

      <Footer />
    </div>
  );
}
