import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Home</h1>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/favorites">Favorites</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/sign-in">Sign In / Create Account</Link>
      </header>
    </div>
  );
};