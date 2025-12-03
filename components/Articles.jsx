import Image from "next/image";
import articlas from "../data/Articles.json";
export default function Articles() {
  return (
    <div className="max-sm:p-2 flex flex-col gap-5">
      {articlas.map((a) => (
        <div className="p-2" key={a.id}>
          <h1 className={`text-2xl md:text-3xl font-bold leading-12 mb-5`}>
            {a.title}{" "}
          </h1>
          <article
            className={`flex flex-col items-start gap-10
            md:flex-row lg:justify-between px-2
            `}
          >
            <p
              className={`w-full md:w-[400px] lg:w-[500px] xl:w-[700px] 2xl:w-[900px]
            leading-10
            text-xl lg:text-2xl
            `}
            >
              {a.content}
            </p>

            <div
              className={`img relative overflow-hidden rounded-md 
  w-full h-full
  md:w-[350px] md:h-[350px] 
  lg:w-[400px] lg:h-[400px]  shrink-0
  `}
            >
              <Image
                src={`/${a.img}`}
                alt="Content writing picture"
                width={400}
                height={400}
                className="object-cover w-full h-full brightness-70"
              />
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
