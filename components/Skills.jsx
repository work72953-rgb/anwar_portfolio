import React from "react";
import { 
  Pen, 
  Edit, 
  SearchCheck, 
  Share2, 
  FileText, 
  Megaphone,
  MessageCircle,
  Users,
  Clock
} from "lucide-react";

// المهارات التقنية مع الأيقونات
const tecSkills = [
  { title: "كتابة المحتوى الإبداعي", icon: <Pen size={20} /> },
  { title: "تحرير وتدقيق النصوص", icon: <Edit size={20} /> },
  { title: "كتابة SEO وتحسين محركات البحث", icon: <SearchCheck size={20} /> },
  { title: "إدارة منصات التواصل الاجتماعي", icon: <Share2 size={20} /> },
  { title: "كتابة المقالات والمدونات", icon: <FileText size={20} /> },
  { title: "كتابة نصوص الإعلانات Copywriting", icon: <Megaphone size={20} /> },
];

// المهارات الناعمة مع الأيقونات
const softSkills = [
  { title: "التواصل", icon: <MessageCircle size={20} /> },
  { title: "العمل ضمن فريق", icon: <Users size={20} /> },
  { title: "إدارة الوقت", icon: <Clock size={20} /> },
];

export default function Skills() {
  return (
    <div className="my-4 rounded-lg p-(--main-padding) card">
      <h1 className="title">المهارات</h1>

      <div className="flex flex-col items-center gap-5">
        <div className="tec skills">
          <span className="block text-center text-xl font-semibold my-7 mx-auto p-1 w-[250px] bg-gray-200/70">
            المهارات التقنية
          </span>

          <ul className="flex justify-center items-center gap-3 flex-wrap">
            {tecSkills.map((t, idx) => (
              <li
                className="sub-font-size flex items-center gap-2 even:bg-violet-100/40 odd:bg-cyan-100/50 rounded-md p-2"
                key={idx}
              >
                {t.icon} {t.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="soft skills">
          <span className="block text-center text-xl font-semibold my-7 mx-auto p-1 w-[250px] bg-gray-200/70">
            المهارات الناعمة
          </span>

          <ul className="flex justify-center items-center gap-3 flex-wrap">
            {softSkills.map((s, idx) => (
              <li
                className="sub-font-size flex items-center gap-2 even:bg-violet-100/40 odd:bg-cyan-100/50 rounded-md p-2"
                key={idx}
              >
                {s.icon} {s.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
