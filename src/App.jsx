import React from 'react';
import speakerAn from './assets/speaker-an.png';
import speakerKriengkrai from './assets/speaker-kriengkrai.png';
import speakerSaran from './assets/speaker-saran.png';

const syllabus = [
  {
    day: 'DAY 1',
    date: '3 ก.ค. 2569',
    theme: 'Brand + Marketing + Personal Branding',
    subTheme: 'ลุกขึ้นยืน – เปิดตาเห็นสนามรบใหม่ สร้างตัวตนให้ทรงพลัง',
    topics: [
      {
        title: 'AI Strategy Revolution',
        speaker: 'คุณอ้น ปฤณ (AEIOU)',
        detail: 'ถอดรหัส Master Marketing Canvas & New Marketing Funnel ยุคปัจจุบัน',
        extra: 'ปรับมายด์เซ็ตการตลาดใหม่ให้ทันโลก! วิเคราะห์และวางแผนกลยุทธ์ตั้งแต่ต้นน้ำยันปลายน้ำเพื่อหาช่องโหว่ทางธุรกิจ',
      },
      {
        title: 'CEO Branding - The Power of Personal Authority',
        speaker: 'คุณแอ๊ม ศรัณย์ (Uppercuz)',
        detail: 'วาง Positioning ผู้นำในยุคที่ลูกค้าไว้ใจ “คน” มากกว่า “ร้าน”',
        extra: 'ดึงศักยภาพของคุณออกมาเป็นจุดขาย! เรียนรู้วิธีการสื่อสารให้ทรงพลัง เพื่อก้าวขึ้นเป็นผู้นำทางความคิด',
      },
      {
        title: 'Guest Speaker CEO Branding',
        speaker: '',
        detail: 'ทำไมตัวตนผู้นำสำคัญกว่าสินค้า',
        extra: 'เจาะลึกเบื้องหลังว่าคาแรกเตอร์ของเจ้าของธุรกิจ ช่วยขับเคลื่อนยอดขายและสร้างแฟนคลับที่เหนียวแน่นได้อย่างไร',
      },
    ],
  },
  {
    day: 'DAY 2',
    date: '10 ก.ค. 2569',
    theme: 'Storytelling + Short form video + Live Commerce',
    subTheme: 'เริ่มวิ่ง – เล่าเรื่องให้ขายได้ สร้างผลงานชิ้นแรก',
    topics: [
      {
        title: 'Practical Storytelling & Conversion Copywriting',
        speaker: '',
        detail: 'สร้างเรื่องเล่าสะกดใจ เปลี่ยนคนอ่านเป็นคนจ่ายเงิน',
        extra: 'หมดปัญหาคอนเทนต์ฝืด! เรียนรู้ศิลปะการเล่าเรื่องที่กระตุ้นอารมณ์ร่วม ผสานเทคนิคการเขียนคำโฆษณาที่มุ่งเน้นผลลัพธ์',
      },
      {
        title: 'Short Video + TikTok Marketing',
        speaker: 'ทีมงาน Uppercuz',
        detail: 'สูตรคลิปสั้นปิดการขาย อัลกอริทึม TikTok ระบบ Affiliate',
        extra: 'เจาะลึกความลับของวิดีโอสั้น เข้าใจระบบการดันฟีด และเรียนรู้วิธีสร้างกองทัพนักขายผ่านระบบ Affiliate',
      },
      {
        title: 'Live Commerce Mastery',
        speaker: 'คุณแอ๊ม ศรัณย์ (Uppercuz)',
        detail: 'จิตวิทยาขายผ่านจอ สคริปต์ 3 จังหวะ Hook-Pitch-Close',
        extra: 'ทลายกำแพงความกลัวหน้ากล้อง! ฝึกทักษะการไลฟ์สดแบบมือโปร ที่ทำให้ลูกค้าต้องรีบ F ก่อนของหมด',
      },
    ],
  },
  {
    day: 'DAY 3',
    date: '17 ก.ค. 2569',
    theme: 'AI Visual + AI Video + Agentic AI',
    subTheme: 'วิ่งเร็วขึ้น – ผลิตงานระดับโปร ต้นทุนต่ำลงหลายเท่า',
    topics: [
      {
        title: 'AI Graphic Design Mastery',
        speaker: 'คุณปอง นัทชา (Enkay Studio)',
        detail: 'สร้าง Visual Identity และภาพโฆษณาระดับสตูดิโอด้วย Midjourney, Nano Banana',
        extra: 'เรียนรู้วิธีใช้ AI สร้างอัตลักษณ์แบรนด์ให้สวยหรู ดูแพง และดึงดูดสายตา ประหยัดเวลาและงบประมาณได้มหาศาล',
      },
      {
        title: 'AI Video Production',
        speaker: 'คุณกฤษ (Bigbrain & Marketmind)',
        detail: 'ผลิตคลิป Short-form ครบวงจรด้วย AI ลงทั้ง TikTok, Reels, Shorts',
        extra: 'ร่นระยะเวลาการทำวิดีโอจากหลายวันเหลือเพียงไม่กี่ชั่วโมง! ด้วย AI ที่ช่วยเนรมิตคลิปวิดีโอสั้นแบบรวดเดียวจบ',
      },
      {
        title: 'Agentic AI for Marketing',
        speaker: 'คุณอ้น ปฤณ (AEIOU)',
        detail: 'ใช้ AI ช่วยทำงานจริง ตั้งแต่คอนเทนต์จนถึง workflow',
        extra: 'ยกระดับ AI ให้เป็นเสมือนพนักงานดีเด่นประจำทีม สร้างระบบ Automation ในการทำงาน',
      },
    ],
  },
  {
    day: 'DAY 4',
    date: '24 ก.ค. 2569',
    theme: 'New Product + AI Search + Sustain Marketing',
    subTheme: 'วิ่งนำหน้า – นวัตกรรมใหม่ เครื่องมือใหม่ ช่องทางใหม่',
    topics: [
      {
        title: 'New Product Creation for New Market',
        speaker: 'คุณป๊อป พลภัทร (Whale Ground)',
        detail: 'ออกแบบ Product-Market Fit ปรับ Packaging ให้ตรงกลุ่มเป้าหมาย',
        extra: 'ค้นหาโอกาสในตลาดที่คนอื่นมองไม่เห็น! เรียนรู้วิธีพัฒนาสินค้าหรือปรับปรุงแพ็กเกจจิ้ง',
      },
      {
        title: 'กลยุทธ์ให้แบรนด์ติดคำแนะนำของ AI Search (GEO)',
        speaker: 'คุณไอซ์ ศิริพงษ์ (Nerd Optimize)',
        detail: 'ทำให้แบรนด์ถูกหยิบไปแนะนำโดย AI Search ได้จริง',
        extra: 'ก้าวข้าม SEO แบบเดิมๆ สู่ GEO (Generative Engine Optimization) ทำให้ธุรกิจของคุณกลายเป็นตัวเลือกอันดับหนึ่ง',
      },
      {
        title: 'Makoto Marketing + New Human Value',
        speaker: 'ดร.กฤตินี (อ.เกศ เกตุวดี Marumura)',
        detail: 'การตลาดเชิงคุณค่าที่มนุษย์และความไว้วางใจอยู่ตรงกลาง',
        extra: 'สรุปจบด้วยแก่นแท้ของการทำธุรกิจที่ยั่งยืน เรียนรู้ปรัชญาการตลาดสไตล์ญี่ปุ่นที่เน้น "ความจริงใจ"',
      },
    ],
  },
];

