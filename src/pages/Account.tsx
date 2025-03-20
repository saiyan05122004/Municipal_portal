
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Mail, Lock, User, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Account: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8 animate-fade-up">
              <h1 className="text-3xl font-bold mb-2">Личный кабинет</h1>
              <p className="text-muted-foreground">
                Войдите или зарегистрируйтесь, чтобы получить доступ к муниципальным услугам
              </p>
            </div>
            
            <Card className="animate-fade-up shadow-sm" style={{ animationDelay: '0.1s' }}>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-2">
                  <TabsTrigger value="login">Вход</TabsTrigger>
                  <TabsTrigger value="register">Регистрация</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <CardHeader>
                    <CardTitle>Вход в личный кабинет</CardTitle>
                    <CardDescription>
                      Введите свои данные для входа в систему
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form>
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                            <Input id="email" placeholder="mail@example.com" type="email" className="pl-10" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="password">Пароль</Label>
                            <a href="#" className="text-sm text-primary hover:underline">
                              Забыли пароль?
                            </a>
                          </div>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                            <Input id="password" type="password" className="pl-10" />
                          </div>
                        </div>
                        
                        <Button type="submit" className="w-full btn-hover">
                          Войти
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        
                        <div className="relative my-2">
                          <div className="absolute inset-0 flex items-center">
                            <Separator className="w-full" />
                          </div>
                          <div className="relative flex justify-center">
                            <span className="bg-card px-2 text-xs text-muted-foreground">
                              или
                            </span>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="w-full">
                          Войти через Госуслуги
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </TabsContent>
                
                <TabsContent value="register">
                  <CardHeader>
                    <CardTitle>Создание аккаунта</CardTitle>
                    <CardDescription>
                      Заполните форму для регистрации на портале
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form>
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullname">ФИО</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                            <Input id="fullname" placeholder="Иванов Иван Иванович" className="pl-10" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="register-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                            <Input id="register-email" placeholder="mail@example.com" type="email" className="pl-10" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="register-password">Пароль</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                            <Input id="register-password" type="password" className="pl-10" />
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Минимум 8 символов, включая букву и цифру
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-2 pt-2">
                          <div className="flex items-center h-5 pt-1">
                            <input
                              id="terms"
                              aria-describedby="terms-description"
                              name="terms"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="terms" className="text-muted-foreground">
                              Я согласен с{" "}
                              <a href="#" className="text-primary hover:underline">
                                условиями использования
                              </a>{" "}
                              и{" "}
                              <a href="#" className="text-primary hover:underline">
                                политикой конфиденциальности
                              </a>
                            </label>
                          </div>
                        </div>
                        
                        <Button type="submit" className="w-full btn-hover mt-2">
                          Зарегистрироваться
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </Card>
            
            <div className="mt-8 glass rounded-xl p-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-semibold text-lg mb-4">Преимущества личного кабинета</h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm">Быстрый доступ ко всем муниципальным услугам</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm">Отслеживание статуса заявок в реальном времени</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm">Сохранение истории обращений и полученных документов</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm">Персональные уведомления о новых услугах и статусах заявок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
