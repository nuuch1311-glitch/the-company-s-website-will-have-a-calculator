export type Lang = "mn" | "en"

export const LOGO_SRC =
  "https://uploads.onecompiler.io/452nypa47/453bttvrp/426519566_930393562423336_3387278124318188361_n.jpg"

export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"

export const PHONE_DISPLAY = "+976 9609 2515"
export const PHONE_TEL = "+97696092515"
export const EMAIL = "info@tugstonogt.mn"

type Bi = { mn: string; en: string }

const t = (mn: string, en: string): Bi => ({ mn, en })

export const nav: { href: string; label: Bi }[] = [
  { href: "#about", label: t("Бидний тухай", "About") },
  { href: "#services", label: t("Үйлчилгээ", "Services") },
  { href: "#projects", label: t("Төслүүд", "Projects") },
  { href: "#why", label: t("Давуу тал", "Why us") },
  { href: "#contact", label: t("Холбоо барих", "Contact") },
]

export const services: { no: string; title: Bi; desc: Bi }[] = [
  {
    no: "01",
    title: t("ГАДНА МЕТАЛЛ ФАСАД", "EXTERIOR METAL FACADE"),
    desc: t(
      "Гадна металл фасадын системийн мэргэжлийн угсралт.",
      "Professional installation of exterior metal facade systems.",
    ),
  },
  {
    no: "02",
    title: t("ФАСАД УГСРАЛТ", "FACADE INSTALLATION"),
    desc: t(
      "Фасад угсралт, бүтээн байгуулалтын цогц үйлчилгээ.",
      "Complete facade installation and construction services.",
    ),
  },
  {
    no: "03",
    title: t("МЕТАЛЛ ХУЧИЛТ", "METAL CLADDING"),
    desc: t(
      "Орон сууц, оффисын орчин үеийн металл cladding шийдэл.",
      "Modern metal cladding solutions for residential and office buildings.",
    ),
  },
  {
    no: "04",
    title: t("БАРИЛГЫН ГАДНА ӨНГӨЛГӨӨ", "EXTERIOR FINISHING"),
    desc: t(
      "Архитектурын фасадын мэргэжлийн өнгөлгөөний шийдэл.",
      "Professional architectural facade finishing solutions.",
    ),
  },
  {
    no: "05",
    title: t("ФАСАД ЗАСВАР, ШИНЭЧЛЭЛ", "FACADE RENOVATION"),
    desc: t(
      "Хуучин фасадыг засварлах, солих, шинэчлэх үйлчилгээ.",
      "Repair, replacement and renovation of existing facades.",
    ),
  },
  {
    no: "06",
    title: t("ТӨСЛИЙН ГҮЙЦЭТГЭЛ", "PROJECT DELIVERY"),
    desc: t(
      "Төлөвлөлт, угсралт, чанарын хяналт, хүлээлгэн өгөлт.",
      "Planning, installation, quality control and handover.",
    ),
  },
]

export const features: { icon: string; title: Bi; desc: Bi }[] = [
  {
    icon: "✦",
    title: t("МЭРГЭЖЛИЙН БАГ", "PROFESSIONAL TEAM"),
    desc: t(
      "Туршлагатай, ур чадвартай фасад угсралтын мэргэжилтнүүд.",
      "Experienced facade installation specialists.",
    ),
  },
  {
    icon: "◆",
    title: t("ЧАНАРТАЙ МАТЕРИАЛ", "QUALITY MATERIALS"),
    desc: t(
      "Удаан эдэлгээтэй, стандартын шаардлага хангасан материал.",
      "Durable materials that meet required standards.",
    ),
  },
  {
    icon: "⌁",
    title: t("НАРИЙВЧИЛСАН УГСРАЛТ", "PRECISION INSTALLATION"),
    desc: t(
      "Зураг төсөл, хэмжилтэд тулгуурласан нарийн гүйцэтгэл.",
      "Precise execution based on drawings and measurements.",
    ),
  },
  {
    icon: "＋",
    title: t("АЮУЛГҮЙ АЖИЛЛАГАА", "SAFETY FIRST"),
    desc: t(
      "Барилгын аюулгүй ажиллагааны хатуу стандартыг мөрдөнө.",
      "Strict construction safety standards on every project.",
    ),
  },
  {
    icon: "✓",
    title: t("НАЙДВАРТАЙ ГҮЙЦЭТГЭЛ", "RELIABLE DELIVERY"),
    desc: t(
      "Эхнээс нь дуустал хариуцлагатай төслийн менежмент.",
      "Responsible project management from start to finish.",
    ),
  },
  {
    icon: "↗",
    title: t("1–3 ЖИЛИЙН БАТАЛГАА", "1–3 YEAR WARRANTY"),
    desc: t(
      "Гүйцэтгэлтэй холбоотой асуудлыг баталгаат хугацаанд хариуцна.",
      "We address installation and workmanship issues during the warranty period.",
    ),
  },
]

