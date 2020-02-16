import { withRouter } from "next/router";

const Post = ({ router }) => {
  const { id } = router.query;
  return <h1>You clicked on Post #{id}</h1>;
};

// Post.getInitialProps = async ({ query }) => {
//   return { query };
// };
export default withRouter(Post);
