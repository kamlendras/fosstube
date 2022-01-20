import React, { forwardRef } from "react";

import Avatar from '@mui/material/Avatar';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Link from '@mui/material/Link';
import styles from "../styles/Ask.module.css";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const preventDefault = (event) => event.preventDefault();
const Ask1 = forwardRef(
  ({ displayName, username, verified, text, image, avatar, sendTweet }, ref) => {
    return (
      <div className={styles.post} ref={ref}>
        <div className={styles.post__avatar}>
          <Avatar src={avatar} />
        </div>
        <div className={styles.post__body}>
          <div className={styles.post__header}>
            <div className={styles.post__headerText}>
              <h3>
                {displayName}
                <span className={styles.post__headerSpecial}>
                  {verified && <VerifiedUserIcon className={styles.post__badge} />}
                  {username}
                </span>
              </h3>
            </div>
            <div className={styles.post__headerDescription}>
              <p>{text}</p>
            </div>
          </div>
          <Image layout="fill" src={image} alt="" />
          <div className={styles.post__footer}>
         
      <Link href="#" underline="always">
        {'see answers'}
      </Link>
      
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

            </Stack>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
    
            
            
            
            <Button
              onClick={sendTweet}
              type="submit"
              className={styles.t__t}
            >
              Answer
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
Ask1.displayName = "Ask1";
export default Ask1;