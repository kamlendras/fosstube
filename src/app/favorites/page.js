import Copyright2 from "../../components/copyright2";
import styles from "../../styles/Bookmarks.module.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Typography from '@mui/material/Typography';
function favorites() {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <div className={styles.CTA}></div>
          <span className={styles.bookmark}>
            {/* <img src="/bookmark.svg" height={312} width={312} alt="heart"></img> */}
            <FavoriteBorderOutlinedIcon sx={{ color: 'text.primary', fontSize: 312, fontWeight: 'medium' }} />
          </span>

          {/* <p className={styles.text}> */}
          <Typography variant="h6" gutterBottom>
          Your favorites will appear here.
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

export default favorites;