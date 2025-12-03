const cources = [
  'دورة كتابة المحتوى الإبداعي',
  'دورة تحسين محركات البحث SEO',
  'دورة كتابة المقالات الاحترافية',
  'دورة إدارة منصات التواصل الاجتماعي',
  'دورة الـ Copywriting وكتابة الإعلانات'
];

export default function Courses() {
  return (
    <div className={` my-4 rounded-lg p-[var(--main-padding)] card`}>
        <h1 className='title'>الدورات</h1>
      <ul className="list-disc mr-5 sub-font-size">
      {cources.map((c,idx)=><li key={idx} >{c}</li>)}
      </ul>
    </div>
  )
}
