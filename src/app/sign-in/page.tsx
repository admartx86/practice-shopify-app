import Link from "next/link";

export default function SignIn() {
    return(
        <header>
            <h1>Sign In / Create Account</h1>
            <Link href="./">Home</Link>
            <Link href="./shop">Shop</Link>
            <Link href="./favorites">Favorites</Link>
            <Link href="./cart">Cart</Link>
            <Link href="./sign-in">Sign In / Create Account</Link>
        </header>
    );
};