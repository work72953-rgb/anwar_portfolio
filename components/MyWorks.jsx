import Image from "next/image";

const projects = [
  {
    image: "proj1.webp",
    title: "كتابة المقالات التقنية",
    description: "كتابة محتوى عالي الجودة في مجال التكنولوجيا والبرمجة.",
  },
  {
    image: "proj2.webp",
    title: "التسويق الرقمي",
    description: "إنشاء محتوى إبداعي للتسويق عبر منصات التواصل الاجتماعي.",
  },
  {
    image: "proj3.webp",
    title: "تحرير المدونات",
    description: "تحرير ونشر مقالات مدونات متنوعة لجذب القراء.",
  },
  {
    image: "proj4.webp",
    title: "كتابة محتوى تسويقي",
    description: "كتابة نصوص تسويقية جذابة لزيادة المبيعات.",
  },
];
export default function MyWorks() {
  return (
    <div className=" bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">أعمالي</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={`/${project.image}`}
                alt={project.title}
                fill
                className="object-cover brightness-80"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 flex-1">{project.description}</p>
            </div>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-center m-5 text-xl font-semibold text-blue-500`}
            >
              انقر للاطلاع على المشروع
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
