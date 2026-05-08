import { Link } from 'react-router-dom';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Leaf, Package, Star } from 'lucide-react';
const heroPlanner = '/assets/cart1.jpg';
const heroPen = '/assets/cart4.jpg';
const promoWriting = '/assets/cart9.jpg';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      
      <section className="relative overflow-hidden bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="pill pill-sage-pale inline-block mb-6 text-[0.78rem] px-[14px] py-[4px]">
              ✦ Summer 2026 Collection
            </span>
            <h1 className="font-garamond leading-tight mb-6 text-[clamp(2.75rem,6vw,5rem)] text-espresso font-normal">
              Organise Your Life{' '}
              <em className="text-sage italic">Beautifully</em>
            </h1>
            <p className="text-base leading-relaxed mb-10 max-w-md font-light text-espresso-light">
              Thoughtfully designed stationery for the modern intentionalist. Experience the tactile joy of premium linen-bound planners and artisan accessories.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products" className="btn-sage rounded-lg">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link to="/products" className="btn-outline rounded-lg">
                View Lookbook
              </Link>
            </div>
          </div>

         
          <div className="hidden md:block relative h-[400px]">
            <img
              src={heroPlanner}
              alt="planner"
              className="absolute right-0 top-0 w-[65%] h-[75%] object-cover rounded-xl shadow-[0_20px_50px_rgba(45,42,38,0.15)]"
            />
            <img
              src={heroPen}
              alt="pen"
              className="absolute left-0 bottom-0 w-[45%] h-[55%] object-cover rounded-xl shadow-[0_12px_30px_rgba(45,42,38,0.12)]"
            />
            <div className="absolute right-3 bottom-20 bg-white px-4 py-2.5 rounded-xl text-sm shadow-[0_8px_25px_rgba(0,0,0,0.1)] font-jost">
              <p className="text-xs mb-0.5 text-espresso-light">Summer 2026</p>
              <p className="font-medium text-sm text-sage">New Collection →</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="border-b border-cream-dark overflow-x-auto bg-cream py-5">
        <div className="max-w-7xl mx-auto px-6 flex gap-2 flex-nowrap min-w-max sm:flex-wrap sm:min-w-0">
          {['All Items', 'Planners', 'Pens', 'Paper', 'Inks', 'Accessories'].map((cat, i) => (
            <Link
              key={cat}
              to="/products"
              className={`pill whitespace-nowrap no-underline px-[18px] py-[6px] text-[0.82rem] ${i === 0 ? 'pill-espresso' : 'pill-outline'}`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="section-title text-4xl">Featured Collection</h2>
            <div className="w-12 h-0.5 mt-2 bg-sage" />
          </div>
          <Link
            to="/products"
            className="flex items-center gap-1.5 text-sm no-underline text-sage font-jost"
          >
            View All <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      
      <section className="py-14 px-6 bg-cream-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: <Leaf size={22} />, title: 'Sustainably Sourced', desc: 'Every product is ethically made from renewable materials.' },
            { icon: <Package size={22} />, title: 'Free Shipping Over $60', desc: 'Careful packaging that preserves and protects your order.' },
            { icon: <Star size={22} />, title: 'Curated Quality', desc: 'Each item passes through our atelier quality review.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="mt-0.5 flex-shrink-0 text-sage">{icon}</div>
              <div>
                <h4 className="mb-1 font-garamond text-[1.2rem] text-espresso font-medium">
                  {title}
                </h4>
                <p className="text-sm leading-relaxed font-light text-espresso-light">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-espresso min-h-[320px]">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="text-xs tracking-widest uppercase mb-4 text-gold font-jost font-medium">
                ✦ Planner Progress
              </span>
              <h3 className="text-4xl leading-snug mb-5 font-garamond text-white font-normal">
                Master Your Habits with Style
              </h3>
              <p className="text-sm leading-relaxed mb-7 font-light text-white/60">
                Our planners don't just hold dates — they hold dreams. Every Paperly journal comes with access to our digital habit-tracking templates.
              </p>
              <div className="flex flex-col gap-2 mb-8">
                {['High-quality 120gsm bleeding-proof paper', 'Lay-flat binding for effortless writing'].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="text-sage-light text-base">✓</span>
                    <span className="text-sm font-light text-white/70">{f}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/products"
                className="btn-sage inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm w-fit no-underline"
              >
                Shop Planners <ArrowRight size={15} />
              </Link>
            </div>
            <div className="hidden md:block overflow-hidden">
              <img
                src={promoWriting}
                alt="writing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