export type Project = {
  cat: Bi
  title: Bi
  loc: Bi
  year: string
  desc: Bi
  img: string
}

export const projects: Project[] = [
  {
    cat: t("ОРОН СУУЦ", "RESIDENTIAL"),
    title: t("Архитектурын фасад", "Architectural Facade"),
    loc: t("Улаанбаатар", "Ulaanbaatar"),
    year: "2026",
    desc: t(
      "Орчин үеийн металл фасадын шийдлийн жишээ.",
      "An example of a modern metal facade solution.",
    ),
    img: "https://uploads.onecompiler.io/452nypa47/453bttvrp/4731e009-aa04-4e98-aa41-2ddaa5d4aeda.jfif",
  },
  {
    cat: t("ОФФИС", "OFFICE"),
    title: t("Бизнес төвийн фасад", "Business Center Facade"),
    loc: t("Улаанбаатар", "Ulaanbaatar"),
    year: "2026",
    desc: t(
      "Оффисын барилгын гадна фасадын гүйцэтгэлийн жишээ.",
      "An example of facade delivery for an office building.",
    ),
    img: "https://uploads.onecompiler.io/452nypa47/453bttvrp/f392c0d2-b0a5-49aa-aff7-57d096eb8eef.jfif",
  },
  {
    cat: t("ОРОН СУУЦ", "RESIDENTIAL"),
    title: t("Хотхоны өнгөлгөө", "Residential Development"),
    loc: t("Улаанбаатар", "Ulaanbaatar"),
    year: "2026",
    desc: t(
      "Гадна өнгөлгөө болон фасадын шийдлийн жишээ.",
      "An example of exterior finishing and facade solutions.",
    ),
    img: "https://uploads.onecompiler.io/452nypa47/453bttvrp/52e4aced-f21e-4b07-a65e-bc8d3a9f8698.jfif",
  },
  {
    cat: t("ҮЙЛДВЭРЛЭЛ", "INDUSTRIAL"),
    title: t("Үйлдвэрийн барилга", "Industrial Building"),
    loc: t("Улаанбаатар", "Ulaanbaatar"),
    year: "2026",
    desc: t(
      "Үйлдвэрлэлийн барилгын гадна фасадын шийдэл.",
      "An exterior facade solution for an industrial building.",
    ),
    img: "https://uploads.onecompiler.io/452nypa47/453bttvrp/9273f676-dad2-4450-b9dc-73b8a079f9d2%20(1).jfif",
  },
  {
    cat: t("ХУДАЛДАА", "RETAIL"),
    title: t("Худалдааны барилга", "Retail Building"),
    loc: t("Улаанбаатар", "Ulaanbaatar"),
    year: "2026",
    desc: t(
      "Худалдааны зориулалттай барилгын фасадын гүйцэтгэл.",
      "Facade delivery for a retail building.",
    ),
    img: "https://uploads.onecompiler.io/452nypa47/453bttvrp/a969ae3a-73c3-46d4-a321-aacf5d566265.jfif",
  },
]

export const categories: Bi[] = [
  t("БҮГД", "ALL"),
  t("ОРОН СУУЦ", "RESIDENTIAL"),
  t("ОФФИС", "OFFICE"),
  t("ҮЙЛДВЭРЛЭЛ", "INDUSTRIAL"),
  t("ХУДАЛДАА", "RETAIL"),
]

