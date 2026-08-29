import React from 'react'
import shopbg from '../assets/shop-bg.webp'
import { Truck, RotateCcwClock, LockKeyhole, MoveRight } from 'lucide-react'
import { motion } from "framer-motion";
import bg from '../assets/herobg.webp'
import whyus from '../assets/whyus.jpg'
import storyimg from '../assets/story-img.webp'
import amla from '../assets/amla.jpg'
import rosemary from '../assets/rosemary.jpg'
import fenugreek from '../assets/fenugreek.jpg'
import aloevera from '../assets/aloevera.jpg'
import wet from '../assets/wet.png'
import massage from '../assets/massage.png'
import wash from '../assets/wash.png'

function Shop() {
  return (
    <main>
      <section className="min-h-screen w-full relative flex items-center bg-position-[80%_70%] tablet:bg-center" style={{ backgroundImage: `url(${shopbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="max-w-350 w-full mx-auto flex justify-start items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-87.5 tablet:max-w-xl w-full hidden xs:flex flex-col justify-center items-end gap-4 tablet:gap-8 ml-10 tablet:ml-20"
          >
            <div>

              <h2 className="text-[2.5rem] tablet:text-[3rem] laptop:text-[3.8rem] font-display text-(--secondary-dark) leading-16">
                Give Your Hair<br /> The <span className="text-(--tertiary-accent) italic" style={{ textShadow: "0 0 5px #C6A15B, 0 0 15px #C6A15B, 0 0 25px #C6A15B" }}>Love</span> It Deserves
              </h2>
              <p className="max-w-[80%] text-[1.05rem] text-(--primary-dark) text-left leading-6">
                Pure herbal ingredients to cleanse, nourish and strengthen naturally.
              </p>
              <div className="flex justify-start items-center tablet:gap-4">
                <button className="bg-(--secondary-dark) text-white text-[12px] px-5 tablet:px-8 py-3 tablet:text-[14px] rounded-lg tracking-[0.15em] font-body hover:opacity-95 transition-opacity duration-300 cursor-pointer">
                  Shop Now
                </button>
                <a href='#ingredients' className="flex justify-center items-center gap-1.5 text-(--primary-dark) text-[14px] px-5 tablet:px-8 py-3 tablet:text-[16px] rounded-sm font-body hover:text-(--tertiary-accent) transition-[color] duration-300 cursor-pointer">
                  Explore Ingredients <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="w-full bg-linear-to-br from-(--secondary-accent) to-(--tertiary-accent) py-8 px-4">
        <div className="w-full max-w-[80%] tablet:max-w-350 mx-auto flex flex-col tablet:flex-row justify-center items-start tablet:items-center gap-4 tablet:gap-10 laptop:gap-20">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center gap-2.5 text-(--primary-light) font-body"
          >
            <span><Truck className="w-6 h-6 tablet:w-7 tablet:h-7 laptop:w-8 laptop:h-8" /></span>
            <div className="w-full flex flex-col justify-center items-start">
              <h3 className="text-[14px] font-semibold">Free Shipping</h3>
              <p className="text-[13px]">on all orders over Rs.2000</p>
            </div>
          </motion.div>
          <div className="relative h-12 w-px bg-(--secondary-light)">
            <span className="absolute z-20 left-[-2.4px] top-0 w-1.5 h-1.5 rounded-full bg-(--secondary-light)"></span>
            <span className="absolute z-20 left-[-2.4px] bottom-0 w-1.5 h-1.5 rounded-full bg-(--secondary-light)"></span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center gap-2.5 text-(--primary-light) font-body"
          >
            <span><RotateCcwClock className="w-6 h-6 tablet:w-7 tablet:h-7 laptop:w-8 laptop:h-8" /></span>
            <div className="w-full flex flex-col justify-center items-start">
              <h3 className="text-[14px] font-semibold">30-Day Returns</h3>
              <p className="text-[13px]">love it or return it</p>
            </div>
          </motion.div>
          <div className="relative h-12 w-px bg-(--secondary-light)">
            <span className="absolute z-20 left-[-2.4px] top-0 w-1.5 h-1.5 rounded-full bg-(--secondary-light)"></span>
            <span className="absolute z-20 left-[-2.4px] bottom-0 w-1.5 h-1.5 rounded-full bg-(--secondary-light)"></span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center gap-2.5 text-(--primary-light) font-body"
          >
            <span><LockKeyhole className="w-6 h-6 tablet:w-7 tablet:h-7 laptop:w-8 laptop:h-8" /></span>
            <div className="w-full flex flex-col justify-center items-start">
              <h3 className="text-[14px] font-semibold">Secure Checkout</h3>
              <p className="text-[13px]">100% protected payments</p>
            </div>
          </motion.div>
        </div>
      </section>
      <section id='about-us' className="w-full py-8 px-4 pt-16">
        <div className="w-full max-w-250 mx-auto flex justify-center items-center gap-18">
          <div className="hidden tablet:flex w-md rounded-2xl overflow-hidden">
            <img src={storyimg} alt='Our-Story' className="object-contain" />
          </div>
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex flex-col justify-center items-start">
              <span className="text-[14px] xs:text-[16px] text-(--tertiary-accent)">OUR STORY</span>
              <div className="flex justify-center items-center text-(--primary-light)"><p className="w-28 h-px bg-(--secondary-accent)"></p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#606a49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="rotate-12 mb-2 mr-2 lucide lucide-leaf-icon lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg></div>
            </div>
            <div className="max-w-md w-full flex flex-col justify-center items-start gap-3">
              <h2 className="text-[2.4rem] xs:text-[2.8rem] text-(--primary-dark) font-display leading-14 mb-2">
                Rooted in Nature,<br /> Made for your Ritual.
              </h2>
              <p className="text-[15px] font-body text-(secondary-dark) text-left">
                Velora Naturals believes that hair care should feel simple, thoughtful and inspired by nature. Our shampoo brings together carefully selected ingredients like Amla, Rosemary, Fenugreek and Aloe Vera to create a refreshing and nourishing hair-care experience.
              </p>
              <div className="flex justify-center items-center text-(--primary-light)"><p className="w-18 h-px bg-(--secondary-accent)"></p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#606a49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="rotate-12 mb-2 mr-2 lucide lucide-leaf-icon lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg></div>
              <p className="text-[15px] font-body text-(secondary-dark) text-left">
                Created with a focus on gentle care, Velora Naturals is sulfate and paraben free—making every wash feel like a simple moment of care for your hair.
              </p>
            </div>
            <a href='#ingredients' className="bg-(--tertiary-accent) text-white text-[12px] px-5 mt-4 tablet:px-8 py-3 xs:text-[14px] rounded-lg font-body flex justify-center items-center gap-3 hover:opacity-95 transition-opacity duration-300 cursor-pointer">
              Discover our ingredients <MoveRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section id='why-velora' className="w-full py-8 px-4">
        <div className="max-w-250 w-full mx-auto flex flex-col justify-center items-center gap-6 tablet:gap-12 relative">
          <h2 className="relative text-[1.6rem] tablet:text-[2rem] text-(--secondary-dark) font-display pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-14 after:h-[2.2px] after:translate-x-30 after:rounded-sm after:bg-(--tertiary-accent)">Why Choose <span className="text-(--tertiary-accent)">VELORA</span>?</h2>
          <div className="w-full flex flex-col xs:flex-row justify-between items-center gap-8 xs:gap-0">
            <div className="hidden xs:flex flex-col justify-center items-center gap-8 tablet:gap-26">
              <div className="max-w-72 w-full flex justify-center items-start gap-2.5">
                <span className="w-5 h-5 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">1</span>
                <div className="flex flex-col justify-center items-start gap-1 tablet:gap-2 -mt-1.5">
                  <h3 className="relative text-[0.9rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Botanical Powered</h3>
                  <p className="text-[11px] xs:text-[12px] tablet:text-[14px] font-body text-(--secondary-dark) leading-4">A thoughtful blend of Amla, Rosemary, Fenugreek & Aloe Vera.</p>
                </div>
              </div>
              <div className="max-w-72 w-full flex justify-center items-start gap-2.5">
                <span className="w-5 h-5 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">2</span>
                <div className="flex flex-col justify-center items-start gap-2 -mt-1.5">
                  <h3 className="relative text-[0.9rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Nourishing Care</h3>
                  <p className="text-[11px] xs:text-[12px] tablet:text-[14px] font-body text-(--secondary-dark) leading-4">Helps nourish your hair and leaves it feeling soft and refreshed.</p>
                </div>
              </div>
            </div>
            <div className="max-w-72 tablet:max-w-120 mx-auto w-full rounded-full overflow-hidden">
              <img src={whyus} className="object-contain" />
            </div>
            <div className="hidden xs:flex flex-col justify-center items-center gap-8 tablet:gap-26">
              <div className="max-w-72 w-full flex justify-center items-start gap-2.5">
                <span className="w-5 h-5 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">3</span>
                <div className="flex flex-col justify-center items-start gap-2 -mt-1.5">
                  <h3 className="relative text-[0.9rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Clean Formula</h3>
                  <p className="text-[11px] xs:text-[12px] tablet:text-[14px] font-body text-(--secondary-dark) leading-4">Sulfate & Paraben Free for a gentler hair-care routine.</p>
                </div>
              </div>
              <div className="max-w-76 w-full flex justify-center items-start gap-2.5">
                <span className="w-5 h-5 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">4</span>
                <div className="flex flex-col justify-center items-start gap-2 -mt-1.5">
                  <h3 className="relative text-[0.9rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Made for Healthy Hair</h3>
                  <p className="text-[11px] xs:text-[12px] tablet:text-[14px] font-body text-(--secondary-dark) leading-4">A natural-inspired formula for softer, smoother, more radiant-looking hair.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center xs:hidden">
              <div className="flex flex-col justify-center items-center gap-8 tablet:gap-26">
                <div className="max-w-72 w-full flex justify-center items-start gap-2.5">
                  <span className="w-6 h-6 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">1</span>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Botanical Powered</h3>
                    <p className="text-[14px] font-body text-(--secondary-dark) leading-4">A thoughtful blend of Amla, Rosemary, Fenugreek & Aloe Vera.</p>
                  </div>
                </div>
                <div className="max-w-72 w-full flex justify-center items-start gap-2.5">
                  <span className="w-6 h-6 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">2</span>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Nourishing Care</h3>
                    <p className="text-[14px] font-body text-(--secondary-dark) leading-4">Helps nourish your hair and leaves it feeling soft and refreshed.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-22">
                <div className="max-w-72 w-full flex justify-center items-start gap-2.5">
                  <span className="w-6 h-6 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">3</span>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Clean Formula</h3>
                    <p className="text-[14px] font-body text-(--secondary-dark) leading-4">Sulfate & Paraben Free for a gentler hair-care routine.</p>
                  </div>
                </div>
                <div className="max-w-76 w-full flex justify-center items-start gap-2.5">
                  <span className="w-6 h-6 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">4</span>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Made for Healthy Hair</h3>
                    <p className="text-[14px] font-body text-(--secondary-dark) leading-4">A natural-inspired formula for softer, smoother, more radiant-looking hair.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='ingredients' className="w-full py-8 px-4 bg-(--primary-light)">
        <div className="w-full max-w-250 mx-auto flex flex-col justify-center items-center gap-8 mt-4">
          <div className="flex flex-col justify-center items-center">
            <span className="text-[14px] xs:text-[16px] text-(--tertiary-accent)">KEY INGREDIENTS</span>
            <h2 className="text-[2.2rem] xs:text-[2.5rem] text-center text-(--primary-dark) font-display leading-14 mb-2">
              Natures Best. Your Hair's Rest.
            </h2>
          </div>
          <div className="grid xs:grid-cols-2 laptop:grid-cols-4 gap-6">
            <div className="flex flex-row-reverse laptop:flex-col justify-start items-center rounded-2xl overflow-hidden bg-(--secondary-light) border border-(--text-light-muted)">
              <div className="w-full aspect-3/2 xs:aspect-4/3">
                <img src={amla} alt='Amla' className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center items-start p-3">
                <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Amla</h3>
                <p className="text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5">Strengthens roots and supports healthy growth.</p>
              </div>
            </div>
            <div className="flex flex-row-reverse laptop:flex-col justify-start items-center rounded-2xl overflow-hidden bg-(--secondary-light) border border-(--text-light-muted)">
              <div className="w-full aspect-3/2 xs:aspect-4/3">
                <img src={rosemary} alt='Rosemary' className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center items-start p-3">
                <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Rosemary</h3>
                <p className="text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5">Boosts scalp health and promotes stronger hair.</p>
              </div>
            </div>
            <div className="flex flex-row-reverse laptop:flex-col justify-start items-center rounded-2xl overflow-hidden bg-(--secondary-light) border border-(--text-light-muted)">
              <div className="w-full aspect-3/2 xs:aspect-4/3">
                <img src={fenugreek} alt='Fenugreek' className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center items-start p-3">
                <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Fenugreek</h3>
                <p className="text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5">Nourishes hair and helps reduce breakage.</p>
              </div>
            </div>
            <div className="flex flex-row-reverse laptop:flex-col justify-start items-center rounded-2xl overflow-hidden bg-(--secondary-light) border border-(--text-light-muted)">
              <div className="w-full aspect-3/2 xs:aspect-4/3">
                <img src={aloevera} alt='Aloe Vera' className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center items-start p-3">
                <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Aloe Vera</h3>
                <p className="text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5">Soothes the scalp and restores natural moisture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='use' className="w-full py-8 px-4 bg-(--primary-light)">
        <div className="w-full max-w-250 mx-auto flex flex-col justify-center items-center gap-8 mt-4">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[2.2rem] xs:text-[2.5rem] text-center text-(--primary-dark) font-display leading-14 mb-2">
              How to Use?
            </h2>
          </div>
          <div className="grid xs:grid-cols-3 gap-4">
            <div className="flex flex-col justify-start items-center">
              <div className="relative w-28 h-28 tablet:w-34 tablet:h-34">
                <span className="absolute z-20 top-0 left-0 bg-(--tertiary-accent) text-(--primary-light) font-semibold rounded-full flex justify-center items-center w-6 h-6 xs:w-8 xs:h-8 p-2">1</span>
                <div className="relative z-10 rounded-full border-2 border-(--text-dark-muted) p-3 overflow-hidden">
                  <img src={wet} alt='Fenugreek' className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center p-3">
                <h3 className="text-center relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Wet Hair</h3>
                <p className="text-center text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5">Completely Wet your Hair with Lukewarm Water.</p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center">
              <div className="relative w-28 h-28 tablet:w-34 tablet:h-34">
                <span className="absolute z-20 top-0 left-0 bg-(--tertiary-accent) text-(--primary-light) font-semibold rounded-full flex justify-center items-center w-6 h-6 xs:w-8 xs:h-8 p-2">2</span>
                <div className="relative z-10 rounded-full border-2 border-(--text-dark-muted) p-3 overflow-hidden">
                  <img src={massage} alt='Massage' className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center p-3">
                <h3 className="text-center relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Lather & Massage</h3>
                <p className="text-center text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5">Apply Shampoo and Massage into scalp. and work with lather.</p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center">
              <div className="relative w-28 h-28 tablet:w-34 tablet:h-34">
                <span className="absolute z-20 top-0 left-0 bg-(--tertiary-accent) text-(--primary-light) font-semibold rounded-full flex justify-center items-center w-6 h-6 xs:w-8 xs:h-8 p-2">3</span>
                <div className="relative z-10 rounded-full border-2 border-(--text-dark-muted) p-3 overflow-hidden">
                  <img src={wash} alt='Fenugreek' className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center p-3">
                <h3 className="text-center relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Rinse Thoroughly</h3>
                <p className="text-center text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5">Rinse well with lukewarm water. Apply Conditioner if needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Shop
