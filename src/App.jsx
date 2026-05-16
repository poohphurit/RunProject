import React from 'react';

const syllabus = [
  {
    day: 'DAY 1',
    date: '3 ก.ค. 2569',
    theme: 'Brand + Marketing + Personal Branding',
    topics: [
      {
        title: 'AI Strategy Revolution',
        speaker: 'คุณอัน ปฤณ (AEIOU)',
        detail: 'ถอดรหัส Master Marketing Canvas & New Marketing Funnel ยุคปัจจุบัน',
      },
      {
        title: 'CEO Branding - The Power of Personal Authority',
        speaker: 'คุณแอ๊ม ศรัณย์ (Uppercuz)',
        detail: 'วาง Positioning ผู้นำในยุคที่ลูกค้าไว้ใจ “คน” มากกว่า “ร้าน”',
      },
      {
        title: 'Guest Speaker Theme',
        speaker: 'BearHouse & Merge',
        detail: 'ทำไมตัวตนผู้นำสำคัญกว่าสินค้า',
      },
    ],
  },
  {
    day: 'DAY 2',
    date: '10 ก.ค. 2569',
    theme: 'Storytelling + Short form video + Live Commerce',
    topics: [
      {
        title: 'Practical Storytelling & Conversion Copywriting',
        speaker: 'คุณก๊อป สุพศล (เด็กสมบูรณ์)',
        detail: 'สร้างเรื่องเล่าสะกดใจ เปลี่ยนคนอ่านเป็นคนจ่ายเงิน',
      },
      {
        title: 'Short Video + TikTok Marketing',
        speaker: 'ทีมงาน Uppercuz',
        detail: 'สูตรคลิปสั้นปิดการขาย อัลกอริทึม TikTok ระบบ Affiliate',
      },
      {
        title: 'Live Commerce Mastery',
        speaker: 'คุณแอ๊ม ศรัณย์ (Uppercuz)',
        detail: 'จิตวิทยาขายผ่านจอ สคริปต์ 3 จังหวะ Hook-Pitch-Close',
      },
    ],
  },
  {
    day: 'DAY 3',
    date: '17 ก.ค. 2569',
    theme: 'AI Visual + AI Video + Agentic AI',
    topics: [
      {
        title: 'AI Graphic Design Mastery',
        speaker: 'คุณปอง นักฆ่า (Enkay Studio)',
        detail: 'สร้าง Visual Identity และภาพโฆษณาระดับสตูดิโอด้วย Midjourney, Nano Banana',
      },
      {
        title: 'AI Video Production',
        speaker: 'คุณกฤษ โอสถเลิศ (Bigbrain & Marketmind)',
        detail: 'ผลิตคลิป Short-form ครบวงจรด้วย AI ลงทั้ง TikTok, Reels, Shorts',
      },
      {
        title: 'Agentic AI for Marketing',
        speaker: 'คุณอัน ปฤณ (AEIOU)',
        detail: 'ใช้ AI ช่วยทำงานจริง ตั้งแต่คอนเทนต์จนถึง workflow',
      },
    ],
  },
  {
    day: 'DAY 4',
    date: '24 ก.ค. 2569',
    theme: 'New Product + AI Search + Sustain Marketing',
    topics: [
      {
        title: 'New Product Creation for New Market',
        speaker: 'คุณป๊อป พลภัทร (Whale Ground)',
        detail: 'ออกแบบ Product-Market Fit ปรับ Packaging ให้ตรงกลุ่มเป้าหมาย',
      },
      {
        title: 'กลยุทธ์ให้แบรนด์ติดคำแนะนำของ AI Search (GEO)',
        speaker: 'คุณไอซ์ ศิริพงษ์ (Nerd Optimize)',
        detail: 'ทำให้แบรนด์ถูกหยิบไปแนะนำโดย AI Search ได้จริง',
      },
      {
        title: 'Makoto Marketing + New Human Value',
        speaker: 'ดร.กฤตินี (อ.เกศ เกตุวดี Marumura)',
        detail: 'การตลาดเชิงคุณค่าที่มนุษย์และความไว้วางใจอยู่ตรงกลาง',
      },
    ],
  },
];

