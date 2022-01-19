import styles from "../styles/Footer.module.scss";
import Footernx from "./Footernx";
import Link from "next/link";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className={styles.Box}>
      <div className={styles.Container}>
        <div className={styles.Row}>
          <div className={styles.Column}>
            <div className={styles.Heading}>Company</div>
            <div className={styles.FooterLink} href="#">
              About Us
            </div>
            <div className={styles.FooterLink} href="#">
              Blog
            </div>
            <div className={styles.FooterLink} href="#">
              Careers
            </div>
            <div className={styles.FooterLink} href="#">
              Advertise with us
            </div>
          </div>
          <div className={styles.Column}>
            <div className={styles.Heading}>Community</div>
            <div className={styles.FooterLink} href="#">
              Developers
            </div>
            <div className={styles.FooterLink} href="#">
              Freelancer
            </div>
          </div>
          <div className={styles.Column}>
            <div className={styles.Heading}>Help</div>
            <Link href="/Signup" >
              Signup
            </Link>
            <Link href="/" className="td">
              Help Center
            </Link>
            <Link href="/" className="td">
              Safety Centre
            </Link>
          </div>
          <div className={styles.Column}>
            <div className={styles.Heading}>Follow Us</div>
            <div
              className={styles.FooterLink}
              href="https://www.youtube.com/channel/UCpE-bSIESqYtIEkBiZC-7tA"
            >
              <a>
				  < YouTubeIcon/>
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </a>
            </div>
            <div
              className={styles.FooterLink}
              href="https://twitter.com/NapArrow"
            >
              <a>
				  <TwitterIcon/>
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <Footernx />
      </div>
    </div>
  );
};
export default Footer;
