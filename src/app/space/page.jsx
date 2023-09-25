
import Head from "next/head";

import Copyright2 from "../../components/copyright2";
import React from "react";
import Checkout from "../../components/space/Checkout";
const style = {
    height: 400,
  };
function favorites() {
  return (
    <div className="leftspace">
      <Head>
        <title>Favorites</title>
        <meta
          name="description"
          content="codnap|codnap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
   
<Checkout/>
    
    </div>
  );
}

export default favorites;