const Post = ({ query }) => {
  console.log(query);
  return <h1>You clicked on Post #{query.id}</h1>;
};

Post.getInitialProps = async ({ query }) => {
  return { query };
};
export default Post;
