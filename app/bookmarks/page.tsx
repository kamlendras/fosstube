import Copyright2 from "../_components/copyright2";
import styles from "../_styles/Bookmarks.module.css";
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import Typography from '@mui/material/Typography';
export const metadata = {
  title: "Bookmarks - FossTube",
  description: "Open & Decentralized",
};
function bookmarks() {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <div className={styles.CTA}></div>
          <span className={styles.bookmark}>
            {/* <img src="/bookmark.svg" height={312} width={312} alt="heart"></img> */}
            <BookmarksOutlinedIcon sx={{ color: 'text.primary', fontSize: 312, fontWeight: 'medium' }} />
          </span>

          {/* <p className={styles.text}> */}
          <Typography variant="h6" gutterBottom>
          Your Bookmarks will appear here.
      </Typography>
      {/* </p> */}

          <span className={styles.Footern}>
            <Copyright2 />
          </span>
        </div>
      </div>
    </>
  );
}

export default bookmarks;