export const timeline: { no: string; title: Bi; desc: Bi }[] = [
  {
    no: "01",
    title: t("ЗӨВЛӨГӨӨ", "CONSULTATION"),
    desc: t("Төслийн шаардлага, талбайн зөвлөгөө.", "Project requirements and site consultation."),
  },
  {
    no: "02",
    title: t("ХЭМЖИЛТ", "MEASUREMENT"),
    desc: t("Мэргэжлийн хэмжилт, үнэлгээ.", "Professional measurement and assessment."),
  },
  {
    no: "03",
    title: t("ТӨЛӨВЛӨЛТ", "PLANNING"),
    desc: t("Техникийн шийдэл, материал, ажлын хуваарь.", "Technical solution, materials and schedule."),
  },
  {
    no: "04",
    title: t("УГСРАЛТ", "INSTALLATION"),
    desc: t("Фасадын мэргэжлийн угсралт.", "Professional facade installation."),
  },
  {
    no: "05",
    title: t("ЧАНАРЫН ХЯНАЛТ", "QUALITY CONTROL"),
    desc: t("Эцсийн шалгалт, чанарын баталгаажуулалт.", "Final inspection and quality assurance."),
  },
  {
    no: "06",
    title: t("ХҮЛЭЭЛГЭН ӨГӨЛТ", "HANDOVER"),
    desc: t(
      "Төслийг бүрэн дуусгаж захиалагчид хүлээлгэн өгнө.",
      "Complete the project and hand it over to the client.",
    ),
  },
]

export const stats: { value: string; label: Bi }[] = [
  { value: "10+", label: t("Туршлага", "Years of experience") },
  { value: "100+", label: t("Гүйцэтгэсэн төсөл", "Completed projects") },
  { value: "50+", label: t("Мэргэжлийн харилцагч", "Professional clients") },
  { value: "100%", label: t("Чанарын амлалт", "Quality commitment") },
]

