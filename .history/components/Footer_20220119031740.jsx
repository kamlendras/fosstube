import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import styles from "../styles/Footer.module.scss";

import Footernx from "./Footernx"
import Link from 'next/link'
import Typography from '@mui/material/Typography';

const Footer = () => {
return (

	
	
	
	
	
	
	<div className={styles.Box}>

	<div className={styles.Container}>
		<div className={styles.Row}>
		<div className={styles.Column}>
			<div className={styles.Heading}>Company</div>
			<div className={styles.FooterLink} href="#">About Us</div>
			<div className={styles.FooterLink} href="#">Blog</div>
			<div className={styles.FooterLink} href="#">Careers</div>
			<div className={styles.FooterLink} href="#">Advertise with us</div>
		</div>
		<div className={stryles.Column}>
			<div className={styles.Heading}>Community</div>
			<div className={styles.FooterLink} href="#">Developers</div>
			<div className={styles.FooterLink} href="#">Freelancer</div>
			
			
		</div>
		<div className={styles.Column}>
			<div className={Heading}>Help</div>
			<Link href="/Signup" className="td"   >Signup</Link>
			<Link href="/"className="td">        Help Center</Link>
			<Link href="/"className="td">        Safety Centre</Link>
		</div>
		<div className={styles.Column}>
			<div className={styles.Heading}>Follow Us</div>
			<div className={styles.FooterLink} href="https://www.youtube.com/channel/UCpE-bSIESqYtIEkBiZC-7tA">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</div>
            <div className={styles.FooterLink} href="https://twitter.com/NapArrow">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</div>
            
            
            
            
 
			
			
		</Column>
		
		</Row>
		<Footernx />
	</Container>

	
	</Box>
);
};
export default Footer;