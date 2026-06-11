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
  { icon: "Wrench", title: "Монтаж под ключ", desc: "Полный цикл: от проектирования до запуска. Бригада с профессиональным оборудованием." },
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
  { value: "12", unit: "лет", label: "на рынке" },
  { value: "1840", unit: "", label: "установок" },
  { value: "98%", unit: "", label: "довольных клиентов" },
  { value: "80", unit: "км", label: "бесплатный выезд" },
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
    <div className="min-h-screen bg-white text-[#111] font-body">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <Icon name="Droplets" size={20} className="text-[#1a6bff]" />
            <span className="font-display text-lg font-semibold text-[#111] tracking-tight">АэроСепт</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm text-[#666] hover:text-[#111] transition-colors font-body"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <a
            href="tel:+78001234567"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#111] hover:text-[#1a6bff] transition-colors"
          >
            <Icon name="Phone" size={14} className="text-[#1a6bff]" />
            8 800 123-45-67
          </a>
          <button className="md:hidden text-[#666]" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-[#e5e5e5] px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => handleNav(l.href)} className="text-left text-[#666] hover:text-[#111] text-sm">
                {l.label}
              </button>
            ))}
            <a href="tel:+78001234567" className="text-[#1a6bff] font-semibold text-sm">
              8 800 123-45-67
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex flex-col">
        <div className="flex-1 max-w-6xl mx-auto px-6 flex flex-col justify-center py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#1a6bff] text-sm font-medium mb-5 tracking-wide">Профессиональный монтаж с 2012 года</p>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#111] leading-[1.05] mb-7 tracking-tight">
                Септики<br />под ключ<br />
                <span className="text-[#1a6bff]">с гарантией</span>
              </h1>
              <p className="text-[#666] text-lg leading-relaxed mb-10 max-w-md">
                Проектирование, продажа и установка систем автономной канализации. Более 1840 объектов по всему региону.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleNav("#contacts")}
                  className="bg-[#111] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#1a6bff] transition-colors rounded-sm"
                >
                  Рассчитать стоимость
                </button>
                <button
                  onClick={() => handleNav("#catalog")}
                  className="border border-[#e5e5e5] text-[#111] px-7 py-3.5 text-sm font-semibold hover:border-[#111] transition-colors rounded-sm"
                >
                  Смотреть каталог
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/08e137ad-c46a-478f-b422-d202f585cf25.jpg"
                alt="Установка септика"
                className="w-full h-[480px] object-cover rounded-sm"
              />
              <div className="absolute bottom-5 left-5 bg-white rounded-sm px-5 py-4 shadow-sm border border-[#e5e5e5]">
                <div className="font-display text-2xl font-bold text-[#111]">12+</div>
                <div className="text-[#666] text-xs mt-0.5">лет опыта</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-[#e5e5e5]">
          <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e5e5e5]">
            {STATS.map((s) => (
              <div key={s.label} className="px-8 first:pl-0 last:pr-0">
                <div className="font-display text-3xl font-bold text-[#111]">
                  {s.value}<span className="text-[#1a6bff]">{s.unit}</span>
                </div>
                <div className="text-[#888] text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#1a6bff] text-sm font-medium mb-3">Что мы делаем</p>
            <h2 className="font-display text-4xl font-bold text-[#111] tracking-tight">Наши услуги</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-[#f7f7f7] p-10 hover:bg-white transition-colors group">
                <Icon name={s.icon} size={24} className="text-[#1a6bff] mb-6" />
                <h3 className="font-display text-lg font-semibold text-[#111] mb-3">{s.title}</h3>
                <p className="text-[#777] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <p className="text-[#1a6bff] text-sm font-medium mb-3">Оборудование</p>
              <h2 className="font-display text-4xl font-bold text-[#111] tracking-tight">Каталог септиков</h2>
            </div>
            <button onClick={() => handleNav("#contacts")} className="text-sm text-[#666] hover:text-[#111] transition-colors underline underline-offset-4">
              Индивидуальный расчёт
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="border border-[#e5e5e5] hover:border-[#111] transition-colors group rounded-sm overflow-hidden">
                <div className="relative h-44 overflow-hidden bg-[#f7f7f7]">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-white text-[#111] text-xs font-semibold px-2.5 py-1 rounded-sm border border-[#e5e5e5]">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-semibold text-[#111] mb-4">{p.name}</h3>
                  <div className="space-y-1.5 mb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#999]">Объём</span>
                      <span className="text-[#111] font-medium">{p.volume}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#999]">Нагрузка</span>
                      <span className="text-[#111] font-medium">{p.people}</span>
                    </div>
                  </div>
                  <div className="border-t border-[#e5e5e5] pt-4 flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-[#111]">{p.price}</span>
                    <button className="text-xs font-semibold text-[#1a6bff] hover:text-[#111] transition-colors">
                      Заказать →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#1a6bff] text-sm font-medium mb-3">Портфолио</p>
            <h2 className="font-display text-4xl font-bold text-[#111] tracking-tight">Выполненные проекты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group">
                <div className="h-64 overflow-hidden rounded-sm mb-5">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-base font-semibold text-[#111] mb-2">{p.title}</h3>
                <div className="flex items-center gap-4 text-sm text-[#999]">
                  <span>{p.area}</span>
                  <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                  <span>{p.system}</span>
                  <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                  <span>{p.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://cdn.poehali.dev/projects/7ecfa160-ce2f-47b4-a520-ade8e1f8338c/files/73916c3f-cd0c-4d2f-87f9-8e8ca07921c4.jpg"
                alt="Команда АэроСепт"
                className="w-full h-[460px] object-cover rounded-sm"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#1a6bff] text-sm font-medium mb-3">О компании</p>
              <h2 className="font-display text-4xl font-bold text-[#111] tracking-tight mb-8 leading-tight">
                Эксперты в автономной канализации
              </h2>
              <div className="space-y-4 text-[#666] leading-relaxed text-[15px] mb-10">
                <p>С 2012 года мы занимаемся проектированием и монтажом систем автономной канализации на территории Московской и Тверской областей.</p>
                <p>Наша команда — 24 аттестованных специалиста, собственный парк спецтехники и более 1840 успешных объектов в портфолио.</p>
                <p>Работаем с жилыми домами, коттеджными посёлками, базами отдыха и промышленными объектами.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", text: "Лицензия СРО" },
                  { icon: "Users", text: "24 специалиста" },
                  { icon: "Truck", text: "Своя техника" },
                  { icon: "MapPin", text: "Московская обл." },
                ].map((i) => (
                  <div key={i.text} className="flex items-center gap-3 text-sm text-[#444]">
                    <Icon name={i.icon} size={16} className="text-[#1a6bff] flex-shrink-0" />
                    {i.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIT */}
      <section id="credit" className="py-28 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-[#1a6bff] text-sm font-medium mb-3">Финансирование</p>
              <h2 className="font-display text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
                Рассрочка и кредит
              </h2>
              <p className="text-[#888] leading-relaxed mb-10 text-[15px]">
                Установите септик сейчас и платите частями. Работаем с ведущими банками. Одобрение за 15 минут прямо на объекте.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Первый взнос — от 0%",
                  "Одобрение без справок о доходах",
                  "Срок рассрочки до 60 месяцев",
                  "Помогаем оформить у нас в офисе",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[15px] text-[#ccc]">
                    <Icon name="Check" size={16} className="text-[#1a6bff] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleNav("#contacts")}
                className="bg-[#1a6bff] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#0050e0] transition-colors rounded-sm"
              >
                Узнать условия
              </button>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#222]">
              {CREDIT_BANKS.map((b) => (
                <div key={b.name} className="bg-[#1a1a1a] p-8">
                  <div className="text-[#888] text-xs mb-3">{b.name}</div>
                  <div className="font-display text-3xl font-bold text-white mb-1">{b.rate}</div>
                  <div className="text-[#555] text-sm">{b.months}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-[#1a6bff] text-sm font-medium mb-3">Связаться</p>
              <h2 className="font-display text-4xl font-bold text-[#111] tracking-tight mb-12 leading-tight">Контакты</h2>
              <div className="space-y-9">
                {[
                  { icon: "Phone", label: "Телефон", value: "8 800 123-45-67", sub: "Бесплатно, с 8:00 до 20:00" },
                  { icon: "Mail", label: "Email", value: "info@aerosept.ru", sub: "Ответим в течение часа" },
                  { icon: "MapPin", label: "Офис", value: "Москва, ул. Строительная, 12", sub: "Пн–Пт 9:00–18:00, Сб 10:00–16:00" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-5">
                    <Icon name={c.icon} size={18} className="text-[#1a6bff] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[#999] text-xs mb-1">{c.label}</div>
                      <div className="text-[#111] font-semibold text-[15px]">{c.value}</div>
                      <div className="text-[#999] text-sm mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-[#e5e5e5] p-10 rounded-sm">
              <h3 className="font-display text-xl font-semibold text-[#111] mb-7">Оставить заявку</h3>
              <div className="space-y-5">
                <div>
                  <label className="text-[#999] text-xs block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full border border-[#e5e5e5] text-[#111] px-4 py-3 text-sm focus:outline-none focus:border-[#111] transition-colors rounded-sm placeholder:text-[#ccc]"
                  />
                </div>
                <div>
                  <label className="text-[#999] text-xs block mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-[#e5e5e5] text-[#111] px-4 py-3 text-sm focus:outline-none focus:border-[#111] transition-colors rounded-sm placeholder:text-[#ccc]"
                  />
                </div>
                <div>
                  <label className="text-[#999] text-xs block mb-2">Комментарий</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите задачу: площадь, количество человек, тип участка..."
                    rows={4}
                    className="w-full border border-[#e5e5e5] text-[#111] px-4 py-3 text-sm focus:outline-none focus:border-[#111] transition-colors resize-none rounded-sm placeholder:text-[#ccc]"
                  />
                </div>
                <button className="w-full bg-[#111] text-white py-3.5 text-sm font-semibold hover:bg-[#1a6bff] transition-colors rounded-sm">
                  Отправить заявку
                </button>
                <p className="text-[#ccc] text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e5e5e5] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <Icon name="Droplets" size={18} className="text-[#1a6bff]" />
            <span className="font-display text-base font-semibold text-[#111]">АэроСепт</span>
          </div>
          <div className="flex flex-wrap gap-7 justify-center">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => handleNav(l.href)} className="text-[#999] hover:text-[#111] text-sm transition-colors">
                {l.label}
              </button>
            ))}
          </div>
          <div className="text-[#ccc] text-sm">© 2024 АэроСепт</div>
        </div>
      </footer>
    </div>
  );
}
