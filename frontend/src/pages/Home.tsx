import { Smartphone, Laptop, Headset, Gamepad2 } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-16">
      <section className="text-center py-16 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-md text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tecnologia que cabe no seu bolso
        </h1>
        <p className="text-blue-100 text-lg mb-6">
          Smartphones, Notebooks e Acessórios com os melhores preços.
        </p>
        <a
          href="/products"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100"
        >
          Ver Produtos
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-6 rounded shadow flex gap-2 justify-center items-center"><Smartphone /> Smartphones</div>
          <div className="bg-gray-100 p-6 rounded shadow flex gap-2 justify-center items-center"><Laptop /> Notebooks</div>
          <div className="bg-gray-100 p-6 rounded shadow flex gap-2 justify-center items-center"><Headset /> Acessórios</div>
          <div className="bg-gray-100 p-6 rounded shadow flex gap-2 justify-center items-center"><Gamepad2 /> Games</div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Ofertas da Semana</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded">Promoção 1</div>
          <div className="bg-white p-4 shadow rounded">Promoção 2</div>
          <div className="bg-white p-4 shadow rounded">Promoção 3</div>
        </div>
      </section>
    </div>
  )
}
