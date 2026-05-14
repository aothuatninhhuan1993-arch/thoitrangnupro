"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-black">
      <header className="flex items-center justify-between px-10 py-6 bg-white border-b">
        <div>
          <h1 className="text-2xl font-bold tracking-[0.3em]">THOITRANGNUPRO</h1>
          <p className="text-xs tracking-[0.2em] text-gray-500">Fashion For Modern Women</p>
        </div>

        <nav className="hidden md:flex gap-8 text-sm uppercase">
          <a>Trang chủ</a>
          <a>Hàng mới</a>
          <a>Đầm thiết kế</a>
          <a>Set bộ</a>
          <a>Sale</a>
        </nav>
      </header>

      <section className="relative h-[80vh] flex items-center px-10 bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1800&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="fashion"
        />

        <div className="relative max-w-2xl">
          <p className="uppercase tracking-[0.3em] text-yellow-200 mb-5">
            Elegant • Modern • Luxury
          </p>

          <h2 className="text-6xl font-bold mb-6">THOITRANGNUPRO</h2>

          <p className="text-xl leading-8 text-white/80">
            Thời trang nữ cao cấp dành cho phụ nữ hiện đại. Thanh lịch,
            sang trọng và tôn dáng trong từng thiết kế.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold">
            Khám phá ngay
          </button>
        </div>
      </section>

      <section className="px-10 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">Danh mục nổi bật</h3>

        <div className="grid md:grid-cols-4 gap-6">
          {["Đầm thiết kế", "Set bộ cao cấp", "Áo kiểu nữ", "Hàng mới về"].map((item) => (
            <div key={item} className="bg-white rounded-3xl overflow-hidden shadow">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
                className="h-80 w-full object-cover"
                alt={item}
              />
              <div className="p-6">
                <h4 className="text-xl font-bold">{item}</h4>
                <p className="mt-2 text-gray-500">Shop now</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-10 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">Sản phẩm nổi bật</h3>

        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item}>
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
                className="h-96 w-full object-cover rounded-3xl"
                alt="product"
              />
              <h4 className="mt-4 text-lg font-bold">Đầm thiết kế nữ TNP DV128</h4>
              <p className="text-gray-600">890.000đ</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 py-20">
        <h3 className="text-4xl font-bold mb-10">Giỏ hàng</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-3xl shadow">
            <h4 className="text-xl font-bold">Đầm thiết kế TNP DV128</h4>
            <p className="mt-2 text-gray-600">Size M • Màu Kem</p>
            <p className="mt-4 font-bold">890.000đ</p>
          </div>

          <div className="bg-black text-white p-8 rounded-3xl">
            <h4 className="text-2xl font-bold">Thanh toán</h4>
            <p className="mt-6">Tạm tính: 890.000đ</p>
            <p>Giao hàng: Miễn phí</p>
            <p className="mt-6 text-2xl font-bold">Tổng: 890.000đ</p>
            <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-bold">
              Thanh toán ngay
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white px-10 py-16">
        <h3 className="text-3xl font-bold tracking-[0.25em]">THOITRANGNUPRO</h3>
        <p className="mt-5 text-white/70">thoitrangnupro.vercel.app</p>
      </footer>
    </main>
  );
}