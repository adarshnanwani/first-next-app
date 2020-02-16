import Link from "next/link";

const Navbar = () => {
  const styles = {
    display: "flex",
    background: "grey",
    alignItems: "center",
    justifyContent: "space-around"
  };
  return (
    <div style={styles}>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <br></br>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
};
export default Navbar;