const speakers = [
  {
    name: 'คุณอัน ปฤณ (AEIOU)',
    role: 'Founder & CEO AEIOU',
    bio: 'กลยุทธ์การตลาดและ AI ที่ใช้ได้จริงสำหรับธุรกิจยุคใหม่',
    accent: 'from-rose-500 to-orange-400',
  },
  {
    name: 'คุณศรัณย์ แบ่งกุลจิต',
    role: 'CEO Uppercuz',
    bio: 'สาย TikTok การตลาดคอนเทนต์ และระบบปิดการขายที่โตไว',
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    name: 'ดร.เกรียงไกร สัจจจะหฤทัย',
    role: 'คณบดีคณะการสร้างเจ้าของธุรกิจ ม.ศรีปทุม',
    bio: 'ผสานมุมมองวิชาการกับการลงมือทำจริง ให้ธุรกิจขับเคลื่อนได้ต่อเนื่อง',
    accent: 'from-violet-500 to-fuchsia-400',
  },
];

const sections = [
  { id: 'hero', label: 'หน้าแรก' },
  { id: 'problem', label: 'ปัญหา' },
  { id: 'syllabus', label: 'ตารางเรียน' },
  { id: 'speakers', label: 'วิทยากร' },
  { id: 'audience', label: 'เหมาะกับใคร' },
  { id: 'results', label: 'ผลลัพธ์' },
  { id: 'apply', label: 'สมัคร' },
];

const audience = [
  { title: 'เจ้าของธุรกิจรายได้ 10 ล้านขึ้นไป', desc: 'มีทีม ยอดขายเริ่มชะลอ และต้องการมุมใหม่เพื่อเร่งการเติบโต' },
  { title: 'Startup ที่ต้องการเร่ง Growth', desc: 'มีของดีแต่ขาดกลยุทธ์ตลาดยุคใหม่ และระบบคอนเทนต์ที่ทำเงินได้จริง' },
  { title: 'ผู้พร้อมเริ่มธุรกิจใหม่', desc: 'มีไอเดีย มีทุน และอยากใช้ AI / การตลาดให้เริ่มได้ไว ไม่เสียเวลาลองผิดลองถูก' },
];

const faqs = [
  { q: 'ต้องมีพื้นฐานการตลาดหรือ AI ไหม', a: 'ไม่จำเป็น ผู้เรียนเริ่มได้ทั้งคนทำธุรกิจและคนที่เพิ่งเริ่มต้น เพราะคอร์สออกแบบให้ค่อย ๆ ปูความเข้าใจและลงมือทำจริง' },
  { q: 'เรียนแล้วได้อะไรกลับไป', a: 'ได้ framework, template, ไอเดีย และงานที่ทำในคลาส เพื่อเอาไปใช้กับแบรนด์หรือธุรกิจได้ทันที' },
  { q: 'เหมาะกับทีมงานไหม', a: 'เหมาะมาก โดยเฉพาะเจ้าของกิจการ ผู้จัดการการตลาด ทีมคอนเทนต์ และคนที่อยากยกระดับการขายด้วย AI' },
  { q: 'มี workshop จริงไหม', a: 'มี ผู้เรียนได้ลงมือทำในแต่ละวัน ทำให้เห็นผลลัพธ์ชัดและเอากลับไปต่อยอดได้ทันที' },
];

