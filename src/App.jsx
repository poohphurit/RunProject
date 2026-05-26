import React from 'react';
import speakerAn from './assets/speaker-an.png';
import speakerKriengkrai from './assets/speaker-kriengkrai.png';
import speakerSaran from './assets/speaker-saran.png';
import syllabusDay1 from './assets/syllabus-day1.png';
import syllabusDay2 from './assets/syllabus-day2.png';
import syllabusDay3 from './assets/syllabus-day3.png';
import syllabusDay4 from './assets/syllabus-day4.png';

const syllabus = [
  {
    day: 'DAY 1',
    date: '3 ก.ค. 2569',
    theme: 'Brand + Marketing + Personal Branding',
    subTheme: 'ลุกขึ้นยืน - เปิดตาเห็นสนามรบใหม่ สร้างตัวตนให้ทรงพลัง',
    topics: [
      {
        time: '10.00 - 12.00 น.',
        title: 'AI Strategy Revolution',
        speaker: 'คุณอ้น ปฤณ (AEIOU)',
        company: 'บริษัท/แบรนด์ AEIOU Solution Co.,Ltd.',
        status: 'Confirmed',
        headline: 'ถอดรหัส Master Marketing Canvas & New Marketing Funnel ยุคปัจจุบัน',
        detail: 'ปรับมายด์เซ็ตการตลาดใหม่ให้ทันโลก! วิเคราะห์และวางแผนกลยุทธ์ตั้งแต่ต้นน้ำยันปลายน้ำเพื่อหาช่องโหว่ทางธุรกิจ',
      },
      {
        time: '13.00 - 15.00 น.',
        title: 'CEO Branding - The Power of Personal Authority',
        speaker: 'คุณแอ๊ม ศรัณย์',
        company: 'บริษัท/แบรนด์ Uppercuz Creative Agency',
        status: 'Confirmed',
        headline: 'วาง Positioning ผู้นำในยุคที่ลูกค้าไว้ใจ “คน” มากกว่า “ร้าน”',
        detail: 'ดึงศักยภาพของคุณออกมาเป็นจุดขาย! เรียนรู้วิธีการสื่อสารให้ทรงพลัง เพื่อก้าวขึ้นเป็นผู้นำทางความคิด',
      },
      {
        time: '15.30 - 17.30 น.',
        title: 'Guest Speaker CEO Branding',
        speaker: '',
        company: '',
        status: 'TBA',
        headline: 'ทำไมตัวตนผู้นำสำคัญกว่าสินค้า',
        detail: 'เจาะลึกเบื้องหลังว่าคาแรกเตอร์ของเจ้าของธุรกิจ ช่วยขับเคลื่อนยอดขายและสร้างแฟนคลับที่เหนียวแน่นได้อย่างไร',
      },
    ],
  },
  {
    day: 'DAY 2',
    date: '10 ก.ค. 2569',
    theme: 'Storytelling + Short form video + Live Commerce',
    subTheme: 'เริ่มวิ่ง - เล่าเรื่องให้ขายได้ สร้างผลงานชิ้นแรก',
    topics: [
      {
        time: '10.00 - 12.00 น.',
        title: 'Practical Storytelling & Conversion Copywriting',
        speaker: '',
        company: '',
        status: 'TBA',
        headline: 'สร้างเรื่องเล่าสะกดใจ เปลี่ยนคนอ่านเป็นคนจ่ายเงิน',
        detail: 'หมดปัญหาคอนเทนต์ฝืด! เรียนรู้ศิลปะการเล่าเรื่องที่กระตุ้นอารมณ์ร่วม ผสานเทคนิคการเขียนคำโฆษณาที่มุ่งเน้นผลลัพธ์',
      },
      {
        time: '13.00 - 15.00 น.',
        title: 'Short Video + TikTok Marketing',
        speaker: 'วิทยากร ทีมงาน Uppercuz',
        company: 'บริษัท/แบรนด์ Uppercuz Creative Agency',
        status: 'Confirmed',
        headline: 'สูตรคลิปสั้นปิดการขาย อัลกอริทึม TikTok ระบบ Affiliate',
        detail: 'เจาะลึกความลับของวิดีโอสั้น เข้าใจระบบการดันฟีด และเรียนรู้วิธีสร้างกองทัพนักขายผ่านระบบ Affiliate',
      },
      {
        time: '15.30 - 17.30 น.',
        title: 'Live Commerce Mastery',
        speaker: 'คุณแอ๊ม ศรัณย์',
        company: 'บริษัท/แบรนด์ Uppercuz Creative Agency',
        status: 'Confirmed',
        headline: 'จิตวิทยาขายผ่านจอ สคริปต์ 3 จังหวะ Hook-Pitch-Close',
        detail: 'ทลายกำแพงความกลัวหน้ากล้อง! ฝึกทักษะการไลฟ์สดแบบมือโปร ที่ทำให้ลูกค้าต้องรีบ F ก่อนของหมด',
      },
    ],
  },
  {
    day: 'DAY 3',
    date: '17 ก.ค. 2569',
    theme: 'AI Visual + AI Video + Agentic AI',
    subTheme: 'วิ่งเร็วขึ้น - ผลิตงานระดับโปร ต้นทุนต่ำลงหลายเท่า',
    topics: [
      {
        time: '10.00 - 12.00 น.',
        title: 'AI Graphic Design Mastery',
        speaker: 'วิทยากร คุณนัชชา กาญจนจิตรา (ปอง)',
        company: 'บริษัท/แบรนด์ Enkay Studio',
        status: 'Confirmed',
        headline: 'สร้าง Visual Identity และภาพโฆษณาระดับสตูดิโอด้วย Midjourney, Nano Banana',
        detail: 'เรียนรู้วิธีใช้ AI สร้างอัตลักษณ์แบรนด์ให้สวยหรู ดูแพง และดึงดูดสายตา ประหยัดเวลาและงบประมาณได้มหาศาล',
      },
      {
        time: '13.00 - 15.00 น.',
        title: 'AI Video Production',
        speaker: 'วิทยากร คุณกฤษ โฮสถาเลิศ (พี่กฤษ)',
        company: 'บริษัท/แบรนด์ Bigbrain & Marketmind',
        status: 'Confirmed',
        headline: 'ผลิตคลิป Short-form ครบวงจรด้วย AI ลงทั้ง TikTok, Reels, Shorts',
        detail: 'ร่นระยะเวลาการทำวิดีโอจากหลายวันเหลือเพียงไม่กี่ชั่วโมง! ด้วย AI ที่ช่วยเนรมิตคลิปวิดีโอสั้นแบบรวดเดียวจบ',
      },
      {
        time: '15.30 - 17.30 น.',
        title: 'Agentic AI for Marketing',
        speaker: 'วิทยากร คุณ ปตุณ จำเริญพานิช (อั้น)',
        company: 'บริษัท/แบรนด์ AEIOU Solution Co.,Ltd.',
        status: 'Confirmed',
        headline: 'ใช้ AI ช่วยทำงานจริง ตั้งแต่คอนเทนต์จนถึง workflow',
        detail: 'ยกระดับ AI ให้เป็นเสมือนพนักงานดีเด่นประจำทีม สร้างระบบ Automation ในการทำงาน',
      },
    ],
  },
  {
    day: 'DAY 4',
    date: '24 ก.ค. 2569',
    theme: 'New Product + AI Search + Sustain Marketing',
    subTheme: 'วิ่งนำหน้า - นวัตกรรมใหม่ เครื่องมือใหม่ ช่องทางใหม่',
    topics: [
      {
        time: '10.00 - 12.00 น.',
        title: 'New Product Creation for New Market',
        speaker: 'วิทยากร คุณพลภัทร ทรงรัตนจิตติ (ป๊อป)',
        company: 'บริษัท/แบรนด์ Whale Ground',
        status: 'Confirmed',
        headline: 'ออกแบบ Product-Market Fit ปรับ Packaging ให้ตรงกลุ่มเป้าหมาย',
        detail: 'ค้นหาโอกาสในตลาดที่คนอื่นมองไม่เห็น! เรียนรู้วิธีพัฒนาสินค้าหรือปรับปรุงแพ็กเกจจิ้ง',
      },
      {
        time: '13.00 - 15.00 น.',
        title: 'กลยุทธ์ให้แบรนด์ติดคำแนะนำของ AI Search (GEO)',
        speaker: 'วิทยากร คุณศิริพงษ์ กลิ่นขจร (ไอซ์)',
        company: 'บริษัท/แบรนด์ Nerd Optimize',
        status: 'Confirmed',
        headline: 'ทำให้แบรนด์ถูกหยิบไปแนะนำโดย AI Search ได้จริง',
        detail: 'ก้าวข้าม SEO แบบเดิมๆ สู่ GEO (Generative Engine Optimization) ทำให้ธุรกิจของคุณกลายเป็นตัวเลือกอันดับหนึ่ง',
      },
      {
        time: '15.30 - 17.30 น.',
        title: 'Makoto Marketing + New Human Value',
        speaker: 'วิทยากร ดร.กฤตินี พงษ์ธนเลิศ (อ.เกด)',
        company: 'บริษัท/แบรนด์ เกตุดี Marumura',
        status: 'Confirmed_NoBadge',
        headline: 'การตลาดเชิงคุณค่าที่มนุษย์และความไว้วางใจอยู่ตรงกลาง',
        detail: 'สรุปจบด้วยแก่นแท้ของการทำธุรกิจที่ยั่งยืน เรียนรู้ปรัชญาการตลาดสไตล์ญี่ปุ่นที่เน้น "ความจริงใจ"',
      },
    ],
  },
];

