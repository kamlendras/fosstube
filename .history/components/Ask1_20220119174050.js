import React, { forwardRef } from "react";
import Avatar from "@mui/material/Avatar";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Link from "@mui/material/Link";
import styles from "../styles/Ask.module.css";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const preventDefault = (event) => event.preventDefault();
const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar, sendTweet }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />}
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
         
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
              className="t__t"
            >
              Answer
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
MyComponent.displayName = 'MyComponent';
export default Post;