//import React, { Component } from "react";
//import Link from "next/link";

// export default class Index extends Component {
//   static async getInitialProps() {
//     console.log("Get Initial Props");
//     return {};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Index Page</h1>
//         <Link href="/about">
//           <a>About</a>
//         </Link>
//         <br></br>
//         <Link href="/contact">
//           <a>Contact</a>
//         </Link>
//       </div>
//     );
//   }
// }

import Link from "next/link";
import axios from "axios";

const Index = ({ posts }) => (
  <div>
    <h1>Index Page</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
    <br></br>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
              <a> {post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { posts: data };
};

export default Index;
