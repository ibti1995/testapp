import React, { useState } from "react";
import data from "../Data/TF1-2021-06-29.json";
export default function FirstPage() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [post, setPost] = useState(0);
  console.log(data[0]);
  const divStyle = {
   title:{
    width:'200px',
    padding:'20'
   },
   postsBox:{
       display:'flex',
       flexdirection:'row',
      }
  };
  return (
    <div>
      <div >
        {data[0].posts.map((post) => (
          <div style={divStyle.postsBox} >
            <div style={divStyle.title} > {post.post_text} </div>
            <div style={divStyle.title}> {post.post_comments.length} </div>
          </div>
        ))}
      </div>
    </div>
  );
}
