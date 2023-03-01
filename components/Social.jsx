import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import Stack from '@mui/material/Stack';
const Social = () => {
  return (
    
     
      <Stack direction="row" spacing={2}>
      <span> <Link
  href="https://www.instagram.com/cod_nap"
  passHref
>
  <div className={styles.FooterLinky}>
    
      <img src="/insta.svg" height={30} width={30} />
      <span style={{ marginLeft: "10px" }}></span>
    
  </div>

</Link></span>
<span>
  <Link
    href="https://www.youtube.com/@codnap"
    passHref
  >
    <div className={styles.FooterLinky}>
      
        <img src="/youtube.svg" height={50} width={50} />
        <span style={{ marginLeft: "0px" }}></span>
      
    </div>
  </Link>
</span>
<span>  <Link
  href="https://www.facebook.com/codnap"
  passHref
>
  <div className={styles.FooterLinky}>
    
      <img src="/fb.svg" height={26} width={26} />
      <span style={{ marginLeft: "10px" }}></span>
    
  </div>
</Link></span>
<span> <Link href="https://twitter.com/cod_nap" passHref>
  <div className={styles.FooterLinkt}>
    
      <img src="/twitter.svg" height={26} width={26} />
      <span style={{ marginLeft: "10px" }}></span>
    
  </div>
</Link></span>
<span>  <Link href="https://pinterest.com/cod_nap/" passHref>
  <div className={styles.FooterLinkl}>
    
      <img src="/pint.svg" height={26} width={26} />
      <span style={{ marginLeft: "10px" }}></span>
    
  </div>
</Link></span>
<span>  <Link href="https://www.snapchat.com/cod_nap/" passHref>
  <div className={styles.FooterLinkl}>
    
      <img src="/snap.svg" height={26} width={26} />
      <span style={{ marginLeft: "10px" }}></span>
    
  </div>
</Link></span>
<span>  <Link href="https://www.linkedin.com/in/codnap/" passHref>
  <div className={styles.FooterLinkl}>
    
      <img src="/linkedin.svg" height={26} width={26} />
      <span style={{ marginLeft: "10px" }}></span>
    
  </div>
</Link></span>
<span>
  <Link href="https://www.github.com/codnap/" passHref>
    <div className={styles.FooterLink}>
      
        <img src="/githubblack.svg" height={26} width={26} />
        <span style={{ marginLeft: "10px" }}></span>
      
    </div>
  </Link></span>






</Stack>



      );
};
      export default Social;
