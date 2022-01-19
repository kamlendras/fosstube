import     {Link as muiLink,}          from '@mui/material/Link';
import   Link       from 'next/link';
// import {Box,Container,Row,Column,FooterLink,Heading,} from "./FooterStyles";
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import styles from '../styles/Home.module.css'
function Copyright(props) {
	return (
	  <Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
	   <muiLink color="inherit" href="/">
		  arrownap
		</muiLink   >{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }

const Footer = () => {
return (
	<Box>
<Container>
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
			<Link href="/Signup" className={styles.td}   >Signup</Link>
			<Link href="/Help" className={styles.td}>        Help Center</Link>
			<Link href="/Safety" className={styles.td}>        Safety Centre</Link>
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
		<Copyright sx={{ mt: 5 }} />
	</Container>

	
	</Box>
);
};
export default Footer;





 const Box = styled.div`
padding: 80px 60px;
background: white;

width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

 const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

 const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

 const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

 const FooterLink = styled.a`
color: grey;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: black;
	transition: 200ms ease-in;
}
`;

 const Heading = styled.p`
font-size: 24px;
color: grey;
margin-bottom: 40px;
font-weight: bold;
`;
