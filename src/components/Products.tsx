import { ShoppingBag, Package, Trophy, Users, Check } from 'lucide-react';

export default function Products() {
  const products = [
    {
      title: 'Polo T-Shirts',
      badge: 'POPULAR',
      offer: 'Buy 1 Get 1 Free',
      price: '₹280',
      moq: '100 pcs',
      imageSrc: '/polo-tshirts.jpg', // TODO: replace with your real image
      features: [
        'Premium cotton fabric',
        'Corporate collar design',
        'Logo printing/embroidery',
        'Multiple color options',
      ],
      icon: ShoppingBag,
    },
    {
      title: 'Round Neck Tees',
      badge: 'CORPORATE CHOICE',
      offer: null,
      price: '₹180',
      moq: '100 pcs',
      imageSrc: '/staff-uniforms.jpg', // TODO
      features: [
        'Soft combed cotton',
        'Perfect for uniforms',
        'Screen printing ready',
        'Durable stitching',
      ],
      icon: Users,
    },
    {
      title: 'Marathon Tees',
      badge: 'BULK SPECIAL',
      offer: 'Starting ₹150',
      price: '₹150',
      moq: '1000 pcs',
      imageSrc: '/marathon-tees.jpg', // TODO
      features: [
        'Breathable dry-fit material',
        'Designed for runners',
        'Event logo printing',
        'Bulk discounts available',
      ],
      icon: Trophy,
    },
    {
      title: 'Staff Uniforms',
      badge: 'CUSTOM',
      offer: null,
      price: 'Custom',
      moq: '100 pcs',
      imageSrc: '/polo-tshirts.jpg', // TODO
      features: [
        'Fully customizable',
        'Industry-specific designs',
        'Bulk order pricing',
        'Fast turnaround',
      ],
      icon: Package,
    },
  ];

  return (
    <section id="products" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Product Categories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From corporate uniforms to marathon events — we manufacture it all in-house
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-200 flex flex-col h-full"
              >
                {/* image section */}
                <div className="relative">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={product.imageSrc}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-semibold text-slate-800 shadow">
                      {product.badge}
                    </span>
                  </div>

                  {/* subtle gradient for readability (optional) */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* price + moq */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-slate-900">{product.price}</span>
                      <span className="text-sm text-slate-500">/ piece</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-slate-600">
                      <Package className="w-4 h-4" />
                      <span className="text-sm font-medium">MOQ: {product.moq}</span>
                    </div>
                  </div>

                  {/* offer */}
                  {product.offer && (
                    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-4 text-center">
                      <span className="text-red-700 font-semibold text-sm">{product.offer}</span>
                    </div>
                  )}

                  {/* features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* button pinned to bottom */}
                  <button
                    onClick={() =>
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="mt-auto w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA band */}
        {/* <div className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <Package className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Need Custom Event Apparel?</h3>
                <p className="text-slate-600">
                  We handle marathons, corporate events, and promotional campaigns
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap shadow-lg"
            >
              Request Custom Quote
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
