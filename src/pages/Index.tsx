import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technologies = [
    {
      icon: 'Shield',
      title: 'Защита от DDoS',
      description: 'Многоуровневая защита от распределенных атак любой сложности'
    },
    {
      icon: 'Lock',
      title: 'Шифрование данных',
      description: 'Современные алгоритмы шифрования для защиты конфиденциальной информации'
    },
    {
      icon: 'Server',
      title: 'Безопасная инфраструктура',
      description: 'Защищенные серверы с мониторингом 24/7'
    },
    {
      icon: 'FileSearch',
      title: 'Анализ угроз',
      description: 'AI-системы для обнаружения и предотвращения киберугроз'
    }
  ];

  const services = [
    {
      icon: 'ShieldCheck',
      title: 'Аудит безопасности',
      description: 'Комплексная проверка вашей инфраструктуры на уязвимости',
      price: 'от 150 000 ₽'
    },
    {
      icon: 'Users',
      title: 'Обучение персонала',
      description: 'Корпоративные тренинги по кибербезопасности',
      price: 'от 80 000 ₽'
    },
    {
      icon: 'Activity',
      title: 'Мониторинг 24/7',
      description: 'Круглосуточное наблюдение за безопасностью систем',
      price: 'от 200 000 ₽/мес'
    }
  ];

  const news = [
    {
      date: '5 декабря 2024',
      title: 'Новая волна фишинговых атак на банковский сектор',
      description: 'Эксперты зафиксировали рост целенаправленных атак на финансовые организации',
      category: 'Фишинг'
    },
    {
      date: '3 декабря 2024',
      title: 'Критическая уязвимость в популярном ПО для бизнеса',
      description: 'Разработчики выпустили экстренный патч для закрытия 0-day уязвимости',
      category: 'Уязвимости'
    },
    {
      date: '1 декабря 2024',
      title: 'AI в кибербезопасности: новые возможности защиты',
      description: 'Искусственный интеллект помогает обнаруживать атаки на 40% быстрее',
      category: 'Технологии'
    },
    {
      date: '28 ноября 2024',
      title: 'Рост числа ransomware-атак на малый бизнес',
      description: 'Статистика показывает увеличение вирусов-шифровальщиков на 65%',
      category: 'Ransomware'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-2xl font-bold gradient-text">CyberGuard</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('technologies')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'technologies' ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Технологии
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'services' ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('news')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'news' ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Новости
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Контакты
              </button>
            </div>

            <Button className="glow">Консультация</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-cyber opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Защита вашего бизнеса в цифровом мире
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Комплексные решения по кибербезопасности для компаний любого масштаба. 
              Защитите свои данные от современных угроз.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="glow text-lg px-8" onClick={() => scrollToSection('services')}>
                Наши услуги
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 glass border-white/20">
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Защищенных компаний' },
              { number: '99.9%', label: 'Время безотказной работы' },
              { number: '24/7', label: 'Техподдержка' },
              { number: '10+', label: 'Лет на рынке' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Наши технологии</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Используем передовые решения для защиты вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="glass border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={tech.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                  <p className="text-foreground/70 text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Наши услуги</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Полный спектр услуг по обеспечению информационной безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="glass border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 glow">
                    <Icon name={service.icon as any} className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" className="group">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Актуальные новости</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Последние события в мире кибербезопасности
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {news.map((item, index) => (
              <Card key={index} className="glass border-white/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
                      {item.category}
                    </span>
                    <span className="text-xs text-foreground/50">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-primary text-sm font-medium">
                    Читать далее
                    <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" size={14} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Свяжитесь с нами</h2>
            <p className="text-foreground/70">
              Получите бесплатную консультацию от наших экспертов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="glass border-white/10 p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-foreground/70 text-sm">info@cyberguard.ru</p>
                  <p className="text-foreground/70 text-sm">support@cyberguard.ru</p>
                </div>
              </Card>

              <Card className="glass border-white/10 p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-foreground/70 text-sm">+7 (495) 123-45-67</p>
                  <p className="text-foreground/70 text-sm">+7 (800) 555-35-35</p>
                </div>
              </Card>

              <Card className="glass border-white/10 p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-foreground/70 text-sm">г. Москва, ул. Примерная, д. 42</p>
                  <p className="text-foreground/70 text-sm">БЦ "Технопарк", офис 512</p>
                </div>
              </Card>
            </div>

            <Card className="glass border-white/10 p-8">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="glass border-white/20" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="ivan@example.com" className="glass border-white/20" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" className="glass border-white/20" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашей задаче..." className="glass border-white/20 min-h-[120px]" />
                </div>
                <Button className="w-full glow" size="lg">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={28} />
              <span className="text-xl font-bold gradient-text">CyberGuard</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Github" size={24} />
              </a>
            </div>

            <p className="text-foreground/60 text-sm">
              © 2024 CyberGuard. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
