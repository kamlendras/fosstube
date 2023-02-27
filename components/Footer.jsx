import styles from "../styles/Footer.module.scss";
import Footernx from "./Footernx";
import Link from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from '@mui/material/Stack';
const Footer = () => {
  return (
    <div className={styles.Box}>
     
      <Stack direction="row" spacing={2}>

<span>  <Link
  href="https://www.facebook.com/codnap"
  passHref
>
  <div className={styles.FooterLinky}>
    <a>
      <img src="/fb.svg" height={26} width={26} />
      <span style={{ marginLeft: "10px" }}></span>
    </a>
  </div>
</Link></span>
<span> <Link
  href="https://www.instagram.com/cod_nap"
  passHref
>
  <div className={styles.FooterLinky}>
    <a>
      <img src="/insta.svg" height={30} width={30} />
      <span style={{ marginLeft: "10px" }}></span>
    </a>
  </div>

</Link></span>

<span>
  <Link
    href="https://www.youtube.com/@codnap"
    passHref
  >
    <div className={styles.FooterLinky}>
      <a>
        <img src="/youtube.svg" height={50} width={50} />
        <span style={{ marginLeft: "0px" }}></span>
      </a>
    </div>
  </Link>
</span>
<span>
  <Link href="https://www.github.com/codnap/" passHref>
    <div className={styles.FooterLink}>
      <a>
        <img src="/githubblack.svg" height={26} width={26} />
        <span style={{ marginLeft: "10px" }}></span>
      </a>
    </div>
  </Link></span>


<span> <Link href="https://twitter.com/cod_nap" passHref>
  <div className={styles.FooterLinkt}>
    <a>
      <img src="/twitter.svg" height={26} width={26} />
      <span style={{ marginLeft: "10px" }}></span>
    </a>
  </div>
</Link></span>


<span>  <Link href="https://www.linkedin.com/in/codnap/" passHref>
  <div className={styles.FooterLinkl}>
    <a>
      <img src="/linkedin.svg" height={26} width={26} />
      <span style={{ marginLeft: "10px" }}></span>
    </a>
  </div>
</Link></span>
</Stack>
<div className={styles.Container}>
        <div className={styles.Row}>
          <div className={styles.Column}>
            <div className={styles.Heading}>Company</div>
            <Link href="/about" passHref>
              <div className={styles.FooterLink} href="#">
                About Us
              </div>
            </Link>
            <Link href="/news" passHref>
              <div className={styles.FooterLink} href="#">
                Blog
              </div>
            </Link>
            <Link href="/community" passHref>
              <div className={styles.FooterLink} href="#">
                Careers
              </div>
            </Link>
            <Link href="/community" passHref>
              <div className={styles.FooterLink} href="#">
                Advertise with us
              </div>
            </Link>
          </div>
          <div className={styles.Column}>
            <div className={styles.Heading}>Community</div>
            <Link href="/community" passHref>
              <div className={styles.FooterLink} href="#">
                Developers
              </div>
            </Link>
            <Link href="/community" passHref>
              <div className={styles.FooterLink} href="#">
                Freelancer
              </div>
            </Link>
          </div>
          <div className={styles.Column}>
            <div className={styles.Heading}>Help</div>
            <Link href="/community" passHref>
              <div className={styles.FooterLink} href="#">
                Sign Up
              </div>
            </Link>
            <Link href="/help" passHref>
              <div className={styles.FooterLink} href="#">
                Help Center
              </div>
            </Link>
            <Link href="/help" passHref>
              <div className={styles.FooterLink} href="#">
                Safety Centre
              </div>
            </Link>
          </div>
         

        </div><Footernx />
      </div >
</div>
      );
};
      export default Footer;
