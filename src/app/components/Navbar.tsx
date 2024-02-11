import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

export default function Navbar() {
    return (
        <nav className="w-full flex relative items-center justify-between max-w-2xl mx-auto px-4 py-5">
            <Link href="/" className="font-bold text-3xl font-poppins">
                Kazim<span className="text-primary">Blog</span>
            </Link>

            <ModeToggle />
        </nav>
    )
}