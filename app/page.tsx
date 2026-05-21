import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex h-svh w-full items-center justify-center overflow-hidden">
      <Image
        src="/IMG_4393.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0a1128]/70" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-5 px-4 text-center sm:gap-7 sm:px-6 md:gap-8">
        <Image
          src="/IMG_4392.JPG"
          alt="Complete International Education Service logo"
          width={240}
          height={240}
          priority
          className="h-auto w-28 rounded-2xl sm:w-40 md:w-52 lg:w-60"
        />
        <h1 className="bg-linear-to-b from-white via-zinc-300 to-zinc-500 bg-clip-text text-2xl font-bold leading-tight tracking-tight text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] sm:text-4xl md:text-5xl lg:text-6xl">
          Complete International Education Service Web Development
        </h1>
      </div>
    </section>
  );
}