const directors = [
  {
    name: 'คุณ ปฤณ จำเริญพานิช',
    role: 'FOUNDER & CEO AEIOU',
    bio: 'กลยุทธ์การตลาดและ AI ที่ใช้ได้จริงสำหรับธุรกิจยุคใหม่',
    image: speakerAn,
    accent: 'from-rose-500 to-orange-400',
  },
  {
    name: 'คุณ ศรัณย์ แบ่งกุศลจิต',
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

const speakers = [
  {
    name: 'คุณ ปฤณ จำเริญพานิช (อ้น)',
    role: 'AEIOU Solution',
    bio: 'กลยุทธ์การตลาดและ AI ที่ใช้ได้จริงสำหรับธุรกิจยุคใหม่',
    image: '/speakers/speaker-an.png?v=20260526',
    accent: 'from-rose-500 to-orange-400',
  },
  {
    name: 'คุณ ศรัณย์ แบ่งกุศลจิต (แอ๊ม)',
    role: 'Uppercuz Creative',
    bio: 'สาย TikTok การตลาดคอนเทนต์ และระบบปิดการขายที่โตไว',
    image: '/speakers/speaker-saran.png?v=20260526',
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    name: 'ดร.กฤตินี พงษ์ธนเลิศ (อ.เกด)',
    role: 'เกตุวดี Marumura',
    bio: 'ปรัชญาการตลาดสไตล์ญี่ปุ่นที่เน้นความจริงใจ สร้างคุณค่าที่ยั่งยืน',
    image: '/speakers/speaker-kritinee.png?v=20260526',
    accent: 'from-violet-500 to-fuchsia-400',
  },
  {
    name: 'คุณ กฤษ โฮสถาเลิศ (กฤษ)',
    role: 'Bigbrain & Marketmind',
    bio: 'ผลิตคลิป Short-form ครบวงจรด้วย AI ลงทั้ง TikTok, Reels, Shorts',
    image: '/speakers/speaker-kris.png?v=20260526',
    accent: 'from-emerald-500 to-teal-400',
  },
  {
    name: 'คุณ นัชชา กาญจนจิตรา (ปอง)',
    role: 'Enkay Studio',
    bio: 'ผู้เชี่ยวชาญการใช้ AI สร้างภาพโฆษณาระดับสตูดิโอและ Visual Identity',
    image: '/speakers/speaker-pong.png?v=20260526',
    accent: 'from-purple-500 to-pink-400',
  },
  {
    name: 'คุณ ศิริพงษ์ กลิ่นขจร (ไอซ์)',
    role: 'Nerd Optimize',
    bio: 'ผู้เชี่ยวชาญ GEO (Generative Engine Optimization) และ SEO ยุคใหม่',
    image: '/speakers/speaker-ice.png?v=20260526',
    accent: 'from-blue-500 to-indigo-400',
  },
  {
    name: 'คุณ กชวรรณ สัจจา (มด)',
    role: 'แบรนด์ KAGE',
    bio: 'เจ้าของแบรนด์เครื่องสำอาง KAGE ที่โด่งดังด้วยการสร้างตัวตนและการตลาดออนไลน์',
    image: '/speakers/speaker-mod.png?v=20260526',
    accent: 'from-rose-400 to-pink-500',
  },
  {
    name: 'คุณ รพีพงศ์ ปัญจคุณาธร (ซัน)',
    role: 'ห้างสรรพสินค้า สหไทย การ์เด้น พลาซ่า',
    bio: 'ผู้บริหารห้างสรรพสินค้ายุคใหม่ ผู้นำนวัตกรรมการตลาดดิจิทัลสู่ต่างจังหวัด',
    image: '/speakers/speaker-sun.png?v=20260526',
    accent: 'from-amber-500 to-orange-500',
  },
  {
    name: 'คุณ พลภัทร ทรงรัตนจิตติ (ป๊อป)',
    role: 'Whale Ground',
    bio: 'ผู้ออกแบบ Product-Market Fit และการปรับปรุงบรรจุภัณฑ์เพื่อเจาะกลุ่มตลาดใหม่',
    image: '/speakers/speaker-pop.png?v=20260526',
    accent: 'from-cyan-500 to-blue-500',
  },
];

const sections = [
  { id: 'hero', label: 'หน้าแรก' },
  { id: 'concept', label: 'เกี่ยวกับหลักสูตร R.U.N' },
  { id: 'problem', label: 'ทำไมต้อง R.U.N.' },
  { id: 'syllabus', label: 'Course Outline' },
  { id: 'directors', label: 'Directors' },
  { id: 'speakers', label: 'วิทยากร' },
  { id: 'apply', label: 'การรับสมัคร' },
];



function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-5xl px-6 text-center">
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.45em] text-rose-500">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl leading-relaxed md:leading-normal">{title}</h2>
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
            <div className="flex items-center">
              <img src="/logo.png" alt="R.U.N. by SPU" className="h-10 w-auto object-contain" />
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
            src="/hero-banner.jpg?v=20260526_v2"
            alt="R.U.N. by SPU - Revenue. Unlock. Now. รอด รวย เริ่ม เริศ"
            className="hidden sm:block w-full h-auto select-none pointer-events-none"
          />

          {/* Mobile Image */}
          <img
            src="/hero-banner-mobile.jpg?v=20260526_v2"
            alt="R.U.N. by SPU - Revenue. Unlock. Now. รอด รวย เริ่ม เริศ"
            className="block sm:hidden w-full h-auto select-none pointer-events-none"
          />

          {/* Interactive Absolute-Positioned Overlay Buttons */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[29%] sm:left-[32.4%] sm:-translate-x-1/2 sm:bottom-[13%] md:bottom-[14%] lg:bottom-[15%] flex gap-3.5 sm:gap-4.5 z-20 w-max">
            <a
              href="#syllabus"
              className="rounded-full bg-[#0f172a] py-4 px-0 w-[155px] sm:w-auto sm:px-9 sm:py-4 md:px-11 md:py-4.5 lg:px-14 lg:py-5.5 text-[15px] sm:text-base md:text-lg lg:text-xl font-extrabold text-white shadow-[0_8px_30px_rgba(15,23,42,0.35)] transition duration-300 hover:scale-[1.05] hover:bg-[#1e293b] active:scale-[0.98] inline-flex items-center justify-center text-center"
            >
              ดูตารางเรียน
            </a>
            <a
              href="#apply"
              className="rounded-full bg-[#ff3b60] py-4 px-0 w-[155px] sm:w-auto sm:px-9 sm:py-4 md:px-11 md:py-4.5 lg:px-14 lg:py-5.5 text-[15px] sm:text-base md:text-lg lg:text-xl font-extrabold text-white shadow-[0_8px_30px_rgba(255,59,96,0.45)] transition duration-300 hover:scale-[1.05] hover:bg-[#ff5a79] active:scale-[0.98] inline-flex items-center justify-center text-center"
            >
              สมัครเรียน
            </a>
          </div>
        </div>
      </section>

      <section id="concept" className="py-10 md:py-14 border-b border-slate-200/50 bg-[#f4f7ff]">
        <SectionTitle
          eyebrow="R.U.N. Concept"
          title="คอนเซปต์หลัก (Revenue. Unlock. Now.)"
          subtitle="หัวใจสำคัญของหลักสูตรที่จะเปลี่ยนโฉมธุรกิจและการทำงานของคุณอย่างยั่งยืน"
        />

        {/* 3 Core Cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-6 sm:grid-cols-1 lg:grid-cols-3">
          {/* Card 1: REVENUE */}
          <article className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(244,63,94,0.06)] flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500 text-white shadow-lg shadow-rose-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="inline-block px-4 py-1.5 rounded-lg bg-rose-500 text-white font-extrabold text-xs tracking-wider uppercase mt-6 mb-4">
                REVENUE
              </span>
              <p className="text-base font-semibold leading-relaxed text-slate-600 px-2">
                ทุกเนื้อหามุ่งสร้างยอดขายที่วัดผลได้จริง ไม่ใช่ความรู้ลอยๆ
              </p>
            </div>
          </article>

          {/* Card 2: UNLOCK */}
          <article className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(244,63,94,0.06)] flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500 text-white shadow-lg shadow-rose-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="inline-block px-4 py-1.5 rounded-lg bg-rose-500 text-white font-extrabold text-xs tracking-wider uppercase mt-6 mb-4">
                UNLOCK
              </span>
              <p className="text-base font-semibold leading-relaxed text-slate-600 px-2">
                เปิดประตูสู่เครื่องมือ ทักษะ กลยุทธ์ที่ทำลายกำแพงระหว่างธุรกิจเล็ก กับศักยภาพระดับองค์กรใหญ่
              </p>
            </div>
          </article>

          {/* Card 3: NOW */}
          <article className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(244,63,94,0.06)] flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500 text-white shadow-lg shadow-rose-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2" />
                </svg>
              </div>
              <span className="inline-block px-4 py-1.5 rounded-lg bg-rose-500 text-white font-extrabold text-xs tracking-wider uppercase mt-6 mb-4">
                NOW
              </span>
              <p className="text-base font-semibold leading-relaxed text-slate-600 px-2">
                เรียนวันนี้ ใช้ได้พรุ่งนี้ ทุก Workshop สร้างผลงานจริงในห้องเรียน
              </p>
            </div>
          </article>
        </div>

        {/* 4 Process/Timeline Steps */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 mt-24">
          {[
            {
              tag: 'รอด',
              title: 'ลุกขึ้นยืน',
              desc: 'เห็นสนามรบใหม่อย่างกระจ่าง หมดยุคยืนนิ่งในความมืด',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <circle cx="12" cy="4" r="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8m-4 0v6M9 20l3-5 3 5" />
                </svg>
              ),
            },
            {
              tag: 'รวย',
              title: 'เริ่มวิ่ง',
              desc: 'ครบด้วยเครื่องมือและท่าไม้ตายที่สร้างรายได้เพิ่มได้ทันที',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
              ),
            },
            {
              tag: 'เริ่ม',
              title: 'วิ่งเร็วขึ้น',
              desc: 'ลงมือทำจริงได้ทุกวันจาก Workshop ที่ใช้ได้จริง พร้อมใช้งาน',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5L21 3m0 0l-5.5 5.5M21 3v5.5m-11 5.5L4 20m0 0v-5.5M4 20h5.5M10.5 7.5L4 14M16.5 13.5L10 20" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 6a8 8 0 00-8 8v1.5a1.5 1.5 0 001.5 1.5H9a8 8 0 008-8v-1.5a1.5 1.5 0 00-1.5-1.5H14z" />
                </svg>
              ),
            },
            {
              tag: 'เลิศ',
              title: 'วิ่งนำหน้า',
              desc: 'ก้าวข้ามขีดจำกัดเดิม ทิ้งคู่แข่งไว้เบื้องหลัง',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a4 4 0 004-4V5H8v6a4 4 0 004 4zm0 0v4m0 0h3m-3 0H9m11-9h-2v2a3 3 0 01-3 3M4 10h2v2a3 3 0 003 3" />
                </svg>
              ),
            },
          ].map((step, idx) => (
            <article key={step.tag} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl relative group text-center flex flex-col items-center justify-start h-full">
              {/* Connector Arrow for Desktop */}
              {idx < 3 && (
                <div className="hidden lg:flex absolute top-1/2 left-full -translate-y-1/2 w-10 items-center justify-center text-rose-300 z-10">
                  <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 mx-auto mb-4 group-hover:scale-110 transition duration-300 shadow-sm">
                {step.icon}
              </div>

              {/* Badge Title */}
              <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm mb-4 transition duration-300 group-hover:border-rose-300 group-hover:bg-rose-50/30">
                <span className="text-rose-500 font-extrabold text-sm">{step.tag}</span>
                {step.hasEquals !== false && <span className="text-slate-400 font-black text-sm">=</span>}
                <span className="text-slate-800 font-black text-sm">{step.title}</span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600">
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="audience" className="py-10 md:py-14 border-b border-slate-200/50 bg-[#f4f7ff]">
        <SectionTitle
          eyebrow="TARGET AUDIENCE"
          title="หลักสูตรนี้เหมาะกับใคร"
          subtitle="R.U.N. ออกแบบมาสำหรับผู้ประกอบการ 3 กลุ่ม ที่อยู่คนละจุดของเส้นทาง แต่วิ่งสู่เป้าหมายเดียวกัน"
        />

        {/* Groups 1, 2 & 3 Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
          {/* Card: กลุ่ม 1 */}
          <article className="group relative rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(244,63,94,0.06)] flex flex-col justify-between">
            <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-rose-500 px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-rose-200">
              กลุ่ม 1
            </span>
            <div>
              <div className="flex items-start gap-4 mt-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100 text-rose-500 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 leading-tight">
                    เจ้าของธุรกิจ
                  </h4>
                  <p className="text-sm font-bold text-slate-400 mt-1">
                    "กำลังเดินอยู่ ต้องเปลี่ยนมาวิ่ง"
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                <li className="flex items-start gap-3 text-base font-semibold text-slate-600">
                  <svg className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>ยอดขายชะลอ สูตรเดิมไม่ตอบโจทย์</span>
                </li>
                <li className="flex items-start gap-3 text-base font-semibold text-slate-600">
                  <svg className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>คู่แข่งหน้าใหม่วิ่งแซง มองไม่เห็นทิศทางที่จะปรับตัว</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-rose-50/50 border border-rose-100/50 p-4 transition duration-300 group-hover:bg-rose-50 group-hover:border-rose-200">
              <p className="text-sm font-black text-rose-600 uppercase tracking-wider mb-1">
                &gt; มาเพื่อ : รอดแล้วรวย
              </p>
              <p className="text-sm font-bold text-slate-800">
                เปลี่ยนจากเดินช้า สู่วิ่งด้วยกลยุทธ์ยุคใหม่
              </p>
            </div>
          </article>

          {/* Card: กลุ่ม 2 */}
          <article className="group relative rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(244,63,94,0.06)] flex flex-col justify-between">
            <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-rose-500 px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-rose-200">
              กลุ่ม 2
            </span>
            <div>
              <div className="flex items-start gap-4 mt-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100 text-rose-500 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 leading-tight">
                    Start Up ที่ต้องการเร่งการเติบโตของธุรกิจ
                  </h4>
                  <p className="text-sm font-bold text-slate-400 mt-1">
                    "วิ่งอยู่แล้ว ก็ต้องวิ่งเร็วขึ้น"
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                <li className="flex items-start gap-3 text-base font-semibold text-slate-600">
                  <svg className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>มีของดีแต่ขาดกลยุทธ์การตลาดยุคใหม่</span>
                </li>
                <li className="flex items-start gap-3 text-base font-semibold text-slate-600">
                  <svg className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>ขาด Storytelling และต้องการหาจุดแตกต่างในธุรกิจ</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-rose-50/50 border border-rose-100/50 p-4 transition duration-300 group-hover:bg-rose-50 group-hover:border-rose-200">
              <p className="text-sm font-black text-rose-600 uppercase tracking-wider mb-1">
                &gt; มาเพื่อ : วิ่งเร็วกว่าคู่แข่ง
              </p>
              <p className="text-sm font-bold text-slate-800">
                ติดจรวดด้วย Branding, Marketing, Storytelling และ AI
              </p>
            </div>
          </article>

          {/* Card: กลุ่ม 3 */}
          <article className="group relative rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(244,63,94,0.06)] flex flex-col justify-between">
            <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-rose-500 px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-rose-200">
              กลุ่ม 3
            </span>
            <div>
              <div className="flex items-start gap-4 mt-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100 text-rose-500 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 leading-tight">
                    ผู้ที่พร้อมเริ่มธุรกิจใหม่
                  </h4>
                  <p className="text-sm font-bold text-slate-400 mt-1">
                    "ยังไม่ได้ออกวิ่ง แต่อยากวิ่งถูกทางตั้งแต่ก้าวแรก"
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                <li className="flex items-start gap-3 text-base font-semibold text-slate-600">
                  <svg className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>มีไอเดีย มีทุน แต่ไม่อยากเสียเวลา 2-3 ปี ไปกับการลองผิดลองถูก</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-rose-50/50 border border-rose-100/50 p-4 transition duration-300 group-hover:bg-rose-50 group-hover:border-rose-200">
              <p className="text-sm font-black text-rose-600 uppercase tracking-wider mb-1">
                &gt; มาเพื่อ : วิ่งถูกทางตั้งแต่ก้าวแรก
              </p>
              <p className="text-sm font-bold text-slate-800">
                ข้ามความผิดพลาดราคาแพง ด้วยสูตรจากคนที่ทำสำเร็จแล้ว
              </p>
            </div>
          </article>
        </div>



        {/* Bottom summary features row */}
        <div className="mx-auto mt-16 max-w-5xl border-t border-slate-200/60 pt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-6">
          {[
            {
              text: 'เป้าหมายเดียวกัน วิ่งให้ถึงความสำเร็จก่อนที่โลกจะวิ่งหนีไป',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              ),
            },
            {
              text: '3 จุดเริ่มต้น แต่มีเป้าหมายปลายทางเดียวกัน',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
            {
              text: 'เรียนรู้ เสริมสปีด ก้าวกระโดดด้วยกลยุทธ์ และ AI',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
            },
            {
              text: 'รอด แล้ว รวย จากประสบการณ์ผู้ประกอบการตัวจริง',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a4 4 0 004-4V5H8v6a4 4 0 004 4zm0 0v4m0 0h3m-3 0H9m11-9h-2v2a3 3 0 01-3 3M4 10h2v2a3 3 0 003 3" />
                </svg>
              ),
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start bg-white rounded-2xl border border-slate-100 p-5 shadow-sm transition duration-300 hover:shadow-md hover:border-slate-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                {item.icon}
              </div>
              <p className="text-sm font-bold leading-relaxed text-slate-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="problem" className="py-10 md:py-14">
        <SectionTitle title="ทำไมต้องวิ่งตอนนี้?" />

        {/* Why Run Now - Premium Card */}
        <div className="mx-auto mt-12 mb-16 max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-tr from-rose-50/20 via-white to-slate-50/50 border border-slate-200/80 p-8 md:p-12 shadow-sm text-center">
            {/* Background design elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-rose-100/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-slate-100/30 rounded-full blur-3xl" />

            {/* Quote Block */}
            <div className="relative max-w-3xl mx-auto space-y-6">
              <span className="text-6xl font-serif text-rose-200/70 absolute -top-8 -left-4 select-none leading-none">“</span>
              <p className="text-xl sm:text-2xl font-black text-slate-900 leading-snug px-6 relative z-10">
                ในขณะที่คุณยังเดินอยู่ <br />
                <span className="text-rose-500 font-black">“โลกกำลังวิ่ง”</span>
              </p>

              <p className="text-xl sm:text-2xl font-black text-slate-900 leading-relaxed px-6 relative z-10 mt-6">
                เพราะตลาดเปลี่ยนเร็ว ลูกค้าเปลี่ยนวิธีตัดสินใจ และการแข่งขันใหม่ไม่ได้วัดกันที่ความรู้เพียงอย่างเดียว
              </p>
              <span className="text-6xl font-serif text-rose-200/70 absolute -bottom-12 -right-4 select-none leading-none">”</span>
            </div>

            {/* High Impact Warning Badge */}
            <div className="mt-10 inline-block bg-rose-50 border border-rose-100 px-6 py-3 rounded-full shadow-sm shadow-rose-100/50 transition duration-300 hover:scale-105">
              <p className="text-base sm:text-lg font-black text-rose-600">
                ถ้าคุณไม่วิ่ง คุณไม่ได้แค่ช้า คุณกำลังถอยหลัง
              </p>
            </div>

            {/* Context details as 2-column or list */}
            <div className="mt-12 pt-8 border-t border-slate-100/80 grid gap-6 md:grid-cols-2 text-left">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition duration-300 hover:shadow-md">
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-900 text-base leading-snug">ภูมิทัศน์ธุรกิจ 2025-2026 เปลี่ยนถอนรากถอนโคน</h5>
                  <p className="text-sm font-semibold text-slate-500 mt-1">ทุกมิติ (STEEP) สั่นสะเทือนพร้อมกันอย่างรุนแรง</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition duration-300 hover:shadow-md">
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-900 text-base leading-snug">เหมือนวันที่โลกเปลี่ยนจาก Offline สู่ Online</h5>
                  <p className="text-sm font-semibold text-slate-500 mt-1">แต่รอบนี้คือการก้าวจาก <span className="text-rose-500 font-extrabold">Online สู่ AI</span> ที่เร็วกว่าเดิมหลายเท่า</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Human Core & 4 Pillars Section */}
      <section id="human-core" className="py-10 md:py-14 border-b border-slate-200/50">
        <SectionTitle
          eyebrow="HUMAN CORE VALUE"
          title={
            <>
              คุณค่าของความเป็นมนุษย์
              <br />
              คือแก่นที่ AI ไม่มีวันทดแทน
            </>
          }
          subtitle="สิ่งที่ทำให้ธุรกิจชนะในระยะยาวไม่ใช่เทคโนโลยี แต่คือความเป็นมนุษย์ที่สร้างผลลัพธ์ผ่านเทคโนโลยี"
        />

        <div className="mx-auto mt-12 max-w-4xl px-6 space-y-12">
          {/* Intro Box */}
          <div className="rounded-[2rem] bg-slate-50 border border-slate-200/60 p-8 md:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl" />
            <p className="text-base sm:text-lg font-bold leading-relaxed text-slate-700 relative z-10">
              สิ่งที่ทำให้ธุรกิจชนะในระยะยาวไม่ใช่เทคโนโลยี แต่คือความคิดสร้างสรรค์ ความเข้าอกเข้าใจลูกค้า สัญชาตญาณที่ AI จำลองไม่ได้ <strong className="text-rose-500 font-extrabold">R.U.N. จึงสอนสิ่งที่เป็น Core Competitive ของมนุษย์เป็นหลัก</strong> ส่วน AI ทำหน้าที่เป็น <strong className="text-slate-900 font-extrabold">"ตัวขยายผล"</strong> ไม่ใช่สิ่งที่มาแทนที่
            </p>
          </div>

          {/* Pillars Section Header */}
          <div className="text-center">
            <h4 className="text-2xl font-black text-slate-900 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-rose-500/20" />
              โฟกัสเดียว: สร้างยอดขาย ผ่าน 4 เสาหลัก
              <span className="h-[2px] w-8 bg-rose-500/20" />
            </h4>
          </div>

          {/* Pillars Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Branding & Personal Branding',
                desc: 'ลูกค้ามอบ Trust ให้แบรนด์ที่จริงใจ และจับต้องได้ด้วย Personal Brand เป็นยุคที่ผู้นำมีมูลค่าสูงกว่าสินค้า',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: 'New Marketing 2026',
                desc: 'กลยุทธ์เดิมใช้ไม่ได้ พฤติกรรมลูกค้าพลิกด้วย AI เขียนกติกาใหม่ ผู้ที่ไม่ปรับจะถูกแซงโดยไม่ทันตั้งตัว',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v3.75m-18 0h18" />
                  </svg>
                ),
              },
              {
                title: 'Storytelling',
                desc: 'เรื่องเล่าที่จับใจ กระตุ้นอารมณ์ ทำให้ลูกค้าเป็นส่วนหนึ่งของแบรนด์ โดยเฉพาะ Short-Form Video ที่กลายเป็นภาษาหลัก',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                ),
              },
              {
                title: 'Product Development',
                desc: 'สินค้าที่ดีต้องออกแบบใหม่ให้ตอบโจทย์ลูกค้าทุกกลุ่มวัยที่เปลี่ยนไป สินค้าที่ดีคือรากฐานที่การตลาดทดแทนไม่ได้',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                ),
              },
            ].map((pillar, idx) => (
              <div key={idx} className="group relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md hover:border-rose-200">
                <div className="flex gap-4 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100 text-rose-500 shadow-sm group-hover:scale-110 transition duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-base leading-snug">{pillar.title}</h5>
                    <p className="text-slate-600 font-bold text-sm sm:text-base mt-2.5 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content Ratio Section */}
      <section id="course-ratio" className="py-10 md:py-14 border-b border-slate-200/50">
        <SectionTitle
          eyebrow="COURSE STRUCTURE"
          title="เรียนอะไรบ้าง ?"
        />

        <div className="mx-auto mt-12 max-w-5xl px-6 grid gap-12 md:grid-cols-2 items-stretch">
          {/* Left: Donut Chart */}
          <div className="flex flex-col items-center justify-center bg-white border border-slate-200/80 rounded-[2rem] p-8 shadow-sm relative overflow-hidden h-full">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-500/5 rounded-full blur-2xl" />

            {/* SVG Donut Chart */}
            <div className="relative w-60 h-60 md:w-64 md:h-64 flex items-center justify-center">
              <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100">
                {/* Marketing 50% - Red */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#f43f5e" /* rose-500 */
                  strokeWidth="12"
                  strokeDasharray="119.38 238.76"
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
                {/* AI 30% - Dark Slate */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#0f172a" /* slate-900 */
                  strokeWidth="12"
                  strokeDasharray="71.63 238.76"
                  strokeDashoffset="-119.38"
                  transform="rotate(-90 50 50)"
                />
                {/* Real Case 20% - Slate 300 */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#cbd5e1" /* slate-300 */
                  strokeWidth="12"
                  strokeDasharray="47.75 238.76"
                  strokeDashoffset="-191.01"
                  transform="rotate(-90 50 50)"
                />
              </svg>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-slate-800 tracking-wider">R.U.N.</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Syllabus</span>
              </div>
            </div>

            {/* Custom chart legend with bubble tags */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-100 px-3.5 py-1 text-xs font-bold text-rose-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                Marketing 50%
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1 text-xs font-bold text-white shadow-sm">
                <span className="h-2 w-2 rounded-full bg-white" />
                AI 30%
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-bold text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                Real Case 20%
              </span>
            </div>
          </div>

          {/* Right: Content Details Card (Without Black Background) */}
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm space-y-6 relative overflow-hidden h-full flex flex-col justify-center">
            {/* Header Badge */}
            <div className="self-center bg-rose-500 text-white font-black text-base sm:text-lg md:text-xl px-8 py-3 sm:px-10 sm:py-3.5 rounded-full shadow-md shadow-rose-200/50 mb-4">
              สัดส่วนเนื้อหาของหลักสูตร
            </div>

            <div className="divide-y divide-slate-100">
              {/* Item 1 */}
              <div className="pb-5 pt-2">
                <h5 className="font-extrabold text-rose-600 text-base md:text-lg">
                  50% : ทักษะแก่นของมนุษย์ที่ AI ทดแทนไม่ได้
                </h5>
                <p className="font-bold text-slate-800 mt-1.5 text-sm sm:text-base">
                  Branding • Marketing • Storytelling • Product
                </p>
                <p className="text-slate-500 font-semibold text-xs sm:text-sm mt-1">
                  รายละเอียดทักษะสำคัญในการสร้างธุรกิจ
                </p>
              </div>

              {/* Item 2 */}
              <div className="py-5">
                <h5 className="font-extrabold text-rose-600 text-base md:text-lg">
                  30% : ตัวขยายผล ทำงานเร็วขึ้น สวยขึ้น ต้นทุนต่ำลง
                </h5>
                <p className="font-bold text-slate-800 mt-1.5 text-sm sm:text-base">
                  AI • MarTech (Canva, CapCut, Midjourney, ChatGPT)
                </p>
              </div>

              {/* Item 3 */}
              <div className="pt-5">
                <h5 className="font-extrabold text-rose-600 text-base md:text-lg">
                  20% : สมการความสำเร็จ ไม่ใช่ทฤษฎีจากตำรา
                </h5>
                <p className="font-bold text-slate-800 mt-1.5 text-sm sm:text-base">
                  Real Case จาก Guest Speaker (ผู้ประกอบการตัวจริง)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Learning Area Cards */}
        <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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

      <section id="syllabus" className="py-10 md:py-14">
        <SectionTitle
          title={
            <>
              หลักสูตร 4 วัน ลงมือทำจริง
              <br />
              เปลี่ยนจากเดินเป็นวิ่ง
            </>
          }
          subtitle="แต่ละวันผสมกลยุทธ์ คอนเทนต์ และ AI เพื่อให้ผู้เรียนเห็นภาพรวมครบวงจร"
        />
        <div className="mx-auto mt-12 max-w-4xl space-y-8 px-6">
          {[
            { img: syllabusDay1, alt: "DAY 1 - Brand + Marketing + Personal Branding" },
            { img: syllabusDay2, alt: "DAY 2 - Storytelling + Short-form Video + Live Commerce" },
            { img: syllabusDay3, alt: "DAY 3 - AI Visual + AI Video + Agentic AI" },
            { img: syllabusDay4, alt: "DAY 4 - New Product + AI Search + Sustain Marketing" },
          ].map((day, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
            >
              <img
                src={day.img}
                alt={day.alt}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="directors" className="py-10 md:py-14 bg-[#f4f7ff] border-t border-slate-200/50">
        <SectionTitle title="DIRECTORS" subtitle="ผู้กำกับดูแลและพัฒนาหลักสูตรตัวจริงที่ลงสนามทุกวัน" />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
          {directors.map((director) => (
            <article key={director.name} className="group rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(244,63,94,0.12)]">
              <SpeakerPortrait name={director.name} title={director.role} accent={director.accent} imageUrl={director.image} />
              <div className="p-4 pt-5">
                <h3 className="text-xl font-black text-slate-900 leading-tight">{director.name}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-wide text-rose-500">{director.role}</p>
                <p className="mt-3 text-base leading-relaxed text-slate-500">{director.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="speakers" className="py-10 md:py-14 border-t border-slate-200/50">
        <SectionTitle title="SPEAKERS" subtitle="วิทยากรผู้เชี่ยวชาญระดับแนวหน้าที่จะมาร่วมถ่ายทอดประสบการณ์" />
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





      <section id="apply" className="py-12 md:py-16 bg-[#f4f7ff] border-t border-slate-200/50">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-rose-500">Ready to join?</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl leading-tight">
            พร้อมก้าวสู่มนุษย์พันธุ์ใหม่<span className="inline-block">ไปด้วยกัน</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            ก้าวข้ามทุกขีดจำกัด ปลดล็อกศักยภาพธุรกิจและทีมการตลาดของคุณไปกับวิทยากรระดับแนวหน้า และการผสานพลังของกลยุทธ์และการใช้งาน AI
          </p>

          {/* ข้อมูลการเรียน (Course Info - Grid Layout) */}
          <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
            {/* Box 1 */}
            <div className="group bg-white border border-slate-200/80 rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(244,63,94,0.05)] hover:-translate-y-1 transition duration-300 text-center flex flex-col items-center justify-between">
              <div className="flex flex-col items-center w-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100/50 text-rose-500 mb-4 shadow-sm group-hover:scale-110 transition duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                </div>
                <span className="block text-lg font-black text-rose-500 mb-2">รุ่นที่ 1</span>
                <span className="block text-base font-extrabold text-slate-800 leading-snug">
                  เรียนทุกวันศุกร์ที่ <span className="text-rose-500 font-extrabold">3, 10, 17, 24</span> กรกฎาคม 2569
                </span>
              </div>
              <span className="block text-xs text-slate-400 font-extrabold mt-4 leading-relaxed">
                เปิดรับสมัครตั้งแต่วันนี้เป็นต้นไป<br />ปิดเมื่อผู้สมัครเต็ม
              </span>
            </div>

            {/* Box 2 */}
            <div className="group bg-white border border-slate-200/80 rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(244,63,94,0.05)] hover:-translate-y-1 transition duration-300 text-center flex flex-col items-center justify-between">
              <div className="flex flex-col items-center w-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100/50 text-rose-500 mb-4 shadow-sm group-hover:scale-110 transition duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="block text-lg font-black text-rose-500 mb-2">รุ่นที่ 2</span>
                <span className="block text-base font-extrabold text-slate-800 leading-snug">
                  ติดตามการเปิดรับสมัคร <span className="text-rose-500 font-extrabold">เร็วๆ นี้</span>
                </span>
              </div>
              <span className="block text-xs text-slate-400 font-extrabold mt-4">
                &nbsp;
              </span>
            </div>

            {/* Box 3 */}
            <div className="group bg-white border border-slate-200/80 rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(244,63,94,0.05)] hover:-translate-y-1 transition duration-300 text-center flex flex-col items-center justify-between">
              <div className="flex flex-col items-center w-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100/50 text-rose-500 mb-4 shadow-sm group-hover:scale-110 transition duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="block text-lg font-black text-rose-500 mb-2">เรียนจำนวน 4 ครั้ง</span>
                <span className="block text-base font-extrabold text-slate-800 leading-snug">
                  เวลา <span className="text-rose-500 font-extrabold">10.00</span> ถึง <span className="text-rose-500 font-extrabold">17.30</span> น.
                </span>
              </div>
              <span className="block text-xs text-slate-500 font-extrabold mt-4 leading-relaxed">
                @มหาวิทยาลัยศรีปทุม บางเขน
              </span>
            </div>
          </div>

          {/* Unified Checkout and Price Card */}
          <div className="mt-12 max-w-xl mx-auto bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.025)] text-center relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-50/50 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl pointer-events-none" />

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-500 text-xs font-black uppercase tracking-wider mb-4">
              ค่าลงทะเบียนเรียน
            </span>

            <div className="flex flex-col items-center justify-center gap-1 mb-6">
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">44,500 <span className="text-2xl font-black text-slate-500">฿</span></span>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mt-1">ราคาเน็ตสุทธิ (รวมภาษีมูลค่าเพิ่มแล้ว)</span>
            </div>

            <div className="py-4 border-t border-b border-slate-100 mb-8">
              <p className="text-sm font-bold leading-relaxed text-slate-600 max-w-md mx-auto">
                ✨ ราคานี้รวมอาหารกลางวัน อาหารว่าง และอาหารเย็นระดับพรีเมียม พร้อมรับคู่มือประกอบการเรียนประกอบหลักสูตรเรียบร้อยแล้ว
              </p>
            </div>

            {/* Registration Button */}
            <div>
              <a
                href="https://forms.gle/nkAMHRD2H13VVemD7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-4 px-12 rounded-2xl bg-gradient-to-r from-[#ff3b60] to-[#ff5a79] hover:from-[#ff5a79] hover:to-[#ff3b60] text-white font-extrabold text-base sm:text-lg shadow-lg shadow-rose-200/80 transition duration-300 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                กรอกใบสมัคร คลิกที่นี่
              </a>
              <span className="block text-[11px] text-slate-400 font-bold mt-3.5">*สมัครเรียนและลงทะเบียนเพื่อยืนยันสิทธิ์ทันที</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f4f7ff] border-t border-slate-200/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Contact Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/80 p-8 md:p-12 text-center shadow-[0_20px_50px_rgba(15,23,42,0.03)] hover:shadow-[0_30px_70px_rgba(244,63,94,0.06)] hover:-translate-y-1 transition duration-300">
            {/* Background blur effects */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">สอบถามรายละเอียดเพิ่มเติม</h3>


              {/* Concept Tagline */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-black tracking-wide text-slate-800">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-50 border border-rose-100/50 text-rose-500">
                  <span className="text-rose-600 font-black">R</span>evenue
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-50 border border-rose-100/50 text-rose-500">
                  <span className="text-rose-600 font-black">U</span>nlock
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-50 border border-rose-100/50 text-rose-500">
                  <span className="text-rose-600 font-black">N</span>ow
                </span>
              </div>

              {/* Grid of contact details */}
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-center items-stretch border-t border-slate-100 pt-10">
                {/* 1. Address */}
                <div className="group/item flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50/40 border border-slate-100 hover:bg-rose-50/30 hover:border-rose-100/80 hover:shadow-lg hover:shadow-rose-100/20 transition-all duration-300 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100/50 text-[#ff3b60] mb-4 shadow-sm transition-transform duration-300 group-hover/item:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1.5">มหาวิทยาลัยศรีปทุม</h4>
                  <p className="text-xs font-bold leading-relaxed text-slate-500">
                    2410/2 ถ.พหลโยธิน แขวงเสนานิคม<br />
                    เขตจตุจักร กรุงเทพฯ 10900
                  </p>
                </div>

                {/* 2. Working Hours */}
                <div className="group/item flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50/40 border border-slate-100 hover:bg-rose-50/30 hover:border-rose-100/80 hover:shadow-lg hover:shadow-rose-100/20 transition-all duration-300 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100/50 text-[#ff3b60] mb-4 shadow-sm transition-transform duration-300 group-hover/item:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1.5">วันและเวลาทำการ</h4>
                  <p className="text-xs font-bold leading-relaxed text-slate-500">
                    09:00 - 17:00 น.
                  </p>
                </div>

                {/* 3. Telephone */}
                <div className="group/item flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50/40 border border-slate-100 hover:bg-rose-50/30 hover:border-rose-100/80 hover:shadow-lg hover:shadow-rose-100/20 transition-all duration-300 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100/50 text-[#ff3b60] mb-4 shadow-sm transition-transform duration-300 group-hover/item:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.145-.44.02-.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1.5">เบอร์โทรศัพท์</h4>
                  <div className="flex flex-col gap-1.5 text-xs font-black text-slate-600">
                    <a href="tel:0612745157" className="hover:text-[#ff3b60] transition-colors duration-200">061-274-5157</a>
                    <a href="tel:0929889516" className="hover:text-[#ff3b60] transition-colors duration-200">092-988-9516</a>
                  </div>
                </div>

                {/* 4. Email */}
                <div className="group/item flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50/40 border border-slate-100 hover:bg-rose-50/30 hover:border-rose-100/80 hover:shadow-lg hover:shadow-rose-100/20 transition-all duration-300 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100/50 text-[#ff3b60] mb-4 shadow-sm transition-transform duration-300 group-hover/item:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1.5">อีเมลติดต่อ</h4>
                  <a href="mailto:runbyspu@gmail.com" className="text-xs font-black text-slate-600 hover:text-[#ff3b60] transition-colors duration-200 block break-all">
                    runbyspu@gmail.com
                  </a>
                </div>

                {/* 5. Line & Socials */}
                <div className="group/item flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50/40 border border-slate-100 hover:bg-rose-50/30 hover:border-rose-100/80 hover:shadow-lg hover:shadow-rose-100/20 transition-all duration-300 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100/50 text-[#ff3b60] mb-4 shadow-sm transition-transform duration-300 group-hover/item:scale-110">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.586.39.084.922.258 1.058.592.12.301.079.766.038 1.08l-.164 1.026c-.05.304-.241 1.19.103 1.302.344.112.915-.224 1.282-.549.332-.294 3.094-3.087 4.225-5.267C21.728 16.591 24 13.682 24 10.304zm-14.733.992H7.214a.514.514 0 01-.514-.514v-2.96a.514.514 0 011.028 0v2.446h1.539a.514.514 0 010 1.028zm2.622-.514a.514.514 0 01-.514.514h-1.028a.514.514 0 01-.514-.514v-2.96a.514.514 0 011.028 0v2.446h.514a.514 0 01.514.514zm1.538.514a.514.514 0 01-.514-.514v-2.96a.514.514 0 011.028 0v2.96a.514.514 0 01-.514.514zm5.025-.992h-1.539V9.288h1.539a.514.514 0 010 1.028zm0-1.996h-1.539v-.514h1.539a.514.514 0 110 1.028zm1.028 2.478a.514.514 0 01-.514.514h-2.566a.514.514 0 01-.514-.514v-2.96a.514.514 0 01.514-.514h2.566a.514.514 0 01.514.514v.514a.514.514 0 01-1.028 0v-.028H18.42v.514h1.539a.514.514 0 01.514.514v1.478z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1.5">Line Official</h4>
                  <a href="https://lin.ee/8I9yHV6" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-slate-600 hover:text-[#ff3b60] transition-colors duration-200">
                    @runbyspu
                  </a>

                  {/* Social Links (Facebook & Instagram) */}
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href="https://facebook.com/runbyspu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-600 border border-slate-200/60 shadow-sm transition hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 active:scale-95 duration-200"
                      title="Facebook"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/runbyspu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-600 border border-slate-200/60 shadow-sm transition hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:scale-105 active:scale-95 duration-200"
                      title="Instagram"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo and Copyright */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3">
            <img src="/logo.png" alt="R.U.N. by SPU" className="h-10 w-auto object-contain" />
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              © Copyright 2026 R.U.N. by SPU – All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
