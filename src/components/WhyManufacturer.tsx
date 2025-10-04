import { Factory, DollarSign, Shield, Zap } from 'lucide-react';

export default function WhyManufacturer() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Direct Factory Pricing',
      description: 'No middlemen, no markups. Get the best bulk rates directly from our Tirupur manufacturing facility.',
      color: 'bg-green-500'
    },
    {
      icon: Factory,
      title: 'In-House Production',
      description: 'Polo, Round Neck, Marathon Tees all stitched & printed in our own facility with complete quality control.',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Every piece is checked before dispatch. We maintain strict quality standards for corporate & event requirements.',
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: 'Customization at Scale',
      description: 'Logos, colors, events — delivered your way. From screen printing to embroidery, we handle it all.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="why-manufacturer" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Buy from Manufacturer?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cut costs, maintain quality, and get your bulk orders delivered on time — every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
              >
                <div className={`${benefit.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-slate-300">In-House Production</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">7-14 Days</div>
              <div className="text-slate-300">Average Delivery Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">MOQ 100</div>
              <div className="text-slate-300">Minimum Order Quantity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
