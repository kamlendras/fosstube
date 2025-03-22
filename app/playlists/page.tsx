import Copyright from "../components/copyright";
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import Typography from '@mui/material/Typography';

export const metadata = {
  title: "Playlists - YouTube",
};
function Playlists() {
  return (
    <>
      <div className="container">
        <div className="content">
          <span >
            <PlaylistPlayOutlinedIcon sx={{ color: 'text.primary', fontSize: 312, fontWeight: 'medium' }} />
          </span>

          <Typography variant="h6" gutterBottom>
          Your playlists will appear here.
      </Typography>

          <span className="copyright">
            <Copyright />
          </span>
        </div>
      </div>
    </>
  );
}

export default Playlists;