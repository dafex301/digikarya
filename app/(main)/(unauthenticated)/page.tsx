import Image from "next/image";
import data from "@/data/home.json";
import Link from "next/link";

export default function Home() {
  return (
    <main className="columns-2 md:columns-3 lg:columns-4 mx-auto space-y-6 pb-12">
      {data.map((item) => (
        // Card
        <div className="relative" key={item.id}>
          <h3
            className={`text-sm text-white absolute top-2 left-2 rounded-xl p-2 ${
              item.status === "OPEN"
                ? "bg-green-500"
                : item.status === "WAITLIST"
                ? "bg-yellow-500"
                : "bg-main"
            }`}
          >
            {item.status}
          </h3>
          <div className="inline-block">
            <div className="flex flex-col gap-1 ">
              <Link href={`/art/${item.id}`}>
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt={item.description}
                  className="rounded-lg"
                />

                <h2 className="font-semibold text-lg">{item.title}</h2>
              </Link>

              <Link href={`/artist/${item.artist_username}`}>
                <div className="flex gap-2">
                  <Image
                    src={item.artist_image}
                    width={250}
                    height={250}
                    alt={item.description}
                    className="rounded-full h-5 w-5"
                  />
                  <p className="text-sm font-light opacity-80 hover:opacity-100">
                    {item.artist}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
