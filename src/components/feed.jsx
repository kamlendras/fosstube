import React, { useState, useEffect } from "react";
import Chatbox from "./chatbox";
import Post from "./ask1";
import db from "./firebase";
import FlipMove from "react-flip-move";
import styles from "../styles/Ask.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
function Feed() {
  const [ask, setask] = useState([]);

  useEffect(() => {
    db.collection("ask").onSnapshot((snapshot) =>
      setask(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const { data: session, status } = useSession();
  return (
    <div className={styles.feed}>
    

      <FlipMove>
        {ask.map((ask) => (
          <Post
            key={ask.text}
            displayName={ask.displayName}
            // username={post.username}
            // verified={post.verified}
            text={ask.text}
            avatar={ask.avatar}
            image={ask.image}
          />
        ))}
         
         
      </FlipMove>
    </div>
  );
}

export default Feed;
