import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
function Copyright(props) {
	return (
	  <Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
	   <Link color="inherit" href="https://arrownap.com/">
		  arrownap
		</Link   >{' '}
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
                <NavLink to="/Signup" className="td"   >Signup</NavLink>
                <NavLink to="/"className="td">        Help Center</NavLink>
                <NavLink to="/"className="td">        Safety Centre</NavLink>
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
    export default Footernx;