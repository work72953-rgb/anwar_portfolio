import Image from "next/image";
export default function Footer() {
  return (
    <div
      dir="rtl"
      className={`w-full h-[200px] p-5 bg-[#000000d7] text-white mt-10
    `}
    >
      <span className={`text-xl block mb-5`}>تواصل معي</span>
      <div
        className={`contact flex flex-col gap-2 md:flex-row md:justify-center md:items-center md:gap-6`}
      >
        <a
          href="https://wa.me/966555081504"
          target="_blank"
          className={`flex items-center gap-2`}
        >
          <Image
            src="/whatsapp.svg"
            alt="whatsapp icon"
            width={30}
            height={30}
          />
          <span dir="ltr">+966 55 508 1504 </span>
        </a>
        <a
          href="https://www.linkedin.com/in/anwar-a-a600bb172"
          target="_blank"
          className={`flex items-center gap-2`}
        >
          <Image
            src={"/linkedin.svg"}
            alt={"linkedin icon"}
            width={30}
            height={30}
          />
          أنوار البقمي
        </a>
        <a
  href="mailto:Anwar-595@hotmail.com"
  className="flex items-center gap-2"
>
  <Image src="/mail.svg" alt="mail icon" width={30} height={30} />
  Anwar-595@hotmail.com
</a>

      </div>
    </div>
  );
}
