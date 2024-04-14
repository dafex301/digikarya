import Link from "next/link";
import { LoginForm } from "./form";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <main className="grid grid-cols-12 w-full h-full">
      <div className="col-span-6"></div>
      <div className="bg-white ms-64 py-12 px-10 col-span-6 rounded-xl flex flex-col gap-5 my-10 2xl:me-24">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-900 text-2xl font-semibold">Sign in</h1>
          <div>
            <p className="text-gray-900 text-sm">
              New user?
              <Link
                href="/auth/sign-up"
                className="ps-2 text-blue-800 hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
        <LoginForm />
        <div className="flex items-center gap-5">
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <p className="text-gray-300">Or</p>
          <div className="w-full bg-gray-200 h-[1px]"></div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <button className="bg-white w-12 h-12 border-gray-400 border rounded-full text-gray-800 p-2">
            <Image
              src="/icons/google.jpg"
              width={30}
              height={30}
              alt="Google"
            />
          </button>
          <button className="bg-white w-12 h-12 border-gray-400 border rounded-full text-gray-800 p-2 flex items-center justify-center">
            <Image src="/icons/apple.png" width={22} height={22} alt="Google" />
          </button>
          <button className="bg-white w-12 h-12 border-gray-400 border rounded-full text-gray-800 p-2">
            <Image
              src="/icons/x-icon.png"
              width={30}
              height={30}
              alt="Google"
            />
          </button>
        </div>
        <div className="h-full flex items-end">
          <Link
            href="/"
            className=" text-gray-500 text-xs flex items-center hover:text-gray-700"
          >
            <ArrowLeft height={14} /> <p>Back to Homepage</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
