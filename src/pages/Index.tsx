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
  {
    icon: "Wrench",
    title: "Монтаж под ключ",
    desc: "Полный цикл: от проектирования до запуска. Бригада с профессиональным оборудованием.",
  },
  {
    icon: "ClipboardList",
    title: "Проектирование",
    desc: "Геологические изыскания, расчёт нагрузки, разработка схемы под участок.",
  },
  {
    icon: "Settings",
    title: "Техобслуживание",
    desc: "Плановое обслуживание, откачка, замена фильтров. Договор на сервис.",
  },
  {
    icon: "Truck",
    title: "Доставка",
    desc: "Собственный транспорт по региону. Разгрузка и подача к месту установки.",
  },
  {
    icon: "Shield",
    title: "Гарантия 3 года",
    desc: "Письменная гарантия на все виды работ и установленное оборудование.",
  },
  {
    icon: "Phone",
    title: "Выезд специалиста",
    desc: "Замер и консультация на объекте — бесплатно в радиусе 80 км.",
  },
];

const PRODUCTS = [
  {
    name: "АэроСепт 3000",
    volume: "3 000 л",
    people: "до 3 человек",
    price: "от 68 000 ₽",
    tag: "Хит продаж",
    img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg",
  },
  {
    name: "АэроСепт 5000",
    volume: "5 000 л",
    people: "до 6 человек",
    price: "от 94 000 ₽",
    tag: "Оптимальный",
    img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg",
  },
  {
    name: "АэроСепт 8000",
    volume: "8 000 л",
    people: "до 10 человек",
    price: "от 138 000 ₽",
    tag: "Для дома",
    img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg",
  },
  {
    name: "КомерС 15000",
    volume: "15 000 л",
    people: "коммерческий",
    price: "от 245 000 ₽",
    tag: "Бизнес",
    img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg",
  },
];

const PROJECTS = [
  {
    title: "Коттедж в Подмосковье",
    area: "320 м²",
    system: "АэроСепт 5000",
    date: "Март 2024",
    img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/73916c3f-cd0c-4d2f-87f9-8e8ca07921c4.jpg",
  },
  {
    title: "База отдыха «Сосны»",
    area: "800 м²",
    system: "КомерС 15000",
    date: "Июнь 2024",
    img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/08e137ad-c46a-478f-b422-d202f585cf25.jpg",
  },
  {
    title: "Таунхаус Истра",
    area: "180 м²",
    system: "АэроСепт 3000",
    date: "Август 2024",
    img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/73916c3f-cd0c-4d2f-87f9-8e8ca07921c4.jpg",
  },
];

const STATS = [
  { value: "12+", label: "лет на рынке" },
  { value: "1 840", label: "установок выполнено" },
  { value: "98%", label: "клиентов довольны" },
  { value: "80 км", label: "зона выезда бесплатно" },
];

