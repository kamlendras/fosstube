import Copyright from "../components/copyright";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Typography from '@mui/material/Typography';

export const metadata = {
  title: "Liked Videos - YouTube",
};
function LikedVideos() {
  return (
    <>
      <div className="container">
        <div className="content">
          <span >
            <ThumbUpOutlinedIcon sx={{ color: 'text.primary', fontSize: 312, fontWeight: 'medium' }} />
          </span>

          <Typography variant="h6" gutterBottom>
          Your liked videos will appear here.
      </Typography>

          <span className="copyright">
            <Copyright />
          </span>
        </div>
      </div>
    </>
  );
}

export default LikedVideos;