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
  { icon: "Wrench", title: "Монтаж под ключ", desc: "Полный цикл от проектирования до запуска. Бригада с профессиональным оборудованием.", grad: "from-[#6366f1] to-[#8b5cf6]" },
  { icon: "ClipboardList", title: "Проектирование", desc: "Геологические изыскания, расчёт нагрузки, разработка схемы под участок.", grad: "from-[#06b6d4] to-[#3b82f6]" },
  { icon: "Settings", title: "Техобслуживание", desc: "Плановое обслуживание, откачка, замена фильтров. Договор на сервис.", grad: "from-[#10b981] to-[#06b6d4]" },
  { icon: "Truck", title: "Доставка", desc: "Собственный транспорт по региону. Разгрузка и подача к месту установки.", grad: "from-[#f59e0b] to-[#ef4444]" },
  { icon: "Shield", title: "Гарантия 3 года", desc: "Письменная гарантия на все виды работ и установленное оборудование.", grad: "from-[#8b5cf6] to-[#ec4899]" },
  { icon: "MapPin", title: "Выезд специалиста", desc: "Замер и консультация на объекте — бесплатно в радиусе 80 км.", grad: "from-[#3b82f6] to-[#10b981]" },
];

const PRODUCTS = [
  { name: "АэроСепт 3000", volume: "3 000 л", people: "до 3 человек", price: "от 68 000 ₽", tag: "Хит продаж", color: "#6366f1", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg" },
  { name: "АэроСепт 5000", volume: "5 000 л", people: "до 6 человек", price: "от 94 000 ₽", tag: "Оптимальный", color: "#06b6d4", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg" },
  { name: "АэроСепт 8000", volume: "8 000 л", people: "до 10 человек", price: "от 138 000 ₽", tag: "Для дома", color: "#10b981", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg" },
  { name: "КомерС 15000", volume: "15 000 л", people: "коммерческий", price: "от 245 000 ₽", tag: "Бизнес", color: "#f59e0b", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/9e8a4c39-7f5f-4fc6-b6d1-ee97986a77f1.jpg" },
];

const PROJECTS = [
  { title: "Коттедж в Подмосковье", area: "320 м²", system: "АэроСепт 5000", date: "Март 2024", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/73916c3f-cd0c-4d2f-87f9-8e8ca07921c4.jpg" },
  { title: "База отдыха «Сосны»", area: "800 м²", system: "КомерС 15000", date: "Июнь 2024", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/08e137ad-c46a-478f-b422-d202f585cf25.jpg" },
  { title: "Таунхаус Истра", area: "180 м²", system: "АэроСепт 3000", date: "Август 2024", img: "https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/73916c3f-cd0c-4d2f-87f9-8e8ca07921c4.jpg" },
];

const STATS = [
  { value: "12+", label: "лет на рынке" },
  { value: "1840", label: "установок" },
  { value: "98%", label: "довольных клиентов" },
  { value: "80 км", label: "бесплатный выезд" },
];

const CREDIT_BANKS = [
  { name: "Сбербанк", rate: "0%", months: "до 24 мес.", icon: "Building2" },
  { name: "ВТБ", rate: "3.9%", months: "до 36 мес.", icon: "Building2" },
  { name: "Тинькофф", rate: "0%", months: "до 18 мес.", icon: "CreditCard" },
  { name: "Почта Банк", rate: "5.9%", months: "до 60 мес.", icon: "Mail" },
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
    <div className="min-h-screen bg-[#08090d] text-white font-body overflow-x-hidden">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-4 mt-4">
          <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 flex items-center justify-between h-14">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center">
                <Icon name="Droplets" size={14} className="text-white" />
              </div>
              <span className="font-display text-sm font-bold text-white tracking-tight">АэроСепт</span>
            </a>
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((l) => (
                <button key={l.href} onClick={() => handleNav(l.href)} className="text-sm text-white/50 hover:text-white transition-colors font-body">
                  {l.label}
                </button>
              ))}
            </nav>
            <a
              href="tel:+78001234567"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Icon name="Phone" size={13} />
              8 800 123-45-67
            </a>
            <button className="md:hidden text-white/60" onClick={() => setMobileOpen(!mobileOpen)}>
              <Icon name={mobileOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="mx-4 mt-1 bg-[#0f1117]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => handleNav(l.href)} className="text-left text-white/60 hover:text-white text-sm">
                {l.label}
              </button>
            ))}
            <a href="tel:+78001234567" className="bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white text-sm font-semibold px-4 py-3 rounded-xl text-center">
              8 800 123-45-67
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#6366f1]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-[#06b6d4]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-[#8b5cf6]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/70 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              Профессиональный монтаж с 2012 года
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] mb-7 tracking-tight">
              Септики{" "}
              <span className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                под ключ
              </span>
              <br />
              с гарантией
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Проектирование, продажа и установка систем автономной канализации. Более 1840 объектов по всему региону.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => handleNav("#contacts")}
                className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white px-8 py-4 text-sm font-semibold rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-[#6366f1]/25"
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={() => handleNav("#catalog")}
                className="bg-white/5 border border-white/10 text-white px-8 py-4 text-sm font-semibold rounded-2xl hover:bg-white/10 transition-colors backdrop-blur"
              >
                Смотреть каталог →
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative rounded-3xl overflow-hidden h-[380px] border border-white/10">
            <img
              src="https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/08e137ad-c46a-478f-b422-d202f585cf25.jpg"
              alt="Установка септика"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090d]/60 via-transparent to-[#08090d]/60" />

            {/* Floating stats */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-4 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                  <div className="font-display text-xl font-black bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">{s.value}</div>
                  <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 relative">
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent uppercase tracking-widest mb-3">Что мы делаем</p>
            <h2 className="font-display text-4xl font-black tracking-tight">Наши услуги</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-white/20 hover:bg-white/8 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${s.grad} rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`} />
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.grad} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon name={s.icon} size={20} className="text-white" />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2.5">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-28 relative">
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-[#06b6d4]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold bg-gradient-to-r from-[#06b6d4] to-[#10b981] bg-clip-text text-transparent uppercase tracking-widest mb-3">Оборудование</p>
            <h2 className="font-display text-4xl font-black tracking-tight">Каталог септиков</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1.5 rounded-xl"
                    style={{ background: p.color + "33", border: `1px solid ${p.color}55`, color: p.color }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-sm font-bold text-white mb-4 leading-snug">{p.name}</h3>
                  <div className="space-y-2 mb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Объём</span>
                      <span className="text-white/80 font-medium">{p.volume}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Нагрузка</span>
                      <span className="text-white/80 font-medium">{p.people}</span>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                    <span className="font-display text-base font-black text-white">{p.price}</span>
                    <button
                      className="text-xs font-semibold px-3 py-1.5 rounded-xl transition-opacity hover:opacity-80"
                      style={{ background: p.color + "22", color: p.color, border: `1px solid ${p.color}44` }}
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => handleNav("#contacts")} className="text-white/40 hover:text-white text-sm transition-colors underline underline-offset-4">
              Нужен другой объём? Запросите индивидуальный расчёт
            </button>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold bg-gradient-to-r from-[#10b981] to-[#06b6d4] bg-clip-text text-transparent uppercase tracking-widest mb-3">Портфолио</p>
            <h2 className="font-display text-4xl font-black tracking-tight">Выполненные проекты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group relative rounded-2xl overflow-hidden h-80 border border-white/10">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-base font-bold text-white mb-2">{p.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                    <span className="bg-white/10 backdrop-blur px-2.5 py-1 rounded-full">{p.area}</span>
                    <span className="bg-white/10 backdrop-blur px-2.5 py-1 rounded-full">{p.system}</span>
                    <span className="bg-white/10 backdrop-blur px-2.5 py-1 rounded-full">{p.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 relative">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#6366f1]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 to-[#06b6d4]/20 rounded-3xl blur-xl -m-2" />
              <img
                src="https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/73916c3f-cd0c-4d2f-87f9-8e8ca07921c4.jpg"
                alt="Команда АэроСепт"
                className="relative w-full h-[460px] object-cover rounded-3xl border border-white/10"
              />
              <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-5">
                <div className="font-display text-3xl font-black bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">12+</div>
                <div className="text-white/50 text-xs mt-0.5">лет опыта</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent uppercase tracking-widest mb-3">О компании</p>
              <h2 className="font-display text-4xl font-black tracking-tight mb-8 leading-tight">
                Эксперты в автономной канализации
              </h2>
              <div className="space-y-4 text-white/50 leading-relaxed text-[15px] mb-10">
                <p>С 2012 года мы занимаемся проектированием и монтажом систем автономной канализации на территории Московской и Тверской областей.</p>
                <p>Наша команда — 24 аттестованных специалиста, собственный парк спецтехники и более 1840 успешных объектов в портфолио.</p>
                <p>Работаем с жилыми домами, коттеджными посёлками, базами отдыха и промышленными объектами.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "Award", text: "Лицензия СРО", grad: "from-[#6366f1] to-[#8b5cf6]" },
                  { icon: "Users", text: "24 специалиста", grad: "from-[#06b6d4] to-[#3b82f6]" },
                  { icon: "Truck", text: "Своя техника", grad: "from-[#10b981] to-[#06b6d4]" },
                  { icon: "MapPin", text: "Московская обл.", grad: "from-[#f59e0b] to-[#ef4444]" },
                ].map((i) => (
                  <div key={i.text} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${i.grad} flex items-center justify-center flex-shrink-0`}>
                      <Icon name={i.icon} size={14} className="text-white" />
                    </div>
                    <span className="text-sm text-white/70 font-medium">{i.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIT */}
      <section id="credit" className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#06b6d4]/10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold bg-gradient-to-r from-[#f59e0b] to-[#ef4444] bg-clip-text text-transparent uppercase tracking-widest mb-3">Финансирование</p>
            <h2 className="font-display text-4xl font-black tracking-tight mb-4">Рассрочка и кредит</h2>
            <p className="text-white/50 max-w-md mx-auto text-[15px] leading-relaxed">
              Установите септик сейчас и платите частями. Одобрение за 15 минут прямо на объекте.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#6366f1]/20 to-[#06b6d4]/10 border border-[#6366f1]/30 rounded-3xl p-8">
              <h3 className="font-display text-xl font-black mb-6">Условия</h3>
              <div className="space-y-4">
                {[
                  { text: "Первый взнос — от 0%", icon: "CheckCircle" },
                  { text: "Одобрение без справок о доходах", icon: "CheckCircle" },
                  { text: "Срок рассрочки до 60 месяцев", icon: "CheckCircle" },
                  { text: "Помогаем оформить у нас в офисе", icon: "CheckCircle" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <Icon name={item.icon} size={18} className="text-[#6366f1] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleNav("#contacts")}
                className="mt-8 w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-3.5 text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#6366f1]/25"
              >
                Узнать условия
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {CREDIT_BANKS.map((b) => (
                <div key={b.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
                  <div className="text-white/40 text-xs mb-3">{b.name}</div>
                  <div className="font-display text-3xl font-black bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent mb-1">{b.rate}</div>
                  <div className="text-white/40 text-sm">{b.months}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold bg-gradient-to-r from-[#10b981] to-[#6366f1] bg-clip-text text-transparent uppercase tracking-widest mb-3">Связаться</p>
            <h2 className="font-display text-4xl font-black tracking-tight">Контакты</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-5">
              {[
                { icon: "Phone", label: "Телефон", value: "8 800 123-45-67", sub: "Бесплатно, с 8:00 до 20:00", grad: "from-[#6366f1] to-[#8b5cf6]" },
                { icon: "Mail", label: "Email", value: "info@aerosept.ru", sub: "Ответим в течение часа", grad: "from-[#06b6d4] to-[#3b82f6]" },
                { icon: "MapPin", label: "Офис", value: "Москва, ул. Строительная, 12", sub: "Пн–Пт 9:00–18:00, Сб 10:00–16:00", grad: "from-[#10b981] to-[#06b6d4]" },
              ].map((c) => (
                <div key={c.label} className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.grad} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={c.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-1">{c.label}</div>
                    <div className="text-white font-semibold">{c.value}</div>
                    <div className="text-white/40 text-sm mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="font-display text-xl font-black text-white mb-7">Оставить заявку</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-white/40 text-xs block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 text-sm rounded-xl focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs block mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 text-sm rounded-xl focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs block mb-2">Комментарий</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите задачу: площадь, количество человек..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 text-sm rounded-xl focus:outline-none focus:border-[#6366f1] transition-colors resize-none placeholder:text-white/20"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-4 text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#6366f1]/25">
                  Отправить заявку
                </button>
                <p className="text-white/25 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center">
              <Icon name="Droplets" size={12} className="text-white" />
            </div>
            <span className="font-display text-sm font-bold text-white">АэроСепт</span>
          </div>
          <div className="flex flex-wrap gap-7 justify-center">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => handleNav(l.href)} className="text-white/30 hover:text-white text-sm transition-colors">
                {l.label}
              </button>
            ))}
          </div>
          <div className="text-white/20 text-sm">© 2024 АэроСепт</div>
        </div>
      </footer>
    </div>
  );
}
