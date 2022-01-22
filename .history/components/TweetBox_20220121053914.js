import React, { useState } from "react";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import db from "./firebase";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import styles from "../styles/Ask.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
const Input = styled("input")({
  display: "none",
});

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("ask").add({
      displayName: "You",
      // username: "unknown",
      // verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className={styles.tweetBox}>
      <form>
        <div className={styles.tweetBox__input}>
          <Avatar  />
          <input
            className={styles.anything}
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="  Ask Anything?"
            type="text"
          />
        </div>
        <div className={styles.w__i}>
          <input
            className={styles.pick,styles.tweetBox__imageInput}
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            
            placeholder="Optional: Enter image URL"
            type="text"
          />
          <label className={styles.pick2} htmlFor="icon-button-file">
            <Input
              
              accept="image/*"
              id="icon-button-file"
              type="file"
              
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera style={{ color: "#2196f3" }} />
            </IconButton>
          </label>
        </div>

        <Button
          onClick={sendTweet}
          type="submit"
          className={styles.tweetBox__tweetButton}
        >
          Ask
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
