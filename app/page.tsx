import Link from "next/link";
const Home = () => {
  return (
    <div>
      <nav>
        <Link href="/product">Product</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </div>
  );
};
export default Home;
