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
		<Row>
		<Column>
			<Heading>Company</Heading>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Blog</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
			<FooterLink href="#">Advertise with us</FooterLink>
		</Column>
		<Column>
			<Heading>Community</Heading>
			<FooterLink href="#">Developers</FooterLink>
			<FooterLink href="#">Freelancer</FooterLink>
			
			
		</Column>
		<Column>
			<Heading>Help</Heading>
			<Link href="/Signup" className="td"   >Signup</Link>
			<Link href="/"className="td">        Help Center</Link>
			<Link href="/"className="td">        Safety Centre</Link>
		</Column>
		<Column>
			<Heading>Follow Us</Heading>
			<FooterLink href="https://www.youtube.com/channel/UCpE-bSIESqYtIEkBiZC-7tA">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
            <FooterLink href="https://twitter.com/NapArrow">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
            
            
            
            
 
			
			
		</Column>
		
		</Row>
		<Footernx />
	</Container>

	
	</Box>
);
};
export default Footer;