export const dict = {
  topLocation: t("Улаанбаатар, Монгол", "Ulaanbaatar, Mongolia"),
  brandTagline: t("ГАДНА МЕТАЛЛ ФАСАД УГСРАЛТ", "EXTERIOR METAL FACADE INSTALLATION"),
  hero: {
    eyebrow: "01 / EXTERIOR FACADE SPECIALISTS",
    titleA: t("БАРИЛГЫН ГАДНА ФАСАДЫГ", "EXTERIOR FACADES,"),
    titleEm: t("ТӨГС", "PERFECTLY"),
    titleB: t("ГҮЙЦЭТГЭЛЭЭР", "EXECUTED"),
    lead: t(
      "Гадна металл фасад угсралтын мэргэжлийн шийдэл",
      "Professional exterior metal facade solutions",
    ),
    copy: t(
      "Чанар, нарийвчлал, найдвартай ажиллагааг хослуулан барилгын өнгө төрх, хамгаалалт, эдэлгээг шинэ түвшинд хүргэнэ.",
      "We combine quality, precision and reliability to elevate the character, protection and performance of every building.",
    ),
    quote: t("ҮНИЙН САНАЛ АВАХ", "REQUEST A QUOTE"),
    projects: t("ТӨСЛҮҮД ҮЗЭХ", "VIEW PROJECTS"),
  },
  about: {
    eyebrow: t("ТӨГС ТОНОГТ", "TUGS TONOGT"),
    titleA: t("ФАСАДЫН ШИЙДЛИЙН", "A PROFESSIONAL TEAM FOR"),
    titleEm: t("МЭРГЭЖЛИЙН БАГ", "FACADE SOLUTIONS"),
    body: t(
      "Төгс Тоногт нь орчин үеийн барилгын гадна металл фасад угсралт, өнгөлгөөний шийдэлд мэргэшсэн баг. Бид зураг төслөөс эхлээд чанарын хяналт, хүлээлгэн өгөх хүртэлх бүх үе шатыг нэг дор гүйцэтгэнэ.",
      "Tugs Tonogt is a specialist team focused on exterior metal facade installation and finishing for modern buildings. From technical planning to quality control, we manage every stage in one place.",
    ),
    ticks: [
      t("Мэргэжлийн ур чадвар", "Professional workmanship"),
      t("Нарийвчилсан угсралт", "Precise installation"),
      t("Аюулгүй ажиллагаа", "Safe operations"),
      t("Найдвартай менежмент", "Reliable management"),
    ],
    link: t("Бидний тухай →", "About us →"),
    caption: t("Precision in every detail", "Precision in every detail"),
  },
  services: {
    eyebrow: "WHAT WE DO",
    titleA: t("БИДНИЙ", "OUR"),
    titleEm: t("ҮЙЛЧИЛГЭЭ", "SERVICES"),
    lead: t(
      "Архитектурын санааг бодит, удаан эдэлгээтэй фасад болгон гүйцэтгэнэ.",
      "We turn architectural ideas into durable, precise facade systems.",
    ),
  },
  projectsSection: {
    eyebrow: "PORTFOLIO",
    titleA: t("ХИЙЖ ГҮЙЦЭТГЭСЭН", "SELECTED"),
    titleEm: t("ТӨСЛҮҮД", "PROJECTS"),
  },
  why: {
    eyebrow: "OUR STANDARD",
    titleA: t("ЯАГААД", "WHY"),
    titleEm: t("ТӨГС ТОНОГТ?", "TUGS TONOGT?"),
  },
  process: {
    eyebrow: "PROCESS",
    titleA: t("АЖЛЫН", "OUR"),
    titleEm: t("ҮЕ ШАТ", "PROCESS"),
  },
  cta: {
    eyebrow: "LET'S BUILD BETTER",
    titleA: t("ТАНЫ БАРИЛГАД", "NEED A"),
    titleEm: t("ТӨГС ФАСАДЫН", "PERFECT FACADE"),
    titleB: t("ШИЙДЭЛ ХЭРЭГТЭЙ БАЙНА УУ?", "SOLUTION FOR YOUR BUILDING?"),
    body: t(
      "Төслийнхөө талаар бидэнтэй холбогдож, мэргэжлийн зөвлөгөө болон үнийн санал аваарай.",
      "Tell us about your project and receive professional advice and a tailored quote.",
    ),
    quote: t("ҮНИЙН САНАЛ АВАХ", "REQUEST A QUOTE"),
    call: t("9609 2515 РУУ ЗАЛГАХ", "CALL 9609 2515"),
  },
  quote: {
    eyebrow: "START A PROJECT",
    titleA: t("ҮНИЙН САНАЛ", "REQUEST A"),
    titleEm: t("АВАХ", "QUOTE"),
    lead: t(
      "Төслийн мэдээллээ илгээнэ үү. Манай ажилтан тантай удахгүй холбогдоно.",
      "Send us your project details and our team will contact you shortly.",
    ),
    name: t("Нэр *", "Name *"),
    phone: t("Утас *", "Phone *"),
    email: t("И-мэйл", "Email"),
    location: t("Байршил", "Location"),
    area: t("Талбайн хэмжээ (м²)", "Area (m²)"),
    message: t("Нэмэлт мэдээлэл", "Additional information"),
    attach: t("Файл хавсаргах", "Attach a file"),
    submit: t("ҮНИЙН САНАЛ ИЛГЭЭХ ↗", "SEND QUOTE REQUEST ↗"),
    success: t(
      "Баярлалаа! Таны хүсэлтийг хүлээн авлаа.",
      "Thank you! Your request has been received.",
    ),
    typeLabel: t("Төслийн төрөл", "Project type"),
    types: [
      t("Орон сууц", "Residential"),
      t("Оффис", "Office"),
      t("Үйлдвэрлэл", "Industrial"),
      t("Худалдаа", "Retail"),
    ],
  },
  footer: {
    nav: t("Навигаци", "Navigation"),
    contact: t("Холбоо барих", "Contact"),
    servicesTitle: t("Үйлчилгээ", "Services"),
    servicesList: [
      t("Гадна металл фасад", "Exterior metal facade"),
      t("Металл кладдинг", "Metal cladding"),
      t("Фасад шинэчлэл", "Facade renovation"),
    ],
    rights: t("© 2026 ТӨГС ТОНОГТ. Бүх эрх хуулиар хамгаалагдсан.", "© 2026 TUGS TONOGT. All Rights Reserved."),
  },
  scroll: "SCROLL",
}
