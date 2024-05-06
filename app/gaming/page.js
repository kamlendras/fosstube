import Copyright2 from "../_components/copyright2";
import styles from "../_styles/Bookmarks.module.css";
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import Typography from '@mui/material/Typography';
export const metadata = {
  title: "Gaming - FossTube",
  description: "Open & Decentralized",
};
function gaming() {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <div className={styles.CTA}></div>
          <span className={styles.bookmark}>
            {/* <img src="/bookmark.svg" height={312} width={312} alt="heart"></img> */}
            <ConstructionOutlinedIcon sx={{ color: 'text.primary', fontSize: 312, fontWeight: 'medium' }} />
          </span>

          {/* <p className={styles.text}> */}
          <Typography variant="h6" gutterBottom>
          This Page is in Construction.
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

export default gaming;