export function Video() {
  return (
    <div className="mt-10">

    <h1 className="text-3xl font-bold text-center mb-5">محتوى البودكاست</h1>
    <div className="my-10 p-5 flex justify-center items-center gap-10 flex-wrap">
      {[...Array(4)].map((_, i) => (
        <video
          key={i}
          className="w-full lg:w-[400px] h-[290px] md:h-[450px] lg:h-[300px]"
          controls
          preload="none"
        >
          <source src="/vid.mp4" type="video/mp4" />
          <track src="/vid.mp4" kind="subtitles" srcLang="ar" label="Arabic" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
    </div>
  );
}
