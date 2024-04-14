import Link from "next/link";
import { ModeToggle } from "../molecules/mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 sticky top-0 dark:bg-slate-950 bg-white z-10">
      <Link
        href="/"
        className="font-semibold text-2xl tracking-tight text-main dark:text-sub"
      >
        DigiKarya
      </Link>
      <div className="flex gap-5 items-center">
        <Link
          className="bg-main hover:bg-opacity-90 text-white px-4  py-2 rounded-full"
          href="/auth/sign-in"
        >
          Sign in
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
