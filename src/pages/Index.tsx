import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, message });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Shield" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold">SecureVPN</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#servers" className="text-sm hover:text-primary transition-colors">Серверы</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Тарифы</a>
            <a href="#features" className="text-sm hover:text-primary transition-colors">Возможности</a>
            <a href="#support" className="text-sm hover:text-primary transition-colors">Поддержка</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            Начать
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Безопасный интернет для всех
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Защитите свою приватность в сети
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Высокоскоростные серверы и неограниченная пропускная способность для полной свободы в интернете
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать VPN
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Стран</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Серверов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10M+</div>
                  <div className="text-sm text-muted-foreground">Пользователей</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/c0aacccf-909c-4161-88ff-d41125b05472/files/5b161355-eb57-4006-9d2c-46f16268e004.jpg" 
                alt="VPN Security" 
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servers" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">Возможности</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Передовые технологии защиты и максимальная производительность
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { country: "США", servers: 250, flag: "🇺🇸" },
              { country: "Германия", servers: 180, flag: "🇩🇪" },
              { country: "Япония", servers: 120, flag: "🇯🇵" },
              { country: "Великобритания", servers: 150, flag: "🇬🇧" },
              { country: "Франция", servers: 100, flag: "🇫🇷" },
              { country: "Канада", servers: 90, flag: "🇨🇦" },
              { country: "Австралия", servers: 80, flag: "🇦🇺" },
              { country: "Сингапур", servers: 70, flag: "🇸🇬" }
            ].map((server, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="text-4xl mb-2">{server.flag}</div>
                  <CardTitle className="text-xl">{server.country}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Server" size={16} />
                    {server.servers} серверов
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">География серверов</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Серверы по всему миру</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 1000 высокоскоростных серверов в 50+ странах
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { country: "США", servers: 250, flag: "🇺🇸" },
              { country: "Германия", servers: 180, flag: "🇩🇪" },
              { country: "Япония", servers: 120, flag: "🇯🇵" },
              { country: "Великобритания", servers: 150, flag: "🇬🇧" },
              { country: "Франция", servers: 100, flag: "🇫🇷" },
              { country: "Канада", servers: 90, flag: "🇨🇦" },
              { country: "Австралия", servers: 80, flag: "🇦🇺" },
              { country: "Сингапур", servers: 70, flag: "🇸🇬" }
            ].map((server, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="text-4xl mb-2">{server.flag}</div>
                  <CardTitle className="text-xl">{server.country}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Server" size={16} />
                    {server.servers} серверов
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите свой план</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>Месяц</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">990₽</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["Неограниченный трафик", "50+ стран", "Все устройства", "24/7 поддержка"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Выбрать</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-primary hover:shadow-xl transition-all relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle>Год</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">499₽</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
                <div className="text-sm text-muted-foreground">5990₽ в год • экономия 50%</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["Неограниченный трафик", "50+ стран", "Все устройства", "24/7 поддержка", "Приоритетная поддержка"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">Выбрать</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>2 года</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">349₽</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
                <div className="text-sm text-muted-foreground">8380₽ за 2 года • экономия 65%</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["Неограниченный трафик", "50+ стран", "Все устройства", "24/7 поддержка", "Приоритетная поддержка", "Эксклюзивные серверы"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Выбрать</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <Icon name="Shield" size={16} className="inline mr-1" />
            30-дневная гарантия возврата денег
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">Возможности</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Передовые технологии защиты и максимальная производительность
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-primary" size={24} />
                </div>
                <CardTitle>Высокая скорость</CardTitle>
                <CardDescription>
                  Наши серверы обеспечивают максимальную скорость соединения без ограничений
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Infinity" className="text-secondary" size={24} />
                </div>
                <CardTitle>Без ограничений</CardTitle>
                <CardDescription>
                  Неограниченная пропускная способность и отсутствие лимитов на трафик
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Lock" className="text-primary" size={24} />
                </div>
                <CardTitle>Полная защита</CardTitle>
                <CardDescription>
                  Военное шифрование AES-256 и строгая политика no-logs
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Globe" className="text-secondary" size={24} />
                </div>
                <CardTitle>50+ стран</CardTitle>
                <CardDescription>
                  Доступ к контенту из любой точки мира через наши серверы
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Smartphone" className="text-primary" size={24} />
                </div>
                <CardTitle>Все устройства</CardTitle>
                <CardDescription>
                  Windows, Mac, iOS, Android, Linux — одна подписка для всех
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Clock" className="text-secondary" size={24} />
                </div>
                <CardTitle>24/7 поддержка</CardTitle>
                <CardDescription>
                  Наша команда всегда готова помочь в любое время суток
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="support" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Поддержка</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Есть вопросы? Мы всегда готовы помочь
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Напишите нам</CardTitle>
              <CardDescription>Ответим в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    type="email" 
                    placeholder="Ваш email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/50 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Shield" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">SecureVPN</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ваша безопасность — наш приоритет
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Серверы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 SecureVPN. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;