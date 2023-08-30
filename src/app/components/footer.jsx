import styles from "../styles/Footer.module.scss";
import Footernx from "./copyright";
import Social from "./social";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.Box}>
    <center><Social/></center>
      
<div className={styles.Container}>
        <div className={styles.Row}>
          <div className={styles.Column}>
            <div className={styles.Heading}>Company</div>
            <Link href="/about" passHref legacyBehavior>
              <div className={styles.FooterLink} href="#">
                About Us
              </div>
            </Link>
            <Link href="/news" passHref legacyBehavior>
              <div className={styles.FooterLink} href="#">
                Blog
              </div>
            </Link>
            <Link href="/community" passHref legacyBehavior>
              <div className={styles.FooterLink} href="#">
                Careers
              </div>
            </Link>
            <Link href="/community" passHref legacyBehavior>
              <div className={styles.FooterLink} href="#">
                Advertise with us
              </div>
            </Link>
          </div>
          <div className={styles.Column}>
            <div className={styles.Heading}>Community</div>
            <Link href="/community" passHref legacyBehavior>
              <div className={styles.FooterLink} href="#">
                Developers
              </div>
            </Link>
            <Link href="/community" passHref legacyBehavior>
              <div className={styles.FooterLink} href="#">
                Freelancer
              </div>
            </Link>
          </div>
          <div className={styles.Column}>
            <div className={styles.Heading}>Help</div>
            <Link href="/community" passHref legacyBehavior>
              <div className={styles.FooterLink} href="#">
                Sign Up
              </div>
            </Link>
            <Link href="/help" passHref legacyBehavior>
              <div className={styles.FooterLink} href="#">
                Help Center
              </div>
            </Link>
            <Link href="/help" passHref legacyBehavior>
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
