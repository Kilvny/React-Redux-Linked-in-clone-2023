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
} from "firebase/firestore";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {
  FieldValue,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  onSnapshot,
  getDocFromCache,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { doc } from "firebase/firestore";
import { deepPurple } from "@mui/material/colors";
import { onValue, ref } from "firebase/database";


const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [nextId, setNextId] = useState("0");
  const addPost = (e) => {
    e.preventDefault();

    if(input.trim() === '') {
        return 
    }
    const docData = {
      name: "mo",
      job: "zoo",
      message: input,
      avatarUrl: "https://",
      postDate: firebase.firestore.FieldValue.serverTimestamp(),
      type: "post",
    };

    setDoc(doc(db, "posts", nextId.toString()), docData);
    setNextId(parseInt(nextId) + 1);
    setInput("");
  };

  // const docRef = doc(db, "posts", "*");
  // // const docSnap =  async () => {
  // //     return await getDoc(docRef)

  // // };

  //     const doc = async () => {
  //         return await getDoc(docRef);

  //     }
  //     if (doc.exists()) {
  //         console.log("Document data:", doc.data());
  //       } else {
  //         // doc.data() will be undefined in this case
  //         console.log("No such document!");
  //       }
  // Document was found in the cache. If no cached document exists,
  // an error will be returned to the 'catch' block below.


  const makeQuery = () => {
      
      const q = query(
        collection(db, "posts"),
        where("type", "==", "post"),
        orderBy("postDate", "desc")
      );
      return q
  }
  // async function querySnapshot() {
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //     posts.push({id:nextId++, data:doc.data()})
  //     console.log(posts,'posts length: ',posts.length)

  //     // setPosts([
  //     //   ...posts,
  //     //   {
  //     //     id: doc.id,
  //     //     data: doc.data(),
  //     //   },
  //     // ]);
  //   });
  // }

  // const snap = getDoc(doc(db, "posts", `Amr Taha`))

  async function querySnapshot() {
    const q = makeQuery()
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs[0].data().message);
    setNextId(querySnapshot.docs.length)
    setPosts(
        querySnapshot.docs.map((doc) => ({
            id:doc.id,
            data:doc.data(),
                    }))
    
        )
        
        
    
    // forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   //   console.log(doc.id, " => ", doc.data());
    //   //   !posts.includes({id:nextId, data:doc.data()})?
    //   //   posts.push({id:nextId++, data:doc.data()}) :
    //   //   console.log(posts,'posts length: ',posts.length)

    //   let data = {
    //     id: doc.id,
    //     data: doc.data(),
    //   };
    //   if (data && !posts.includes(data.id)) {
    //     setPosts((current) => [...current, data]);
    //     console.log("psts now", posts);
    //   }
    // })
    
    ;
  }

  useEffect(() => {
    querySnapshot();
    // console.log(posts,'posts length: ',posts.length)
    // let db2 = collection(db,'posts').onSnapshot((snapshot)=>
    // setPosts(
    //     snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         data: doc.data()
    //     }))
    // ))

    // snap.then((snap) => {
    // if (snap.exists()) {
    //     //   console.log(snap.data());
    //       setPosts(snap.data())
    //       console.log(posts)
    //     } else {
    //       console.log("No such document");
    //     }
    //   });
  }, [nextId]);

  return (
    <div className="feed">
      {/* create a post */}
      <div className="create-post">
        <div className="create-a-post">
          <Avatar
            className="avatar-sm"
            src="https://i.ibb.co/FzSRNhL/Whats-App-Image-2022-09-06-at-6-14-15-PM-2-2.jpg"
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
