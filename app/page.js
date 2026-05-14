"use client";

import { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "Đầm thiết kế nữ TNP DV128",
    price: 890000,
    oldPrice: 1190000,
    category: "Đầm thiết kế",
    tag: "Best Seller",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Kem", "Đen", "Hồng nude"],
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Set bộ cao cấp TNP SB052",
    price: 1190000,
    oldPrice: 1390000,
    category: "Set bộ",
    tag: "New",
    sizes: ["S", "M", "L"],
    colors: ["Trắng", "Đen"],
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Áo kiểu nữ TNP AK216",
    price: 590000,
    oldPrice: 690000,
    category: "Áo kiểu",
    tag: "Hot",
    sizes: ["S", "M", "L"],
    colors: ["Trắng", "Kem"],
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Đầm công sở TNP DV233",
    price: 990000,
    oldPrice: 1290000,
    category: "Đầm thiết kế",
    tag: "Luxury",
    sizes: ["M", "L", "XL"],
    colors: ["Đen", "Xanh navy"],
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
  },
];

function formatPrice(value) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedSize, setSelectedSize] = useState(products[0].sizes[0]);
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0]);
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const shipping = subtotal >= 1000000 || subtotal === 0 ? 0 : 30000;
  const total = subtotal + shipping;

  const addToCart = () => {
    const itemKey = `${selectedProduct.id}-${selectedSize}-${selectedColor}`;

    setCart((items) => {
      const existed = items.find((item) => item.key === itemKey);
      if (existed) {
        return items.map((item) =>
          item.key === itemKey ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [
        ...items,
        {
          ...selectedProduct,
          key: itemKey,
          selectedSize,
          selectedColor,
          quantity: 1,
        },
      ];
    });
  };

  const removeItem = (key) => {
    setCart((items) => items.filter((item) => item.key !== key));
  };

  const changeQty = (key, quantity) => {
    setCart((items) =>
      items.map((item) =>
        item.key === key ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const orderText = encodeURIComponent(
    `Đơn hàng THOITRANGNUPRO%0A%0A` +
      `Khách hàng: ${customer.name}%0A` +
      `SĐT: ${customer.phone}%0A` +
      `Địa chỉ: ${customer.address}%0A` +
      `Ghi chú: ${customer.note || "Không có"}%0A%0A` +
      `Sản phẩm:%0A` +
      cart
        .map(
          (item) =>
            `- ${item.name} | Size ${item.selectedSize} | Màu ${item.selectedColor} | SL ${item.quantity} | ${formatPrice(item.price * item.quantity)}`
        )
        .join("%0A") +
      `%0A%0ATổng tiền: ${formatPrice(total)}`
  );

  const zaloPhone = "0900000000";
  const zaloLink = `https://zalo.me/${zaloPhone}?text=${orderText}`;

  return (
    <main className="min-h-screen bg-[#faf7f2] text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-black tracking-[0.32em] md:text-3xl">
              THOITRANGNUPRO
            </h1>
            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-neutral-500">
              Fashion For Modern Women
            </p>
          </div>

          <nav className="hidden gap-8 text-sm font-semibold uppercase tracking-[0.12em] md:flex">
            <a href="#home">Trang chủ</a>
            <a href="#products">Sản phẩm</a>
            <a href="#detail">Chi tiết</a>
            <a href="#cart">Giỏ hàng</a>
            <a href="#checkout">Đặt hàng</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative flex min-h-[82vh] items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1800&q=80"
          className="absolute inset-0 h-full w-full object-cover"
          alt="THOITRANGNUPRO fashion"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto max-w-7xl px-6 text-white">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#f7e3b5]">
            Elegant • Modern • Luxury
          </p>
          <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            THOITRANGNUPRO
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-white/85 md:text-xl">
            Thời trang nữ cao cấp dành cho phụ nữ hiện đại. Thanh lịch, sang trọng
            và tôn dáng trong từng thiết kế.
          </p>
          <a
            href="#products"
            className="mt-9 inline-flex rounded-full bg-white px-9 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#f7e3b5]"
          >
            Khám phá ngay
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Danh mục nổi bật
          </p>
          <h3 className="mt-4 text-4xl font-black">Phong cách dành cho nàng</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {["Đầm thiết kế", "Set bộ cao cấp", "Áo kiểu nữ", "Hàng mới về"].map(
            (item) => (
              <div key={item} className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
                  className="h-80 w-full object-cover"
                  alt={item}
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold">{item}</h4>
                  <p className="mt-2 text-neutral-500">Shop now</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <section id="products" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Best Seller
            </p>
            <h3 className="mt-4 text-4xl font-black">Sản phẩm nổi bật</h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setSelectedSize(product.sizes[0]);
                  setSelectedColor(product.colors[0]);
                }}
                className="group text-left"
              >
                <div className="relative overflow-hidden rounded-[2rem] bg-neutral-100">
                  <img
                    src={product.image}
                    className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105"
                    alt={product.name}
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]">
                    {product.tag}
                  </span>
                </div>
                <h4 className="mt-5 text-lg font-bold">{product.name}</h4>
                <p className="mt-1 text-neutral-500 line-through">
                  {formatPrice(product.oldPrice)}
                </p>
                <p className="text-xl font-black">{formatPrice(product.price)}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="detail" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
            <img
              src={selectedProduct.image}
              className="h-full min-h-[560px] w-full object-cover"
              alt={selectedProduct.name}
            />
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
            <span className="rounded-full bg-[#faf7f2] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
              {selectedProduct.tag}
            </span>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              {selectedProduct.name}
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <p className="text-3xl font-black">{formatPrice(selectedProduct.price)}</p>
              <p className="text-lg text-neutral-400 line-through">
                {formatPrice(selectedProduct.oldPrice)}
              </p>
            </div>

            <div className="mt-9">
              <p className="mb-4 font-bold">Chọn size</p>
              <div className="flex flex-wrap gap-3">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full border px-6 py-3 font-bold transition ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-neutral-300 bg-white hover:bg-black hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 font-bold">Chọn màu</p>
              <div className="flex flex-wrap gap-3">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border px-6 py-3 font-bold transition ${
                      selectedColor === color
                        ? "border-black bg-black text-white"
                        : "border-neutral-300 bg-white hover:bg-black hover:text-white"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={addToCart}
              className="mt-10 w-full rounded-full bg-black px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-700"
            >
              Thêm vào giỏ hàng
            </button>

            <div className="mt-8 rounded-[2rem] bg-[#faf7f2] p-6 leading-8 text-neutral-700">
              <strong>THÔNG TIN SẢN PHẨM</strong>
              <br />
              Form tôn dáng, chất liệu cao cấp, thiết kế sang trọng phù hợp đi tiệc,
              công sở và dạo phố. Shop hỗ trợ tư vấn size trước khi giao hàng.
            </div>
          </div>
        </div>
      </section>

      <section id="cart" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Shopping Bag
              </p>
              <h3 className="mt-4 text-4xl font-black">Giỏ hàng</h3>
            </div>
            <p className="text-neutral-500">{cart.length} sản phẩm</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
            <div className="space-y-5">
              {cart.length === 0 && (
                <div className="rounded-[2rem] bg-[#faf7f2] p-8 text-neutral-600">
                  Giỏ hàng đang trống. Anh chọn sản phẩm rồi bấm “Thêm vào giỏ hàng”.
                </div>
              )}

              {cart.map((item) => (
                <div
                  key={item.key}
                  className="grid gap-5 rounded-[2rem] bg-[#faf7f2] p-5 md:grid-cols-[120px_1fr_auto]"
                >
                  <img
                    src={item.image}
                    className="h-36 w-full rounded-[1.5rem] object-cover"
                    alt={item.name}
                  />
                  <div>
                    <h4 className="text-xl font-bold">{item.name}</h4>
                    <p className="mt-2 text-neutral-600">
                      Size {item.selectedSize} • Màu {item.selectedColor}
                    </p>
                    <p className="mt-3 font-bold">{formatPrice(item.price)}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() => changeQty(item.key, item.quantity - 1)}
                        className="rounded-full border border-neutral-300 px-4 py-2"
                      >
                        -
                      </button>
                      <span className="font-bold">{item.quantity}</span>
                      <button
                        onClick={() => changeQty(item.key, item.quantity + 1)}
                        className="rounded-full border border-neutral-300 px-4 py-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-4">
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-sm font-bold text-red-600"
                    >
                      Xóa
                    </button>
                    <div className="text-xl font-black">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-[2rem] bg-black p-8 text-white">
              <h3 className="text-3xl font-black">Tóm tắt đơn</h3>
              <div className="mt-8 space-y-5 text-white/80">
                <div className="flex justify-between">
                  <span>Tạm tính</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Giao hàng</span>
                  <span>{shipping === 0 ? "Miễn phí" : formatPrice(shipping)}</span>
                </div>
                <div className="border-t border-white/20 pt-5" />
                <div className="flex justify-between text-2xl font-black text-white">
                  <span>Tổng</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <a
                href="#checkout"
                className="mt-10 block rounded-full bg-white px-8 py-5 text-center text-sm font-black uppercase tracking-[0.18em] text-black"
              >
                Tiến hành đặt hàng
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="checkout" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Checkout
            </p>
            <h3 className="mt-4 text-4xl font-black">Thông tin đặt hàng</h3>
            <p className="mt-5 leading-8 text-neutral-600">
              Khách nhập thông tin, sau đó bấm gửi đơn. Shop nhận đơn và xác nhận
              qua Zalo/điện thoại trước khi giao COD.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <div className="grid gap-4">
              <input
                className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-black"
                placeholder="Họ tên khách hàng"
                value={customer.name}
                onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              />
              <input
                className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-black"
                placeholder="Số điện thoại"
                value={customer.phone}
                onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
              />
              <input
                className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-black"
                placeholder="Địa chỉ nhận hàng"
                value={customer.address}
                onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
              />
              <textarea
                className="min-h-28 rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-black"
                placeholder="Ghi chú đơn hàng"
                value={customer.note}
                onChange={(e) => setCustomer({ ...customer, note: e.target.value })}
              />
            </div>

            <a
              href={cart.length === 0 ? "#products" : zaloLink}
              target={cart.length === 0 ? "_self" : "_blank"}
              className="mt-6 block rounded-full bg-black px-8 py-5 text-center text-sm font-black uppercase tracking-[0.18em] text-white"
            >
              {cart.length === 0 ? "Chọn sản phẩm trước" : "Gửi đơn qua Zalo"}
            </a>
            <p className="mt-4 text-sm leading-7 text-neutral-500">
              Lưu ý: thay số Zalo trong code tại biến <strong>zaloPhone</strong> thành số điện thoại thật của shop anh.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-3xl font-black tracking-[0.25em]">THOITRANGNUPRO</h3>
          <p className="mt-5 max-w-xl leading-8 text-white/70">
            Thời trang nữ cao cấp dành cho phụ nữ hiện đại. Thanh lịch, sang trọng
            và tối giản.
          </p>
          <p className="mt-5 text-white/50">thoitrangnupro.vercel.app</p>
        </div>
      </footer>
    </main>
  );
}