const speakers = [
  {
    name: 'คุณอ้น ปฤณ (AEIOU)',
    role: 'FOUNDER & CEO AEIOU',
    bio: 'กลยุทธ์การตลาดและ AI ที่ใช้ได้จริงสำหรับธุรกิจยุคใหม่',
    image: speakerAn,
    accent: 'from-rose-500 to-orange-400',
  },
  {
    name: 'คุณศรัณย์ แบ่งกุลจิต',
    role: 'CEO UPPERCUZ',
    bio: 'สาย TikTok การตลาดคอนเทนต์ และระบบปิดการขายที่โตไว',
    image: speakerSaran,
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    name: 'ดร.เกรียงไกร สัจจะหฤทัย',
    role: 'คณบดีคณะการสร้างเจ้าของธุรกิจ ม.ศรีปทุม',
    bio: 'ผสานมุมมองวิชาการกับการลงมือทำจริง ให้ธุรกิจขับเคลื่อนได้ต่อเนื่อง',
    image: speakerKriengkrai,
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
  {
    title: 'เจ้าของธุรกิจที่อยากเพิ่มยอดขาย',
    desc: 'มีทีม ยอดขายเริ่มชะลอ และต้องการมุมใหม่เพื่อเร่งการเติบโต',
    icon: 'chart',
  },
  {
    title: 'Startup ที่อยากเติบโตให้ไวและยั่งยืน',
    desc: 'มีของดีแต่ขาดกลยุทธ์ตลาดยุคใหม่ และระบบคอนเทนต์ที่ทำเงินได้จริง',
    icon: 'rocket',
  },
  {
    title: 'ผู้ที่กำลังเริ่มธุรกิจใหม่ต้องการคำแนะนำ',
    desc: 'มีไอเดีย มีทุน และอยากใช้ AI / ไม่เสียเวลาลองผิดลองถูก',
    icon: 'shop',
  },
];



function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-5xl px-6 text-center">
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.45em] text-rose-500">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">{title}</h2>
      {subtitle ? <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">{subtitle}</p> : null}
    </div>
  );
}

