
import React from "react";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-amber-600">О нашем ресторане</h2>
        <Separator className="mx-auto w-24 bg-amber-700 my-4" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-zinc-100">Ресторан для интровертов</h3>
            <p className="text-zinc-300 mb-4">
              В "Западном побережье" мы создали уникальное пространство для людей, ценящих уединение и тишину. 
              Здесь вы не будете испытывать лишнего социального давления или шума.
            </p>
            <p className="text-zinc-300 mb-4">
              Наши персональные кабинки обеспечивают приватное пространство, 
              а система цифрового заказа позволяет минимизировать общение с персоналом.
            </p>
            <p className="text-zinc-300">
              Мы понимаем потребность в личном пространстве и создали место, 
              где можно спокойно наслаждаться едой, не беспокоясь о социальных взаимодействиях.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=800" 
              alt="Уютная атмосфера ресторана" 
              className="absolute inset-0 w-full h-full object-cover rounded-lg" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-amber-600">Тихая атмосфера</h4>
            <p className="text-zinc-400">Приглушенный свет, акустические панели и специальная планировка помещения обеспечивают уютную и тихую обстановку.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-amber-600">Личное пространство</h4>
            <p className="text-zinc-400">Индивидуальные кабинки и столы с перегородками гарантируют вашу приватность и комфорт.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-amber-600">Цифровое обслуживание</h4>
            <p className="text-zinc-400">Заказы принимаются через планшеты за столиками — никакого навязчивого взаимодействия с персоналом.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