const testimonials = [
  { name: 'ผู้บริหารแบรนด์อาหาร', role: 'SME Owner', quote: 'ได้มุมใหม่ในการเล่าเรื่องแบรนด์ และเอาไปปรับใช้กับคอนเทนต์ได้ทันที' },
  { name: 'Founder สาย Growth', role: 'Startup', quote: 'เข้าใจ funnel ใหม่ชัดขึ้นมาก และรู้ว่าควรเอา AI ไปช่วยตรงไหน' },
  { name: 'หัวหน้าทีมการตลาด', role: 'Marketing Lead', quote: 'เวิร์กช็อปทำให้ทีมเห็นภาพเดียวกันและเริ่มทำงานได้เร็วขึ้นจริง' },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-5xl px-6 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.45em] text-rose-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">{title}</h2>
      {subtitle ? <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">{subtitle}</p> : null}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#f4f7ff] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <p className="text-sm font-bold text-slate-900">R.U.N. by SPU</p>
            <p className="text-xs text-slate-500">Revenue. Unlock. Now.</p>
          </div>
          <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 md:flex">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-rose-500 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#apply" className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5 hover:bg-rose-600">
            สมัครเลย
          </a>
        </div>
      </header>

      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_42%),radial-gradient(circle_at_right,rgba(233,243,255,0.9),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-16">
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-rose-200 bg-white px-4 py-2 text-xs font-semibold text-rose-500 shadow-sm sm:text-sm">
              ขณะนี้คุณยังเดินอยู่ โลกกำลังวิ่ง
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
              คอร์สที่พาแบรนด์ <span className="bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">โตด้วย AI</span> และพลังของมนุษย์
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
              หน้า landing page โทนสว่างแบบโปสเตอร์ ดูน่าเชื่อถือ สวยสะอาด และช่วยพาคนเลื่อนไปสมัครง่ายขึ้น
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#syllabus" className="rounded-full bg-slate-900 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">ดูตารางเรียน</a>
              <a href="#speakers" className="rounded-full border border-rose-200 bg-white px-6 py-3 text-center font-semibold text-rose-500 transition hover:-translate-y-0.5 hover:bg-rose-50">ดูวิทยากร</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute inset-0 -translate-y-2 rounded-[2.5rem] bg-gradient-to-br from-rose-200/60 via-white to-sky-100 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white/85 p-6 shadow-[0_30px_80px_rgba(148,163,184,0.25)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['4', 'วันเข้มข้น'],
                  ['12+', 'หัวข้อเรียน'],
                  ['3', 'วิทยากรหลัก'],
                  ['Workshop', 'ลงมือทำจริง'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-slate-200 bg-[#f8faff] p-5 transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-3xl font-black text-rose-500">{value}</div>
                    <div className="mt-1 text-sm text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl bg-gradient-to-br from-rose-500 to-orange-400 p-6 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/80">Core message</p>
                <p className="mt-2 text-lg font-semibold leading-7 sm:text-xl">สอนให้ผู้เรียนกลายเป็นมนุษย์พันธุ์ใหม่ ที่ใช้ AI เป็นตัวขยายผล ไม่ใช่แค่เครื่องมือ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-20">
        <SectionTitle eyebrow="Problem" title="ทำไมต้องลงทะเบียนตอนนี้" subtitle="เพราะตลาดเปลี่ยนเร็ว ลูกค้าเปลี่ยนวิธีตัดสินใจ และการแข่งขันใหม่ไม่ได้วัดกันที่ความรู้เพียงอย่างเดียว" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Social', 'พฤติกรรมซื้อจาก Social Commerce สูงขึ้น ต้องสร้างความน่าเชื่อถือก่อนปิดการขาย'],
            ['Tech', 'AI search และเครื่องมือใหม่เปลี่ยนวิธีค้นหา-เปรียบเทียบของลูกค้า'],
            ['Economic', 'ตลาดแยกขั้วระหว่าง Premium vs Value ชัดขึ้น ธุรกิจต้องเลือกทางให้แม่น'],
            ['Environment & Politics', 'ต้นทุนและนโยบายเปลี่ยนตลอดเวลา แบรนด์ต้องยืดหยุ่นกว่าเดิม'],
          ].map(([tag, text]) => (
            <article key={tag} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose-500">{tag}</p>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="syllabus" className="py-20">
        <SectionTitle eyebrow="Course syllabus" title="ตารางเรียน 4 วัน ที่ออกแบบให้เรียนแล้วใช้ได้จริง" subtitle="แต่ละวันผสมกลยุทธ์ คอนเทนต์ และ AI เพื่อให้ผู้เรียนเห็นภาพรวมครบวงจร" />
        <div className="mx-auto mt-12 max-w-5xl space-y-8 px-6">
          {syllabus.map((day) => (
            <section key={day.day} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-8">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-500">{day.day}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">{day.theme}</h3>
                </div>
                <p className="text-slate-500">{day.date}</p>
              </div>
              <div className="mt-6 grid gap-4">
                {day.topics.map((topic) => (
                  <div key={topic.title} className="rounded-2xl border border-slate-200 bg-[#f8faff] p-5 transition hover:border-rose-200 hover:bg-white">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <h4 className="text-xl font-bold text-slate-900">{topic.title}</h4>
                      <span className="text-sm font-semibold text-rose-500">{topic.speaker}</span>
                    </div>
                    <p className="mt-3 leading-7 text-slate-600">{topic.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id="speakers" className="py-20">
        <SectionTitle eyebrow="Speakers" title="หน้าแนะนำวิทยากร" subtitle="เพิ่มหน้าวิทยากรแบบชัดเจน เพื่อให้หน้าคอร์สดูน่าเชื่อถือเหมือนโปสเตอร์" />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className={`h-64 bg-gradient-to-br ${speaker.accent} p-6`}>
                <div className="flex h-full items-end rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_45%)] p-4 text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">วิทยากร</p>
                    <h3 className="mt-2 text-2xl font-black leading-tight">{speaker.name}</h3>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-100 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">{speaker.role}</p>
                <p className="mt-3 text-slate-600">{speaker.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="audience" className="py-20">
        <SectionTitle eyebrow="Audience" title="คอร์สนี้เหมาะกับใคร" subtitle="ออกแบบสำหรับเจ้าของธุรกิจ ทีมการตลาด และคนที่อยากใช้ AI และคอนเทนต์ให้เกิดยอดขายจริง" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-6 lg:grid-cols-3">
          {audience.map((item, index) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-xl font-black text-rose-500">0{index + 1}</div>
              <h3 className="mt-5 text-xl font-bold sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="results" className="py-20">
        <SectionTitle eyebrow="Key result" title="สิ่งที่ผู้เรียนจะได้รับ" subtitle="เมื่อจบคอร์ส ผู้เรียนจะไม่ใช่แค่คนที่มีความรู้ แต่เป็นคนที่พร้อมลงมือสร้างผลลัพธ์ได้จริง" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
          {['เข้าใจกลยุทธ์ใหม่', 'มีงานจริงกลับไปใช้', 'ใช้ AI ได้คล่องขึ้น', 'สื่อสารแบรนด์ได้ชัดกว่าเดิม'].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-orange-400/20" />
              <p className="text-lg font-semibold leading-7 text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <SectionTitle eyebrow="Testimonials" title="เสียงสะท้อนจากผู้เรียน" subtitle="ใช้เป็นส่วนเสริมความน่าเชื่อถือ และช่วยเพิ่มแรงจูงใจให้ผู้สนใจตัดสินใจง่ายขึ้น" />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-rose-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="py-20">
        <SectionTitle eyebrow="FAQ" title="คำถามที่พบบ่อย" subtitle="ช่วยลดความกังวลก่อนสมัคร และทำให้ภาพคอร์สชัดเจนขึ้น" />
        <div className="mx-auto mt-12 max-w-4xl space-y-4 px-6">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition open:shadow-lg sm:p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 sm:text-lg">{item.q}</summary>
              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="apply" className="pb-24 pt-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2.5rem] border border-rose-200 bg-white p-6 shadow-[0_30px_120px_rgba(248,113,113,0.12)] sm:p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-rose-500">Ready to join?</p>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">พร้อมก้าวสู่มนุษย์พันธุ์ใหม่ไปด้วยกัน</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">ถ้าคุณต้องการคอร์สที่ดูดี น่าเชื่อถือ และพาผู้เรียนไปสู่การลงมือทำจริง หน้า landing page นี้ถูกออกแบบมาให้ใช้เป็นต้นแบบได้ทันที</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl border border-slate-200 bg-[#f8faff] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-500">สมัครรับข้อมูล</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400" placeholder="ชื่อ-นามสกุล" />
                  <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400" placeholder="อีเมล" />
                  <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400 sm:col-span-2" placeholder="ชื่อธุรกิจ / หน่วยงาน" />
                </div>
                <button className="mt-4 rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
                  ขอข้อมูลเพิ่มเติม
                </button>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-[#f8faff] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-500">Highlight</p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>• Workshop เน้นลงมือทำจริง</li>
                  <li>• เหมาะกับคนทำธุรกิจและทีมการตลาด</li>
                  <li>• ได้ framework ไปต่อยอดทันที</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#hero" className="rounded-2xl bg-rose-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-600">กลับขึ้นด้านบน</a>
              <a href="mailto:hello@run-spu.com" className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">ติดต่อทีมงาน</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
