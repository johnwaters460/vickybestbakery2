export default function Products() {
  return (
    <main className="min-h-screen bg-pink-50 p-10 text-center">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">Our Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <img src="/cake1.jpg" alt="Cake" className="rounded-xl shadow-md" />
        <img src="/cake2.jpg" alt="Cake" className="rounded-xl shadow-md" />
        <img src="/cake3.jpg" alt="Cake" className="rounded-xl shadow-md" />
      </div>
    </main>
  );
}