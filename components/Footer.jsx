import styles from "../styles/Footer.module.scss";
import Footernx from "./Footernx";
import Link from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <div className={styles.Box}>
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
          <div className={styles.Column}>
            <div className={styles.Heading}>Follow Us</div>
            <Link
              href="https://www.youtube.com/channel/UCpE-bSIESqYtIEkBiZC-7tA/featured"
              passHref
            >
              <div className={styles.FooterLinky}>
                <a>
                  <YouTubeIcon />
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </a>
              </div>
            </Link>
            <Link href="https://www.github.com/arrownap/" passHref>
              <div className={styles.FooterLink}>
                <a>
                  <GitHubIcon />
                  <span style={{ marginLeft: "10px" }}>Github</span>
                </a>
              </div>
            </Link>
            <Link href="https://twitter.com/NapArrow" passHref>
              <div className={styles.FooterLinkt}>
                <a>
                  <TwitterIcon />
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </a>
              </div>
            </Link>

        
            <Link href="https://www.linkedin.com/in/arrownap/" passHref>
              <div className={styles.FooterLinkl}>
                <a>
                  <LinkedInIcon/>
                  <span style={{ marginLeft: "10px" }}>LinkedIn</span>
                </a>
              </div>
            </Link>
          </div>
        </div>
        <Footernx />
      </div>
    </div>
  );
};
export default Footer;
