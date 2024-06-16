// "use client";
import Qa from "../_components/accordion";
import Footer from "../_components/footer";
import Images from "../_components/about/images";
import Appbar from "../_components/about/appbar";
import Toolbar from "@mui/material/Toolbar";
import Text from "../_components/about/text";
import Cardgrid from "../_components/about/cardgrid";
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
