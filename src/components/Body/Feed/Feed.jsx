import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../../../assets/feed.css";
import CreateIcon from "./CreateIcon";
import Post from "./Post";
import { db } from "../../../firebase";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  setDoc,
  doc,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";


const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [nextId, setNextId] = useState("0");
  const user = useSelector(selectUser)

  const addPost = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      return;
    }
    const docData = {
      name: user.displayName,
      job: user.job,
      message: input,
      avatarUrl: user.photoUrl,
      postDate: firebase.firestore.FieldValue.serverTimestamp(),
      type: "post",
    };

    setDoc(doc(db, "posts", nextId.toString()), docData);
    setNextId(parseInt(nextId) + 1);
    setInput("");

};



  const makeQuery = () => {
      
      const q = query(
        collection(db, "posts"),
        where("type", "==", "post"),
        orderBy("postDate", "desc")
      );
      return q
  }
 
async function querySnapshot() {
  const q = makeQuery();
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.docs[0].data().message);
  setNextId(querySnapshot.docs.length);
  setPosts(
    querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))
  );
}

useEffect(() => {
    querySnapshot();

  }, [nextId]);
// to make sure page renders scrolled at top ( solvs a problem after component render)
useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="feed">
      {/* create a post */}
      <div className="create-post">
        <div className="create-a-post">
          <Avatar
            className="avatar-sm"
            src={user.photoUrl}
          />
          <form onSubmit={addPost} action="submit">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button type="submit">Post</button>
          </form>
        </div>
        <div className="create-post-icons">
          {/* photo */}
          <CreateIcon
            color="#378FE9"
            Icon={PhotoSizeSelectActualIcon}
            title="Photo"
          />
          {/* video */}
          <CreateIcon color="#5F9B41" Icon={SmartDisplayIcon} title="Video" />
          {/* event */}
          <CreateIcon color="#C58423" Icon={EventIcon} title="Event" />
          {/* write article */}
          <CreateIcon
            color="#E16745"
            Icon={ListAltIcon}
            title="Write article"
          />
        </div>
      </div>
      {/* rest of the posts */}
      <div className="feed-posts">
        {console.log("POSTS NOW: ",posts)}

        {posts.length > 0 &&
          // best practise to always not mutate the original data
          [...posts].map(({ id, data: { message, name, job, avatarUrl } }) => (
            <Post
              key={id}
              name={name}
              job={job}
              message={message}
              avatarUrl={avatarUrl}
            />
          ))}

      </div>
    </div>
  );
};

export default Feed;