const CREDIT_BANKS = [
  { name: "Сбербанк", rate: "от 0%", months: "до 24 мес." },
  { name: "ВТБ", rate: "от 3.9%", months: "до 36 мес." },
  { name: "Тинькофф", rate: "от 0%", months: "до 18 мес." },
  { name: "Почта Банк", rate: "от 5.9%", months: "до 60 мес." },
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
    <div className="min-h-screen bg-[#0d0f14] text-[#e8e8e8] font-body">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0f14]/95 backdrop-blur border-b border-[#2a2d35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#e87c2e] flex items-center justify-center">
              <Icon name="Droplets" size={18} className="text-white" />
            </div>
            <span className="font-display text-xl font-bold text-white tracking-wider uppercase">АэроСепт</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm text-[#9ca3af] hover:text-[#e8e8e8] transition-colors uppercase tracking-widest font-body"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <a
            href="tel:+78001234567"
            className="hidden md:flex items-center gap-2 bg-[#e87c2e] text-white px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-[#d06b1f] transition-colors"
          >
            <Icon name="Phone" size={14} />
            8 800 123-45-67
          </a>
          <button className="md:hidden text-[#9ca3af]" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-[#13151c] border-t border-[#2a2d35] px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => handleNav(l.href)} className="text-left text-[#9ca3af] hover:text-white uppercase tracking-widest text-sm">
                {l.label}
              </button>
            ))}
            <a href="tel:+78001234567" className="bg-[#e87c2e] text-white px-4 py-3 text-sm font-bold uppercase text-center">
              8 800 123-45-67
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/08e137ad-c46a-478f-b422-d202f585cf25.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f14] via-[#0d0f14]/85 to-[#0d0f14]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#e8e8e8 1px, transparent 1px), linear-gradient(90deg, #e8e8e8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#e87c2e]" />
              <span className="text-[#e87c2e] uppercase tracking-[0.3em] text-xs font-bold">Профессиональный монтаж</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase leading-none mb-6 tracking-tight">
              Септики<br />
              <span className="text-[#e87c2e]">под ключ</span><br />
              с гарантией
            </h1>
            <p className="text-[#9ca3af] text-lg mb-10 leading-relaxed max-w-xl">
              Проектирование, продажа и установка систем автономной канализации.
              Работаем с 2012 года. Более 1840 объектов по всему региону.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleNav("#contacts")}
                className="bg-[#e87c2e] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#d06b1f] transition-colors text-sm"
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={() => handleNav("#catalog")}
                className="border border-[#4a4d57] text-[#e8e8e8] px-8 py-4 font-bold uppercase tracking-wider hover:border-[#e8e8e8] transition-colors text-sm"
              >
                Смотреть каталог
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-[#13151c]/90 backdrop-blur border-t border-[#2a2d35]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center py-2">
                <div className="font-display text-2xl font-black text-[#e87c2e]">{s.value}</div>
                <div className="text-[#6b7280] text-xs uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#e87c2e]" />
              <span className="text-[#e87c2e] uppercase tracking-[0.3em] text-xs font-bold">Что мы делаем</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase">Наши услуги</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2d35]">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-[#0d0f14] p-8 hover:bg-[#13151c] transition-colors group">
                <div className="w-12 h-12 border border-[#e87c2e] flex items-center justify-center mb-6 group-hover:bg-[#e87c2e] transition-colors">
                  <Icon name={s.icon} size={22} className="text-[#e87c2e] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-3 tracking-wide">{s.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#e87c2e]" />
              <span className="text-[#e87c2e] uppercase tracking-[0.3em] text-xs font-bold">Оборудование</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase">Каталог септиков</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="bg-[#13151c] border border-[#2a2d35] hover:border-[#e87c2e] transition-colors group">
                <div className="relative overflow-hidden h-48">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-[#e87c2e] text-white text-xs font-bold uppercase px-2 py-1 tracking-wider">
                    {p.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-black text-white uppercase mb-4">{p.name}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Gauge" size={14} className="text-[#e87c2e]" />
                      <span className="text-[#6b7280]">Объём:</span>
                      <span className="text-[#e8e8e8]">{p.volume}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Users" size={14} className="text-[#e87c2e]" />
                      <span className="text-[#6b7280]">Нагрузка:</span>
                      <span className="text-[#e8e8e8]">{p.people}</span>
                    </div>
                  </div>
                  <div className="border-t border-[#2a2d35] pt-4 flex items-center justify-between">
                    <span className="font-display text-xl font-black text-[#e87c2e]">{p.price}</span>
                    <button className="bg-[#e87c2e] text-white text-xs font-bold uppercase px-3 py-2 hover:bg-[#d06b1f] transition-colors">
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-[#6b7280] text-sm">
              Не нашли нужный объём?{" "}
              <button onClick={() => handleNav("#contacts")} className="text-[#e87c2e] underline underline-offset-4">
                Запросите индивидуальный расчёт
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#e87c2e]" />
              <span className="text-[#e87c2e] uppercase tracking-[0.3em] text-xs font-bold">Портфолио</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase">Выполненные проекты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group relative overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-[#0d0f14]/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-lg font-black text-white uppercase mb-2">{p.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-[#9ca3af]">
                    <span className="flex items-center gap-1">
                      <Icon name="Home" size={12} className="text-[#e87c2e]" />
                      {p.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Package" size={12} className="text-[#e87c2e]" />
                      {p.system}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={12} className="text-[#e87c2e]" />
                      {p.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#e87c2e]" />
                <span className="text-[#e87c2e] uppercase tracking-[0.3em] text-xs font-bold">О компании</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase mb-8 leading-none">
                Эксперты<br />в автономной<br />канализации
              </h2>
              <div className="space-y-5 text-[#9ca3af] leading-relaxed">
                <p>
                  С 2012 года мы занимаемся проектированием и монтажом систем автономной канализации
                  на территории Московской и Тверской областей.
                </p>
                <p>
                  Наша команда — это 24 аттестованных специалиста, собственный парк спецтехники
                  и более 1840 успешных объектов в портфолио.
                </p>
                <p>
                  Работаем с жилыми домами, коттеджными посёлками, базами отдыха
                  и промышленными объектами. Даём письменную гарантию на все виды работ.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-px bg-[#2a2d35]">
                {[
                  { icon: "Award", text: "Лицензия СРО" },
                  { icon: "Users", text: "24 специалиста" },
                  { icon: "Truck", text: "Своя техника" },
                  { icon: "MapPin", text: "Московская обл." },
                ].map((i) => (
                  <div key={i.text} className="bg-[#0a0c10] flex items-center gap-3 p-4">
                    <Icon name={i.icon} size={18} className="text-[#e87c2e]" />
                    <span className="text-sm text-[#e8e8e8] font-medium">{i.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#e87c2e]/20" />
              <img
                src="https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/73916c3f-cd0c-4d2f-87f9-8e8ca07921c4.jpg"
                alt="Команда АэроСепт"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-[#e87c2e] px-6 py-4">
                <div className="font-display text-3xl font-black text-white">12+</div>
                <div className="text-white/80 text-xs uppercase tracking-widest">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIT */}
      <section id="credit" className="py-24 bg-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#e87c2e]" />
                <span className="text-[#e87c2e] uppercase tracking-[0.3em] text-xs font-bold">Финансирование</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase mb-6 leading-none">
                Рассрочка<br />и кредит
              </h2>
              <p className="text-[#9ca3af] leading-relaxed mb-8">
                Установите септик сейчас и платите частями. Работаем с ведущими банками.
                Одобрение за 15 минут прямо на объекте.
              </p>
              <div className="space-y-3">
                {[
                  "Первый взнос — от 0%",
                  "Одобрение без справок о доходах",
                  "Срок рассрочки до 60 месяцев",
                  "Помогаем оформить прямо у нас",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#e87c2e] flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                    <span className="text-[#e8e8e8] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#2a2d35]">
              {CREDIT_BANKS.map((b) => (
                <div key={b.name} className="bg-[#13151c] p-8 hover:bg-[#1a1d25] transition-colors">
                  <div className="font-display text-xl font-black text-white uppercase mb-2">{b.name}</div>
                  <div className="text-[#e87c2e] text-2xl font-black mb-1">{b.rate}</div>
                  <div className="text-[#6b7280] text-sm">{b.months}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 bg-[#e87c2e]/10 border border-[#e87c2e]/30 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display text-xl font-black text-white uppercase">Рассчитайте платёж</div>
              <div className="text-[#9ca3af] text-sm mt-1">Оставьте заявку — менеджер подберёт лучшие условия</div>
            </div>
            <button
              onClick={() => handleNav("#contacts")}
              className="bg-[#e87c2e] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#d06b1f] transition-colors text-sm whitespace-nowrap"
            >
              Узнать условия
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#e87c2e]" />
                <span className="text-[#e87c2e] uppercase tracking-[0.3em] text-xs font-bold">Связаться</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase mb-10 leading-none">Контакты</h2>
              <div className="space-y-8">
                {[
                  { icon: "Phone", label: "Телефон", value: "8 800 123-45-67", sub: "Бесплатно, с 8:00 до 20:00" },
                  { icon: "Mail", label: "Email", value: "info@aerosept.ru", sub: "Ответим в течение часа" },
                  {
                    icon: "MapPin",
                    label: "Офис",
                    value: "Москва, ул. Строительная, 12",
                    sub: "Пн–Пт 9:00–18:00, Сб 10:00–16:00",
                  },
                ].map((c) => (
                  <div key={c.label} className="flex gap-5">
                    <div className="w-12 h-12 border border-[#e87c2e] flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={18} className="text-[#e87c2e]" />
                    </div>
                    <div>
                      <div className="text-[#6b7280] text-xs uppercase tracking-widest mb-1">{c.label}</div>
                      <div className="text-white font-bold">{c.value}</div>
                      <div className="text-[#6b7280] text-sm mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#13151c] border border-[#2a2d35] p-8">
              <h3 className="font-display text-xl font-black text-white uppercase mb-6">Оставить заявку</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[#6b7280] text-xs uppercase tracking-widest block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full bg-[#0d0f14] border border-[#2a2d35] text-[#e8e8e8] px-4 py-3 text-sm focus:outline-none focus:border-[#e87c2e] transition-colors placeholder:text-[#4a4d57]"
                  />
                </div>
                <div>
                  <label className="text-[#6b7280] text-xs uppercase tracking-widest block mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#0d0f14] border border-[#2a2d35] text-[#e8e8e8] px-4 py-3 text-sm focus:outline-none focus:border-[#e87c2e] transition-colors placeholder:text-[#4a4d57]"
                  />
                </div>
                <div>
                  <label className="text-[#6b7280] text-xs uppercase tracking-widest block mb-2">Комментарий</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите задачу: площадь, количество человек, тип участка..."
                    rows={4}
                    className="w-full bg-[#0d0f14] border border-[#2a2d35] text-[#e8e8e8] px-4 py-3 text-sm focus:outline-none focus:border-[#e87c2e] transition-colors resize-none placeholder:text-[#4a4d57]"
                  />
                </div>
                <button className="w-full bg-[#e87c2e] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#d06b1f] transition-colors text-sm">
                  Отправить заявку
                </button>
                <p className="text-[#4a4d57] text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080a0d] border-t border-[#2a2d35] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#e87c2e] flex items-center justify-center">
              <Icon name="Droplets" size={14} className="text-white" />
            </div>
            <span className="font-display text-lg font-bold text-white tracking-wider uppercase">АэроСепт</span>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-[#6b7280] hover:text-[#e8e8e8] text-xs uppercase tracking-widest transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
          <div className="text-[#4a4d57] text-xs text-center">© 2024 АэроСепт. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}