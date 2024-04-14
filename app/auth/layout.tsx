import Navbar from "@/components/organisms/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="h-screen flex items-center justify-center bg-darkMain">
        {children}
      </main>
    </>
  );
}
