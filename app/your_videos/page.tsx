import Copyright from "../components/copyright";
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import Typography from '@mui/material/Typography';

export const metadata = {
  title: "YourVideos - YouTube",
};
function YourVideos() {
  return (
    <>
      <div className="container">
        <div className="content">
          <span >
            <SmartDisplayOutlinedIcon sx={{ color: 'text.primary', fontSize: 312, fontWeight: 'medium' }} />
          </span>

          <Typography variant="h6" gutterBottom>
          Your videos will appear here.
      </Typography>

          <span className="copyright">
            <Copyright />
          </span>
        </div>
      </div>
    </>
  );
}

export default YourVideos;