function SpeakerPortrait({ name, title, accent, imageUrl }) {
  const [imageError, setImageError] = React.useState(false);

  const getInitial = (fullName) => {
    const cleanName = fullName.replace('คุณ', '').replace('ดร.', '').trim();
    return cleanName.charAt(0) || 'S';
  };

  return (
    <div className="relative h-64 w-full overflow-visible mt-10">
      {/* 1. Gradient Background Block with clipped light effects */}
      <div className={`absolute inset-0 rounded-[1.75rem] bg-gradient-to-br ${accent} overflow-hidden shadow-inner`}>
        {/* Light & Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_25%)]" />
        <div className="absolute -right-10 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
      </div>

      {/* 2. Speaker Image (placed outside the overflow-hidden background to allow top overflow!) */}
      {!imageError && imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-x-0 bottom-0 mx-auto h-[125%] w-auto object-contain object-bottom transition duration-500 group-hover:scale-[1.06] origin-bottom z-10"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white/90 z-20">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl font-black backdrop-blur-md shadow-inner transition duration-500 group-hover:scale-105">
            {getInitial(name)}
          </div>
          <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-white/60 text-center">
            วางไฟล์ภาพที่: {name}
          </span>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#f4f7ff] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 px-4 py-3 sm:px-6">
          {/* Logo and Mobile Register Button Row */}
          <div className="flex w-full items-center justify-between md:w-auto">
            <div className="flex flex-col items-start">
              <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                R<span className="text-rose-500">.</span>U<span className="text-rose-500">.</span>N
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">
                REVENUE. UNLOCK. NOW.
              </span>
            </div>
            {/* Visible on Mobile only */}
            <a href="#apply" className="rounded-full bg-rose-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5 hover:bg-rose-600 md:hidden">
              สมัครเลย
            </a>
          </div>

          {/* Navigation Pill Menu (Horizontally Scrollable on Mobile) */}
          <nav className="w-full overflow-x-auto no-scrollbar flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 md:w-auto md:flex md:overflow-x-visible">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-slate-600 transition hover:bg-rose-500 hover:text-white shrink-0 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Visible on Desktop/Tablet only */}
          <a href="#apply" className="hidden md:inline-block rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5 hover:bg-rose-600">
            สมัครเลย
          </a>
        </div>
      </header>

      <section id="hero" className="relative w-full overflow-hidden bg-[#f4f7ff] py-0">
        <div className="relative w-full">
          {/* Responsive Hero Banner Images */}
          {/* Desktop/Tablet Image */}
          <img
            src="/hero-banner.jpg"
            alt="R.U.N. by SPU - Revenue. Unlock. Now. รอด รวย เริ่ม เริศ"
            className="hidden sm:block w-full h-auto select-none pointer-events-none"
          />

          {/* Mobile Image */}
          <img
            src="/hero-banner-mobile.jpg"
            alt="R.U.N. by SPU - Revenue. Unlock. Now. รอด รวย เริ่ม เริศ"
            className="block sm:hidden w-full h-auto select-none pointer-events-none"
          />

          {/* Interactive Absolute-Positioned Overlay Buttons */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[4%] sm:left-[16%] sm:translate-x-0 sm:bottom-[10%] md:left-[17%] md:bottom-[12%] lg:left-[17.5%] lg:bottom-[14%] flex gap-2.5 sm:gap-4 z-20 w-max">
            <a
              href="#syllabus"
              className="rounded-full bg-[#0f172a] py-2 px-0 w-[105px] sm:w-auto sm:px-7 sm:py-3.5 md:px-10 md:py-4.5 lg:px-12 lg:py-5 text-[10px] sm:text-sm md:text-base lg:text-lg font-extrabold text-white shadow-[0_8px_30px_rgba(15,23,42,0.35)] transition duration-300 hover:scale-[1.05] hover:bg-[#1e293b] active:scale-[0.98] inline-flex items-center justify-center text-center"
            >
              ดูตารางเรียน
            </a>
            <a
              href="#apply"
              className="rounded-full bg-[#ff3b60] py-2 px-0 w-[105px] sm:w-auto sm:px-7 sm:py-3.5 md:px-10 md:py-4.5 lg:px-12 lg:py-5 text-[10px] sm:text-sm md:text-base lg:text-lg font-extrabold text-white shadow-[0_8px_30px_rgba(255,59,96,0.45)] transition duration-300 hover:scale-[1.05] hover:bg-[#ff5a79] active:scale-[0.98] inline-flex items-center justify-center text-center"
            >
              สมัครเรียน
            </a>
          </div>
        </div>
      </section>

      <section id="problem" className="py-20">
        <SectionTitle title="ทำไมต้องวิ่งตอนนี้?" subtitle="เพราะตลาดเปลี่ยนเร็ว ลูกค้าเปลี่ยนวิธีตัดสินใจ และการแข่งขันใหม่ไม่ได้วัดกันที่ความรู้เพียงอย่างเดียว" />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {[
            ['AI', 'เปลี่ยน AI เป็นผู้ช่วย ลดต้นทุน ทุ่นแรง ผลิตงานระดับโปร เพื่อให้คุณวิ่งเร็วกว่าคู่แข่ง'],
            ['MARKETING', 'เจาะลึก New Marketing Funnel รับมือปี 2026 ปรับแผนทันทีไม่ให้แบรนด์ถูกทิ้งไว้ข้างหลัง'],
            ['BRANDING', 'สร้างแบรนด์ผู้นำ (CEO Branding) มัดใจลูกค้าด้วย "Trust" สิ่งเดียวที่ AI เลียนแบบไม่ได้'],
            ['SALE', 'มุ่งเป้าที่ REVENUE ด้วยสคริปต์ปิดการขายและจิตวิทยาไลฟ์สด เปลี่ยนคนดูเป็นคนจ่ายเงิน'],
            ['CONTENT', 'สะกดลูกค้าด้วย Storytelling และคลิปสั้น เข้าใจทั้งใจมนุษย์และอัลกอริทึม ดึงดูดให้คนซื้อ'],
          ].map(([tag, text]) => (
            <article key={tag} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-xl font-black uppercase tracking-wide text-rose-500">{tag}</p>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="syllabus" className="py-20">
        <SectionTitle
          title={
            <>
              หลักสูตร 4 วัน ลงมือทำจริง
              <br />
              เปลี่ยนจากเดินสู่การวิ่ง
            </>
          }
          subtitle="แต่ละวันผสมกลยุทธ์ คอนเทนต์ และ AI เพื่อให้ผู้เรียนเห็นภาพรวมครบวงจร"
        />
        <div className="mx-auto mt-12 max-w-5xl space-y-6 px-6">
          {syllabus.map((day) => (
            <section key={day.day} className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg md:p-6">
              {/* Day Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-4">
                  {/* Day block */}
                  <div className="flex flex-col items-center justify-center text-center min-w-[3rem]">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-rose-500 leading-none">DAY</span>
                    <span className="text-4xl font-black text-rose-500 mt-1 leading-none">{day.day.replace('DAY ', '')}</span>
                  </div>
                  {/* Vertical Divider */}
                  <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />
                  {/* Theme & Sub-theme */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900 sm:text-xl leading-tight">{day.theme}</h3>
                    {day.subTheme && (
                      <p className="text-xs font-semibold text-slate-400 mt-0.5 sm:text-sm">{day.subTheme}</p>
                    )}
                  </div>
                </div>
                {/* Date */}
                <div className="text-xs font-semibold text-slate-400 self-end sm:self-center sm:text-sm">
                  {day.date}
                </div>
              </div>
              <div className="space-y-2.5">
                {day.topics.map((topic) => (
                  <div key={topic.title} className="rounded-xl border border-slate-200/60 bg-[#f8faff] p-4 transition duration-300 hover:border-rose-200 hover:bg-white hover:shadow-sm">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-base font-extrabold sm:text-lg">
                      <span className="text-slate-900">{topic.title}</span>
                      {topic.speaker && (
                        <>
                          <span className="text-slate-300 font-light hidden sm:inline">|</span>
                          <span className="text-rose-500 text-sm sm:text-base font-bold">{topic.speaker}</span>
                        </>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-bold text-slate-800 sm:text-base leading-relaxed">{topic.detail}</p>
                    {topic.extra && (
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed sm:text-sm">{topic.extra}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id="speakers" className="py-20">
        <SectionTitle title="วิทยากรตัวจริงผู้เชี่ยวชาญ" subtitle="วิทยากรตัวจริงที่ลงสนามทุกวัน" />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="group rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(244,63,94,0.12)]">
              <SpeakerPortrait name={speaker.name} title={speaker.role} accent={speaker.accent} imageUrl={speaker.image} />
              <div className="p-4 pt-5">
                <h3 className="text-xl font-black text-slate-900 leading-tight">{speaker.name}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-wide text-rose-500">{speaker.role}</p>
                <p className="mt-3 text-base leading-relaxed text-slate-500">{speaker.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="audience" className="py-20">
        <SectionTitle title="คอร์สนี้เหมาะกับใคร" subtitle="ออกแบบสำหรับเจ้าของธุรกิจ ทีมการตลาด และคนที่อยากใช้ AI และคอนเทนต์ให้เกิดยอดขายจริง" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-6 lg:grid-cols-3">
          {audience.map((item) => {
            const renderIcon = () => {
              if (item.icon === 'chart') {
                return (
                  <svg className="w-16 h-16 text-rose-500 mb-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pie chart */}
                    <path d="M18 10C22.4183 10 26 13.5817 26 18C26 18.5 25.5 19 25 19H17C16.5 19 16 18.5 16 18V10C16 9.5 17.5 10 18 10Z" fill="#F43F5E" />
                    <path d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19C9 17.3431 10.3431 16 12 16C13.6569 16 15 17.3431 15 19Z" stroke="#F43F5E" strokeWidth="2.5" />
                    {/* Percentage sign % */}
                    <text x="29" y="19" fill="#F43F5E" fontSize="13" fontWeight="900" fontFamily="sans-serif">%</text>
                    {/* Trending line with dots */}
                    <path d="M10 40L24 28L36 34L54 16" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="10" cy="40" r="3.5" fill="#F43F5E" />
                    <circle cx="24" cy="28" r="3.5" fill="#F43F5E" />
                    <circle cx="36" cy="34" r="3.5" fill="#F43F5E" />
                    <circle cx="54" cy="16" r="4.5" fill="#F43F5E" />
                    {/* Three vertical bars */}
                    <rect x="14" y="46" width="6" height="12" rx="1.5" fill="#F43F5E" />
                    <rect x="28" y="43" width="6" height="15" rx="1.5" fill="#F43F5E" />
                    <rect x="42" y="38" width="6" height="20" rx="1.5" fill="#F43F5E" />
                  </svg>
                );
              }
              if (item.icon === 'rocket') {
                return (
                  <svg className="w-16 h-16 text-rose-500 mb-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Clean modern rocket */}
                    <path d="M42.5 16.5C45.5 19.5 49.5 26.5 46.5 33.5C44.5 38.5 39.5 42.5 33.5 44.5C26.5 47.5 19.5 43.5 16.5 40.5C14.5 38.5 14 36 15 33C17 27 21 22 26 17C31 12 36.5 11 40 12L42.5 16.5Z" fill="#F43F5E" />
                    {/* Fins */}
                    <path d="M16.5 40.5L8 47L10 39.5L16.5 40.5Z" fill="#F43F5E" />
                    <path d="M22.5 43.5L16 52L20.5 45.5" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Fins other side */}
                    <path d="M40.5 16.5L47 8L39.5 10L40.5 16.5Z" fill="#F43F5E" />
                    <path d="M43.5 22.5L52 16L45.5 20.5" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Window */}
                    <circle cx="32" cy="28" r="3.5" fill="white" />
                    {/* Blast flames */}
                    <path d="M11 49C9 52 5 57 9 59C11 61 16 57 18 55" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" />
                    <path d="M6 44C4.5 46.5 1.5 50.5 4.5 52C6 53.5 10 50.5 11.5 49" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
                    <path d="M19 57C17.5 58.5 14.5 61.5 16 63C17.5 64.5 21.5 61.5 23 60" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                );
              }
              if (item.icon === 'shop') {
                return (
                  <svg className="w-16 h-16 text-rose-500 mb-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Storefront roof/awning */}
                    <path d="M30 28H56V32C56 34.2091 54.2091 36 52 36C49.7909 36 48 34.2091 48 32C48 34.2091 46.2091 36 44 36C41.7909 36 40 34.2091 40 32C40 34.2091 38.2091 36 36 36C33.7909 36 32 34.2091 32 32V28H30Z" fill="#F43F5E" />
                    <path d="M34 18H54L58 28H30L34 18Z" fill="#F43F5E" fillOpacity="0.8" />
                    {/* Store body */}
                    <rect x="34" y="36" width="20" height="16" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" />
                    {/* Key */}
                    <path d="M8 32C8 28.6863 10.6863 26 14 26C17.3137 26 20 28.6863 20 32C20 35.3137 17.3137 38 14 38C10.6863 38 8 35.3137 8 32Z" stroke="#F43F5E" strokeWidth="3" />
                    <circle cx="14" cy="32" r="2.5" fill="#F43F5E" />
                    <path d="M20 32H30M27 32V36M23 32V36" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                );
              }
              return null;
            };

            return (
              <article key={item.title} className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(244,63,94,0.06)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-start">
                    {renderIcon()}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight tracking-tight mb-4">{item.title}</h3>
                  <p className="text-base leading-relaxed text-slate-500 font-medium">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="results" className="py-20">
        <SectionTitle title="สิ่งที่ผู้เรียนจะได้รับ" subtitle="เมื่อจบคอร์ส ผู้เรียนจะไม่ใช่แค่คนที่มีความรู้ แต่เป็นคนที่พร้อมลงมือสร้างผลลัพธ์ได้จริง" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'เข้าใจกลยุทธ์ใหม่', icon: 'strategy' },
            { title: 'มีงานจริงกลับไปใช้', icon: 'presenter' },
            { title: 'ใช้ AI ได้คล่องขึ้น', icon: 'ai_mind' },
            { title: 'สื่อสารแบรนด์ได้ชัดขึ้น', icon: 'communication' },
          ].map((item) => {
            const renderIcon = () => {
              if (item.icon === 'strategy') {
                return (
                  <svg className="w-16 h-16 text-rose-500 mb-6 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Whiteboard outline */}
                    <rect x="10" y="12" width="44" height="30" rx="3" stroke="#F43F5E" strokeWidth="3" />
                    {/* Whiteboard header */}
                    <line x1="8" y1="12" x2="56" y2="12" stroke="#F43F5E" strokeWidth="4" strokeLinecap="round" />
                    {/* Tri-pod stand */}
                    <path d="M22 42L16 56M42 42L48 56M32 42V56" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" />
                    {/* Content: X's and O's and arrows */}
                    <path d="M16 20L22 26M22 20L16 26" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="46" cy="22" r="3" stroke="#F43F5E" strokeWidth="2.5" />
                    <circle cx="18" cy="34" r="3" stroke="#F43F5E" strokeWidth="2.5" />
                    <path d="M42 30L48 36M48 30L42 36" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M24 24C30 20 34 36 40 32" stroke="#F43F5E" strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round" />
                    <path d="M37 30.5L41.5 32L39 36" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                );
              }
              if (item.icon === 'presenter') {
                return (
                  <svg className="w-16 h-16 text-rose-500 mb-6 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="4.5" fill="#F43F5E" />
                    <path d="M12 28.5C12 25.5 14.5 24 18 24C21.5 24 24 25.5 24 28.5V36H12V28.5Z" fill="#F43F5E" />
                    <path d="M22 30L34 22" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" />
                    <rect x="30" y="14" width="24" height="18" rx="2" stroke="#F43F5E" strokeWidth="3" />
                    <line x1="35" y1="19" x2="49" y2="19" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="35" y1="23" x2="49" y2="23" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="35" y1="27" x2="44" y2="27" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="34" cy="46" r="3.5" fill="#F43F5E" />
                    <path d="M29 55C29 52 31 51 34 51C37 51 39 52 39 55V58H29V55Z" fill="#F43F5E" />
                    <circle cx="48" cy="46" r="3.5" fill="#F43F5E" />
                    <path d="M43 55C43 52 45 51 48 51C51 51 53 52 53 55V58H43V55Z" fill="#F43F5E" />
                  </svg>
                );
              }
              if (item.icon === 'ai_mind') {
                return (
                  <svg className="w-16 h-16 text-rose-500 mb-6 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 52C25 54 28 54 31 54C34 54 35.5 52.5 36.5 50.5C37.5 48.5 37 46 37 46C39.5 45.5 41 43.5 41.5 40.5C42 37.5 40.5 35.5 40.5 35.5C42.5 34.5 43.5 31.5 43.5 28C43.5 17 38 12 28 12C18 12 15.5 19.5 15.5 28C15.5 36.5 18 40.5 19.5 42C19.5 42 19 46.5 21.5 49.5C22.5 50.5 24 52 24 52Z" fill="#F43F5E" />
                    <circle cx="28" cy="22" r="2.5" fill="white" />
                    <circle cx="35" cy="27" r="2.5" fill="white" />
                    <circle cx="25" cy="32" r="2.5" fill="white" />
                    <circle cx="32" cy="38" r="2.5" fill="white" />
                    <path d="M28 22H35V27" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25 32H32V38" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 22V32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                );
              }
              if (item.icon === 'communication') {
                return (
                  <svg className="w-16 h-16 text-rose-500 mb-6 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="24" y="16" width="30" height="20" rx="3" fill="#F43F5E" fillOpacity="0.8" />
                    <path d="M46 36L50 41V36H46Z" fill="#F43F5E" fillOpacity="0.8" />
                    <line x1="30" y1="22" x2="48" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <line x1="30" y1="26" x2="48" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <line x1="30" y1="30" x2="42" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <rect x="10" y="24" width="30" height="20" rx="3" stroke="#F43F5E" strokeWidth="3" fill="white" />
                    <path d="M14 44L18 49V44H14Z" fill="#F43F5E" stroke="#F43F5E" strokeWidth="3" strokeLinejoin="round" />
                    <line x1="16" y1="30" x2="34" y2="30" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="16" y1="34" x2="34" y2="34" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="16" y1="38" x2="28" y2="38" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                );
              }
              return null;
            };

            return (
              <div key={item.title} className="rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(244,63,94,0.06)] flex flex-col items-center justify-center">
                {renderIcon()}
                <p className="text-[1.375rem] font-black leading-snug text-slate-900 tracking-tight mt-2">{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>




      <section id="apply" className="pb-24 pt-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2.5rem] border border-rose-200 bg-white p-6 shadow-[0_30px_120px_rgba(248,113,113,0.12)] sm:p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-rose-500">Ready to join?</p>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">พร้อมก้าวสู่มนุษย์พันธุ์ใหม่<span className="inline-block">ไปด้วยกัน</span></h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">ก้าวข้ามทุกขีดจำกัด ปลดล็อกศักยภาพธุรกิจและทีมการตลาดของคุณไปกับวิทยากรระดับแนวหน้า และการผสานพลังของกลยุทธ์และการใช้งาน AI</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Left Column: Contact Channels */}
              <div className="rounded-3xl border border-slate-200 bg-[#f8faff] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-black text-rose-500 mb-6 tracking-normal">สอบถามข้อมูลเพิ่มเติมที่</p>

                  {/* Line Official */}
                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm mb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#06c755]/10 text-[#06c755]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Line Official</span>
                      <span className="block text-base font-extrabold text-slate-800">@runbyspu</span>
                      <a href="https://lin.ee/8I9yHV6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-1 text-xs font-extrabold text-[#06c755] hover:underline">
                        แอดไลน์ lin.ee/8I9yHV6
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Tel */}
                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm mb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.145-.44.02-.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">เบอร์โทรศัพท์</span>
                      <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-0.5">
                        <a href="tel:0612745157" className="text-sm font-extrabold text-slate-800 hover:text-rose-500 transition">061-274-5157</a>
                        <span className="text-slate-300">,</span>
                        <a href="tel:0929889516" className="text-sm font-extrabold text-slate-800 hover:text-rose-500 transition">092-988-9516</a>
                      </div>
                      <span className="block text-[10px] text-slate-400 mt-0.5">*กดโทรออกเพื่อติดต่อฝ่ายบริการหลักสูตร</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">อีเมลติดต่อ</span>
                      <a href="mailto:runbyspu@gmail.com" className="block text-sm font-extrabold text-slate-800 hover:text-rose-500 transition mt-0.5">runbyspu@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Online Registration */}
              <div className="rounded-3xl border-2 border-rose-100 bg-[#fff5f6] p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-md relative overflow-hidden">
                <div className="flex flex-col items-center">
                  {/* Checkmark Badge */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-lg shadow-rose-200/50 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-rose-500">Registration</p>
                  <h3 className="text-xl font-black text-slate-900 mt-2 sm:text-2xl">กรอกใบสมัครเข้าร่วมโครงการ</h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed max-w-sm">
                    กรอกใบสมัครออนไลน์เพื่อยืนยันข้อมูลและเตรียมความพร้อมในการก้าวสู่การเปลี่ยนจากเดินเป็นวิ่งในโลกธุรกิจกับโครงการ R.U.N. by SPU
                  </p>
                </div>

                <div className="w-full mt-6">
                  <a
                    href="https://forms.gle/nkAMHRD2H13VVemD7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#ff3b60] to-[#ff5a79] hover:from-[#ff5a79] hover:to-[#ff3b60] text-white font-extrabold text-base sm:text-lg shadow-lg shadow-rose-200/60 transition duration-300 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    กรอกใบสมัคร คลิกที่นี่
                  </a>
                  <span className="block text-[10px] text-rose-400 font-bold mt-2.5 tracking-normal">*สมัครเรียนและลงทะเบียนเพื่อยืนยันสิทธิ์ทันที</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#hero" className="rounded-2xl bg-rose-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-600">กลับขึ้นด้านบน</a>
              <a href="mailto:runbyspu@gmail.com" className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">ติดต่อทีมงาน</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
