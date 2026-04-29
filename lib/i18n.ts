export type Lang = "en" | "th";

type Entry = {
  nav: { about: string; experience: string; skills: string; contact: string; hire: string; resume: string };
  hero: { hello: string; typed: string[]; tagline: string; viewExp: string; contact: string; downloadCV: string; badge1: string; badge2: string };
  about: { kicker: string; heading: string; p1: string; p2: string; experienceLabel: string; experienceValue: string; educationLabel: string; educationValue: string; educationSub: string; focusLabel: string; focusValue: string };
  exp: { kicker: string; heading: string; now: string };
  skills: { kicker: string; heading: string; languages: string; frontend: string; backend: string; database: string; tools: string };
  contact: { kicker: string; heading1: string; heading2: string; sub: string };
  footer: string;
  egg: { title: string; body: string; close: string };
};

export const dict: Record<Lang, Entry> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      hire: "Hire me",
      resume: "Resume",
    },
    hero: {
      hello: "Hello, I'm",
      typed: [
        "Web Developer",
        "React & Next.js",
        "NestJS · Spring Boot",
        "UI · Performance · SEO",
      ],
      tagline:
        "Frontend Developer with 2+ years of experience in React and Next.js. Currently expanding into backend with NestJS and Java Spring Boot.",
      viewExp: "View experience",
      contact: "Get in touch →",
      downloadCV: "Download CV",
      badge1: "⚛️ React · Next.js",
      badge2: "🚀 2+ years",
    },
    about: {
      kicker: "About",
      heading: "Building responsive UIs, shipping on time.",
      p1: "Frontend Developer with 2+ years of experience in React and Next.js, focused on building responsive, performant UIs that work beautifully on every device.",
      p2: "Currently expanding into backend with NestJS and Java Spring Boot. I can communicate directly with clients and consistently deliver within deadlines.",
      experienceLabel: "Experience",
      experienceValue: "2+ years",
      educationLabel: "Education",
      educationValue: "B.Sc. Computer Science",
      educationSub: "University of Phayao · 2024",
      focusLabel: "Focus",
      focusValue: "React · Next.js · NestJS",
    },
    exp: {
      kicker: "Work Experience",
      heading: "Where I've worked.",
      now: "Present",
    },
    skills: {
      kicker: "Skills",
      heading: "Tools of the trade.",
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend / Runtime",
      database: "Database",
      tools: "Tools",
    },
    contact: {
      kicker: "Contact",
      heading1: "Let's build something",
      heading2: "remarkable.",
      sub: "Open to new opportunities, collaborations, and conversations.",
    },
    footer: "All rights reserved.",
    egg: {
      title: "🎮 You found a secret!",
      body: "Konami code activated. Thanks for paying attention to details — that's exactly the kind of curiosity I bring to my work.",
      close: "Close",
    },
  },
  th: {
    nav: {
      about: "เกี่ยวกับ",
      experience: "ประสบการณ์",
      skills: "ทักษะ",
      contact: "ติดต่อ",
      hire: "จ้างงาน",
      resume: "เรซูเม่",
    },
    hero: {
      hello: "สวัสดีครับ ผมชื่อ",
      typed: [
        "Web Developer",
        "React & Next.js",
        "NestJS · Spring Boot",
        "UI · Performance · SEO",
      ],
      tagline:
        "Frontend Developer ประสบการณ์ 2+ ปีกับ React และ Next.js กำลังเรียนรู้เพิ่มฝั่ง backend ด้วย NestJS และ Java Spring Boot",
      viewExp: "ดูประสบการณ์",
      contact: "ติดต่อผม →",
      downloadCV: "ดาวน์โหลด CV",
      badge1: "⚛️ React · Next.js",
      badge2: "🚀 2+ ปี",
    },
    about: {
      kicker: "เกี่ยวกับ",
      heading: "สร้าง UI ที่สวย ใช้งานจริง ส่งงานตรงเวลา",
      p1: "Frontend Developer ประสบการณ์ 2+ ปี เน้น React และ Next.js สร้าง UI ที่ responsive และทำงานได้ดีบนทุกอุปกรณ์",
      p2: "กำลังขยายมาทำฝั่ง backend ด้วย NestJS และ Java Spring Boot คุยกับลูกค้าตรงได้ และส่งงานตรงเวลาเสมอ",
      experienceLabel: "ประสบการณ์",
      experienceValue: "2+ ปี",
      educationLabel: "การศึกษา",
      educationValue: "วท.บ. วิทยาการคอมพิวเตอร์",
      educationSub: "มหาวิทยาลัยพะเยา · 2024",
      focusLabel: "ความถนัด",
      focusValue: "React · Next.js · NestJS",
    },
    exp: {
      kicker: "ประสบการณ์ทำงาน",
      heading: "ที่ที่ผมเคยทำงาน",
      now: "ปัจจุบัน",
    },
    skills: {
      kicker: "ทักษะ",
      heading: "เครื่องมือที่ใช้ทำงาน",
      languages: "ภาษาโปรแกรม",
      frontend: "Frontend",
      backend: "Backend / Runtime",
      database: "ฐานข้อมูล",
      tools: "เครื่องมือ",
    },
    contact: {
      kicker: "ติดต่อ",
      heading1: "มาสร้างสิ่งที่",
      heading2: "น่าทึ่งกัน",
      sub: "เปิดรับโอกาสใหม่ๆ การร่วมงาน และพูดคุยทุกรูปแบบ",
    },
    footer: "สงวนลิขสิทธิ์",
    egg: {
      title: "🎮 เจอ secret!",
      body: "Konami code ทำงานแล้ว — ขอบคุณที่สังเกตรายละเอียด นี่แหละคือความใส่ใจที่ผมใช้กับการทำงาน",
      close: "ปิด",
    },
  },
};

export type Dict = Entry;
