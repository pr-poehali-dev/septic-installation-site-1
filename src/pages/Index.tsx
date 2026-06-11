import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Каталог", href: "#catalog" },
  { label: "Проекты", href: "#projects" },
  { label: "О компании", href: "#about" },
  { label: "Рассрочка", href: "#credit" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Wrench", title: "Монтаж под ключ", desc: "Полный цикл от проектирования до запуска. Бригада с профессиональным оборудованием." },
  { icon: "ClipboardList", title: "Проектирование", desc: "Геологические изыскания, расчёт нагрузки, разработка схемы под участок." },
  { icon: "Settings", title: "Техобслуживание", desc: "Плановое обслуживание, откачка, замена фильтров. Договор на сервис." },
  { icon: "Truck", title: "Доставка", desc: "Собственный транспорт по региону. Разгрузка и подача к месту установки." },
  { icon: "Shield", title: "Гарантия 3 года", desc: "Письменная гарантия на все виды работ и установленное оборудование." },
  { icon: "MapPin", title: "Выезд специалиста", desc: "Замер и консультация на объекте — бесплатно в радиусе 80 км." },
];

const PRODUCTS = [
  { name: "АэроСепт 3000", volume: "3 000 л", people: "до 3 человек", price: "от 68 000 ₽", tag: "Хит продаж", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg" },
  { name: "АэроСепт 5000", volume: "5 000 л", people: "до 6 человек", price: "от 94 000 ₽", tag: "Оптимальный", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg" },
  { name: "АэроСепт 8000", volume: "8 000 л", people: "до 10 человек", price: "от 138 000 ₽", tag: "Для дома", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg" },
  { name: "КомерС 15000", volume: "15 000 л", people: "коммерческий", price: "от 245 000 ₽", tag: "Бизнес", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg" },
];

const PROJECTS = [
  { title: "Коттедж в Подмосковье", area: "320 м²", system: "АэроСепт 5000", date: "Март 2024", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/73916c3f-cd0c-4d2f-87f9-8e8ca07921c4.jpg" },
  { title: "База отдыха «Сосны»", area: "800 м²", system: "КомерС 15000", date: "Июнь 2024", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/08e137ad-c46a-478f-b422-d202f585cf25.jpg" },
  { title: "Таунхаус Истра", area: "180 м²", system: "АэроСепт 3000", date: "Август 2024", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/73916c3f-cd0c-4d2f-87f9-8e8ca07921c4.jpg" },
];

const STATS = [
  { value: "12", sup: "+", label: "лет на рынке" },
  { value: "1 840", sup: "", label: "объектов выполнено" },
  { value: "98", sup: "%", label: "клиентов довольны" },
  { value: "80", sup: " км", label: "бесплатный выезд" },
];

const CREDIT_BANKS = [
  { name: "Сбербанк", rate: "0%", months: "до 24 мес." },
  { name: "ВТБ", rate: "3.9%", months: "до 36 мес." },
  { name: "Тинькофф", rate: "0%", months: "до 18 мес." },
  { name: "Почта Банк", rate: "5.9%", months: "до 60 мес." },
];

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f4f1ec] text-[#1a1a2e] font-body">

      {/* TOP BAR */}
      <div className="bg-[#1a1a2e] text-white/60 text-xs font-body py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span>Работаем Пн–Пт 9:00–18:00, Сб 10:00–16:00</span>
          <a href="tel:+78001234567" className="text-white hover:text-[#c9a96e] transition-colors font-semibold tracking-wide">
            8 800 123-45-67 — бесплатно
          </a>
        </div>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#f4f1ec]/95 backdrop-blur-sm border-b border-[#d8d0c4]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[68px]">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#1a1a2e] flex items-center justify-center">
              <Icon name="Droplets" size={17} className="text-[#c9a96e]" />
            </div>
            <div>
              <div className="font-display text-base font-bold text-[#1a1a2e] leading-none tracking-wide">АэроСепт</div>
              <div className="text-[10px] text-[#8a7f72] tracking-[0.15em] uppercase leading-none mt-0.5">Септики и канализация</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center">
            {NAV_LINKS.map((l, i) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className={`text-[13px] font-medium text-[#4a4540] hover:text-[#1a1a2e] transition-colors px-5 py-2 ${i !== NAV_LINKS.length - 1 ? "border-r border-[#d8d0c4]" : ""}`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleNav("#contacts")}
            className="hidden md:block bg-[#1a1a2e] text-white text-[13px] font-semibold px-6 py-2.5 hover:bg-[#2d2d4e] transition-colors tracking-wide"
          >
            Оставить заявку
          </button>

          <button className="md:hidden text-[#4a4540]" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-[#f4f1ec] border-t border-[#d8d0c4] px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => handleNav(l.href)} className="text-left text-[#4a4540] hover:text-[#1a1a2e] text-sm py-1 border-b border-[#e8e2d8] last:border-0">
                {l.label}
              </button>
            ))}
            <button onClick={() => handleNav("#contacts")} className="bg-[#1a1a2e] text-white text-sm font-semibold px-4 py-3 text-center">
              Оставить заявку
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh]">
          {/* Left */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-20 bg-[#f4f1ec]">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs font-semibold tracking-[0.25em] uppercase">С 2012 года</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-[1.1] mb-6">
              Системы<br />
              автономной<br />
              <span className="text-[#c9a96e]">канализации</span>
            </h1>
            <p className="text-[#6b6560] text-[16px] leading-relaxed mb-10 max-w-[420px]">
              Проектирование, продажа и профессиональный монтаж септиков.
              Более 1840 выполненных объектов. Гарантия 3 года.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleNav("#contacts")}
                className="bg-[#1a1a2e] text-white px-8 py-4 text-sm font-semibold hover:bg-[#2d2d4e] transition-colors tracking-wide"
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={() => handleNav("#catalog")}
                className="border border-[#1a1a2e] text-[#1a1a2e] px-8 py-4 text-sm font-semibold hover:bg-[#1a1a2e] hover:text-white transition-colors tracking-wide"
              >
                Каталог оборудования
              </button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-4 gap-0 mt-14 border-t border-[#d8d0c4] pt-8">
              {STATS.map((s) => (
                <div key={s.label} className="pr-4 border-r border-[#d8d0c4] last:border-0 last:pr-0">
                  <div className="font-display text-2xl font-bold text-[#1a1a2e]">
                    {s.value}<span className="text-[#c9a96e]">{s.sup}</span>
                  </div>
                  <div className="text-[#8a7f72] text-[11px] mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative min-h-[400px]">
            <img
              src="https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/08e137ad-c46a-478f-b422-d202f585cf25.jpg"
              alt="Монтаж септика"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1a1a2e]/30" />
            {/* Badge */}
            <div className="absolute top-8 left-8 bg-[#c9a96e] px-5 py-3">
              <div className="font-display text-white text-sm font-bold tracking-wide">Лицензия СРО</div>
              <div className="text-white/80 text-xs mt-0.5">Аттестованные специалисты</div>
            </div>
            {/* Corner quote */}
            <div className="absolute bottom-8 right-8 bg-[#1a1a2e] px-6 py-5 max-w-[220px]">
              <div className="text-[#c9a96e] text-3xl font-display leading-none mb-2">"</div>
              <p className="text-white/80 text-xs leading-relaxed">
                Качество нашей работы подтверждают более 1840 довольных клиентов по всему региону
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="bg-[#1a1a2e] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-white/50 text-xs tracking-widest uppercase">
          {["Проектирование", "Монтаж", "Гарантия 3 года", "Техобслуживание", "Рассрочка от 0%", "Выезд бесплатно"].map((t, i) => (
            <span key={t} className="flex items-center gap-4">
              {i > 0 && <span className="text-[#c9a96e]">·</span>}
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#c9a96e]" />
                <span className="text-[#c9a96e] text-xs font-semibold tracking-[0.25em] uppercase">Что мы делаем</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-[#1a1a2e]">Наши услуги</h2>
            </div>
            <button onClick={() => handleNav("#contacts")} className="text-sm text-[#8a7f72] hover:text-[#1a1a2e] transition-colors border-b border-[#d8d0c4] pb-0.5">
              Задать вопрос специалисту →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e2d8]">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="bg-white p-8 hover:bg-[#f9f7f4] transition-colors group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 bg-[#f4f1ec] flex items-center justify-center group-hover:bg-[#1a1a2e] transition-colors">
                    <Icon name={s.icon} size={20} className="text-[#1a1a2e] group-hover:text-[#c9a96e] transition-colors" />
                  </div>
                  <span className="text-[#d8d0c4] font-display text-3xl font-bold leading-none">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#1a1a2e] mb-3">{s.title}</h3>
                <p className="text-[#6b6560] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 bg-[#f4f1ec]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs font-semibold tracking-[0.25em] uppercase">Оборудование</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-[#1a1a2e]">Каталог септиков</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="bg-white border border-[#e8e2d8] hover:border-[#1a1a2e] transition-colors group">
                <div className="relative h-44 overflow-hidden bg-[#e8e2d8]">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                  <span className="absolute top-3 left-3 bg-[#1a1a2e] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-bold text-[#1a1a2e] mb-4">{p.name}</h3>
                  <table className="w-full text-sm mb-5">
                    <tbody>
                      <tr className="border-b border-[#f0ebe3]">
                        <td className="py-1.5 text-[#8a7f72]">Объём</td>
                        <td className="py-1.5 text-right font-medium text-[#1a1a2e]">{p.volume}</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 text-[#8a7f72]">Нагрузка</td>
                        <td className="py-1.5 text-right font-medium text-[#1a1a2e]">{p.people}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-[#1a1a2e]">{p.price}</span>
                    <button className="bg-[#c9a96e] text-white text-xs font-semibold px-4 py-2 hover:bg-[#b8934f] transition-colors tracking-wide">
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs font-semibold tracking-[0.25em] uppercase">Портфолио</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-[#1a1a2e]">Реализованные проекты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group">
                <div className="relative h-72 overflow-hidden mb-5">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#1a1a2e]/20 group-hover:bg-[#1a1a2e]/10 transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#1a1a2e] mb-2">{p.title}</h3>
                <div className="flex items-center gap-4 text-sm text-[#8a7f72]">
                  <span>{p.area}</span>
                  <span className="w-px h-3 bg-[#d8d0c4]" />
                  <span>{p.system}</span>
                  <span className="w-px h-3 bg-[#d8d0c4]" />
                  <span>{p.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#c9a96e]" />
                <span className="text-[#c9a96e] text-xs font-semibold tracking-[0.25em] uppercase">О компании</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-white mb-8 leading-tight">
                Двенадцать лет<br />безупречной работы
              </h2>
              <div className="space-y-4 text-white/60 text-[15px] leading-relaxed mb-10">
                <p>С 2012 года мы занимаемся проектированием и монтажом систем автономной канализации на территории Московской и Тверской областей.</p>
                <p>Наша команда — 24 аттестованных специалиста, собственный парк спецтехники и более 1840 успешных объектов в портфолио.</p>
                <p>Каждый проект — индивидуальный подход, строгое соответствие нормативам и письменная гарантия на все виды работ.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "Award", label: "Лицензия СРО", desc: "Действующий допуск" },
                  { icon: "Users", label: "24 специалиста", desc: "В штате компании" },
                  { icon: "Truck", label: "Своя техника", desc: "Экскаваторы, КамАЗ" },
                  { icon: "FileCheck", label: "Гарантийный договор", desc: "Письменно на 3 года" },
                ].map((i) => (
                  <div key={i.label} className="border border-white/10 p-4 hover:border-[#c9a96e]/50 transition-colors">
                    <Icon name={i.icon} size={16} className="text-[#c9a96e] mb-2" />
                    <div className="text-white text-sm font-semibold">{i.label}</div>
                    <div className="text-white/40 text-xs mt-0.5">{i.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/73916c3f-cd0c-4d2f-87f9-8e8ca07921c4.jpg"
                alt="Команда АэроСепт"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#c9a96e] flex flex-col items-center justify-center">
                <div className="font-display text-4xl font-bold text-white leading-none">12</div>
                <div className="text-white/80 text-xs tracking-widest uppercase mt-1">лет</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIT */}
      <section id="credit" className="py-24 bg-[#f4f1ec]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#c9a96e]" />
                <span className="text-[#c9a96e] text-xs font-semibold tracking-[0.25em] uppercase">Финансирование</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-[#1a1a2e] mb-4 leading-tight">
                Рассрочка<br />и кредит
              </h2>
              <p className="text-[#6b6560] text-[15px] leading-relaxed mb-8">
                Установите септик сейчас и платите частями. Сотрудничаем с ведущими банками России. Предварительное одобрение за 15 минут.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Первоначальный взнос — от 0%",
                  "Решение без справок о доходах",
                  "Срок рассрочки до 60 месяцев",
                  "Оформление в нашем офисе",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#4a4540]">
                    <div className="w-5 h-5 bg-[#c9a96e] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={11} className="text-white" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleNav("#contacts")}
                className="bg-[#1a1a2e] text-white px-8 py-4 text-sm font-semibold hover:bg-[#2d2d4e] transition-colors tracking-wide"
              >
                Получить консультацию
              </button>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-[#1a1a2e] mb-5">Банки-партнёры</h3>
              <div className="space-y-3">
                {CREDIT_BANKS.map((b) => (
                  <div key={b.name} className="bg-white border border-[#e8e2d8] px-6 py-5 flex items-center justify-between hover:border-[#1a1a2e] transition-colors">
                    <span className="font-semibold text-[#1a1a2e]">{b.name}</span>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-right">
                        <div className="font-display text-xl font-bold text-[#c9a96e]">{b.rate}</div>
                        <div className="text-[#8a7f72] text-xs">годовых</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-[#1a1a2e]">{b.months}</div>
                        <div className="text-[#8a7f72] text-xs">рассрочка</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#c9a96e]" />
                <span className="text-[#c9a96e] text-xs font-semibold tracking-[0.25em] uppercase">Связаться с нами</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-[#1a1a2e] mb-12 leading-tight">
                Контакты
              </h2>
              <div className="space-y-8">
                {[
                  { icon: "Phone", label: "Телефон", value: "8 800 123-45-67", sub: "Звонок бесплатный, с 8:00 до 20:00" },
                  { icon: "Mail", label: "Электронная почта", value: "info@aerosept.ru", sub: "Ответим в течение рабочего часа" },
                  { icon: "MapPin", label: "Офис", value: "Москва, ул. Строительная, 12", sub: "Пн–Пт 9:00–18:00, Сб 10:00–16:00" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-5 pb-8 border-b border-[#e8e2d8] last:border-0 last:pb-0">
                    <div className="w-10 h-10 bg-[#f4f1ec] flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={17} className="text-[#c9a96e]" />
                    </div>
                    <div>
                      <div className="text-[#8a7f72] text-xs uppercase tracking-widest mb-1">{c.label}</div>
                      <div className="text-[#1a1a2e] font-semibold text-[15px]">{c.value}</div>
                      <div className="text-[#8a7f72] text-sm mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f4f1ec] border border-[#e8e2d8] p-10">
              <h3 className="font-display text-2xl font-bold text-[#1a1a2e] mb-7">Оставить заявку</h3>
              <div className="space-y-5">
                <div>
                  <label className="text-[#8a7f72] text-xs uppercase tracking-widest block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full bg-white border border-[#d8d0c4] text-[#1a1a2e] px-4 py-3 text-sm focus:outline-none focus:border-[#1a1a2e] transition-colors placeholder:text-[#c0b8ac]"
                  />
                </div>
                <div>
                  <label className="text-[#8a7f72] text-xs uppercase tracking-widest block mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-white border border-[#d8d0c4] text-[#1a1a2e] px-4 py-3 text-sm focus:outline-none focus:border-[#1a1a2e] transition-colors placeholder:text-[#c0b8ac]"
                  />
                </div>
                <div>
                  <label className="text-[#8a7f72] text-xs uppercase tracking-widest block mb-2">Комментарий</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Площадь участка, количество проживающих, тип грунта..."
                    rows={4}
                    className="w-full bg-white border border-[#d8d0c4] text-[#1a1a2e] px-4 py-3 text-sm focus:outline-none focus:border-[#1a1a2e] transition-colors resize-none placeholder:text-[#c0b8ac]"
                  />
                </div>
                <button className="w-full bg-[#1a1a2e] text-white py-4 text-sm font-semibold hover:bg-[#c9a96e] transition-colors tracking-wide">
                  Отправить заявку
                </button>
                <p className="text-[#a09888] text-xs text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a2e] border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#c9a96e] flex items-center justify-center">
              <Icon name="Droplets" size={15} className="text-white" />
            </div>
            <div>
              <div className="font-display text-sm font-bold text-white">АэроСепт</div>
              <div className="text-white/30 text-[10px] tracking-widest uppercase">Септики и канализация</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => handleNav(l.href)} className="text-white/40 hover:text-white text-xs tracking-wide transition-colors">
                {l.label}
              </button>
            ))}
          </div>
          <div className="text-white/25 text-xs text-center">
            © 2024 АэроСепт. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
