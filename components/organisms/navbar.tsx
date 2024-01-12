import { ModeToggle } from "../molecules/mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">DigiKarya</span>
      </div>
      <div className="block">{/* <ModeToggle /> */}</div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"></div>
    </nav>
  );
}
