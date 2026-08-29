import React from 'react'
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
import { staggerContainer, fadeUp, fadeRight } from "../animations/variants";

function Home() {
    return (
        <>
            <main>
                <section className="min-h-screen w-full relative flex items-center bg-position-[80%_70%] tablet:bg-position-[50%_70%]" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="max-w-350 w-full mx-auto flex justify-start items-center">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="max-w-87.5 tablet:max-w-xl w-full hidden xs:flex flex-col justify-center items-start gap-4 tablet:gap-8 ml-10 tablet:ml-20"
                        >
                            <motion.h2 variants={fadeRight} className="text-[2.5rem] tablet:text-[3rem] laptop:text-[3.8rem] font-display text-(--secondary-dark) leading-16">
                                Give Your Hair<br /> The <span className="text-(--tertiary-accent) italic" style={{ textShadow: "0 0 5px #C6A15B, 0 0 15px #C6A15B, 0 0 25px #C6A15B" }}>Love</span> It Deserves
                            </motion.h2>
                            <motion.p variants={fadeRight} className="max-w-[80%] text-[1.05rem] text-(--primary-dark) text-left leading-6">
                                Pure herbal ingredients to cleanse, nourish and strengthen naturally.
                            </motion.p>
                            <motion.div variants={fadeRight} className="flex justify-start items-center tablet:gap-4">
                                <a href='/#shop' className="bg-(--secondary-dark) text-white text-[12px] px-5 tablet:px-8 py-3 tablet:text-[14px] rounded-lg tracking-[0.15em] font-body hover:opacity-95 transition-opacity duration-300 cursor-pointer">
                                    Shop Now
                                </a>
                                <a href='#ingredients' className="flex justify-center items-center gap-1.5 text-(--primary-dark) text-[14px] px-5 tablet:px-8 py-3 tablet:text-[16px] rounded-sm font-body hover:text-(--tertiary-accent) transition-[color] duration-300 cursor-pointer">
                                    Explore Ingredients <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </a>
                            </motion.div>
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
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="hidden tablet:flex w-md rounded-2xl overflow-hidden"
                        >
                            <img src={storyimg} alt='Our-Story' className="object-contain" />
                        </motion.div>
                        <div className="flex flex-col justify-center items-start gap-4">
                            <div className="flex flex-col justify-center items-start">
                                <span className="text-[14px] xs:text-[16px] text-(--tertiary-accent)">OUR STORY</span>
                                <div className="flex justify-center items-center text-(--primary-light)"><p className="w-28 h-px bg-(--secondary-accent)"></p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#606a49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="rotate-12 mb-2 mr-2 lucide lucide-leaf-icon lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg></div>
                            </div>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                                className="max-w-md w-full flex flex-col justify-center items-start gap-3"
                            >
                                <motion.h2
                                    variants={fadeRight}
                                    className="text-[2.4rem] xs:text-[2.8rem] text-(--primary-dark) font-display leading-14 mb-2"
                                >
                                    Rooted in Nature,<br /> Made for your Ritual.
                                </motion.h2>
                                <motion.p variants={fadeRight} className="text-[15px] font-body text-(secondary-dark) text-left">
                                    Velora Naturals believes that hair care should feel simple, thoughtful and inspired by nature. Our shampoo brings together carefully selected ingredients like Amla, Rosemary, Fenugreek and Aloe Vera to create a refreshing and nourishing hair-care experience.
                                </motion.p>
                                <div className="flex justify-center items-center text-(--primary-light)"><p className="w-18 h-px bg-(--secondary-accent)"></p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#606a49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="rotate-12 mb-2 mr-2 lucide lucide-leaf-icon lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg></div>
                                <motion.p variants={fadeRight} className="text-[15px] font-body text-(secondary-dark) text-left">
                                    Created with a focus on gentle care, Velora Naturals is sulfate and paraben free—making every wash feel like a simple moment of care for your hair.
                                </motion.p>
                                <motion.a variants={fadeRight} href='#ingredients' className="bg-(--tertiary-accent) text-white text-[12px] px-5 mt-4 tablet:px-8 py-3 xs:text-[14px] rounded-lg font-body flex justify-center items-center gap-3 hover:opacity-95 transition-opacity duration-300 cursor-pointer">
                                    Discover our ingredients <MoveRight size={16} />
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <section id='why-velora' className="w-full py-8 px-4">
                    <div className="max-w-250 w-full mx-auto flex flex-col justify-center items-center gap-6 tablet:gap-12 relative">
                        <h2 className="relative text-[1.6rem] tablet:text-[2rem] text-(--secondary-dark) font-display pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-14 after:h-[2.2px] after:translate-x-30 after:rounded-sm after:bg-(--tertiary-accent)">Why Choose <span className="text-(--tertiary-accent)">VELORA</span>?</h2>
                        <div className="w-full flex flex-col xs:flex-row justify-between items-center gap-8 xs:gap-0">
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="hidden xs:flex flex-col justify-center items-center gap-8 tablet:gap-26"
                            >
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
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="max-w-72 tablet:max-w-120 mx-auto w-full rounded-full overflow-hidden">
                                <img src={whyus} className="object-contain" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="hidden xs:flex flex-col justify-center items-center gap-8 tablet:gap-26"
                            >
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
                            </motion.div>
                            <div className="grid grid-cols-2 gap-x-2 gap-y-4 xs:hidden">
                                <motion.div
                                    initial={{ opacity: 0, x: -60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="max-w-72 w-full flex justify-center items-start gap-2.5"
                                >
                                    <span className="w-6 h-6 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">1</span>
                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Botanical Powered</h3>
                                        <p className="text-[14px] font-body text-(--secondary-dark) leading-4">A thoughtful blend of Amla, Rosemary, Fenugreek & Aloe Vera.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="max-w-72 w-full flex justify-center items-start gap-2.5"
                                >
                                    <span className="w-6 h-6 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">3</span>
                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Clean Formula</h3>
                                        <p className="text-[14px] font-body text-(--secondary-dark) leading-4">Sulfate & Paraben Free for a gentler hair-care routine.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="max-w-72 w-full flex justify-center items-start gap-2.5"
                                >
                                    <span className="w-6 h-6 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">2</span>
                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Nourishing Care</h3>
                                        <p className="text-[14px] font-body text-(--secondary-dark) leading-4">Helps nourish your hair and leaves it feeling soft and refreshed.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="max-w-76 w-full flex justify-center items-start gap-2.5"
                                >
                                    <span className="w-6 h-6 p-1 text-[12px] tablet:text-[16px] tablet:w-7 tablet:h-7 tablet:p-1.5 flex justify-center items-center shrink-0 text-(--primary-light) font-semibold bg-(--tertiary-accent) rounded-full">4</span>
                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.5rem] text-(--secondary-dark) font-body pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2.2px] after:translate-x-8 tablet:after:translate-x-20 after:rounded-sm after:bg-(--tertiary-accent)">Made for Healthy Hair</h3>
                                        <p className="text-[14px] font-body text-(--secondary-dark) leading-4">A natural-inspired formula for softer, smoother, more radiant-looking hair.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='ingredients' className="w-full py-8 px-4">
                    <div className="w-full max-w-250 mx-auto flex flex-col justify-center items-center gap-8 mt-4">
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-[14px] xs:text-[16px] text-(--tertiary-accent)">KEY INGREDIENTS</span>
                            <h2 className="text-[2.2rem] xs:text-[2.5rem] text-center text-(--primary-dark) font-display leading-14 mb-2">
                                Natures Best. Your Hair's Rest.
                            </h2>
                        </div>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid xs:grid-cols-2 laptop:grid-cols-4 gap-6"
                        >
                            <motion.div
                                variants={fadeUp}
                                className="flex flex-row-reverse laptop:flex-col justify-start items-center rounded-2xl overflow-hidden bg-(--secondary-light) border border-(--text-light-muted)"
                            >
                                <div className="w-full aspect-3/2 xs:aspect-4/3">
                                    <img src={amla} alt='Amla' className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col justify-center items-start p-3">
                                    <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Amla</h3>
                                    <p className="text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5">Strengthens roots and supports healthy growth.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                className="flex flex-row-reverse laptop:flex-col justify-start items-center rounded-2xl overflow-hidden bg-(--secondary-light) border border-(--text-light-muted)"
                            >
                                <div className="w-full aspect-3/2 xs:aspect-4/3">
                                    <img src={rosemary} alt='Rosemary' className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col justify-center items-start p-3">
                                    <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Rosemary</h3>
                                    <p className="text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5">Boosts scalp health and promotes stronger hair.</p>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeUp} className="flex flex-row-reverse laptop:flex-col justify-start items-center rounded-2xl overflow-hidden bg-(--secondary-light) border border-(--text-light-muted)">
                                <div className="w-full aspect-3/2 xs:aspect-4/3">
                                    <img src={fenugreek} alt='Fenugreek' className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col justify-center items-start p-3">
                                    <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Fenugreek</h3>
                                    <p className="text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5">Nourishes hair and helps reduce breakage.</p>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeUp} className="flex flex-row-reverse laptop:flex-col justify-start items-center rounded-2xl overflow-hidden bg-(--secondary-light) border border-(--text-light-muted)">
                                <div className="w-full aspect-3/2 xs:aspect-4/3">
                                    <img src={aloevera} alt='Aloe Vera' className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col justify-center items-start p-3">
                                    <h3 className="relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Aloe Vera</h3>
                                    <p className="text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5">Soothes the scalp and restores natural moisture.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
                <section id='use' className="w-full py-8 px-4">
                    <div className="w-full max-w-240 mx-auto flex flex-col justify-center items-center gap-8 mt-4">
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-[2.2rem] xs:text-[2.5rem] text-center text-(--primary-dark) font-display leading-14 mb-2">
                                How to Use?
                            </h2>
                        </div>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid xs:grid-cols-3 gap-8 tablet:gap-2"
                        >
                            <motion.div variants={fadeUp} className="flex flex-col justify-start items-center">
                                <div className="relative w-28 h-28 tablet:w-34 tablet:h-34">
                                    <span className="absolute z-20 top-0 left-0 bg-(--tertiary-accent) text-(--primary-light) font-semibold rounded-full flex justify-center items-center w-6 h-6 xs:w-8 xs:h-8 p-2">1</span>
                                    <div className="relative z-10 rounded-full border-2 border-(--text-dark-muted) p-3 overflow-hidden">
                                        <img src={wet} alt='Fenugreek' className="w-full h-full object-contain" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center p-3">
                                    <h3 className="text-center relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Wet Hair</h3>
                                    <p className="text-center text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5 max-w-[85%] w-full mx-auto">Completely Wet your Hair with Lukewarm Water.</p>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeUp} className="flex flex-col justify-start items-center">
                                <div className="relative w-28 h-28 tablet:w-34 tablet:h-34">
                                    <span className="absolute z-20 top-0 left-0 bg-(--tertiary-accent) text-(--primary-light) font-semibold rounded-full flex justify-center items-center w-6 h-6 xs:w-8 xs:h-8 p-2">2</span>
                                    <div className="relative z-10 rounded-full border-2 border-(--text-dark-muted) p-3 overflow-hidden">
                                        <img src={massage} alt='Massage' className="w-full h-full object-contain" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center p-3">
                                    <h3 className="text-center relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Lather & Massage</h3>
                                    <p className="text-center text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5 max-w-[85%] w-full mx-auto">Apply Shampoo and Massage into scalp. and work with lather.</p>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeUp} className="flex flex-col justify-start items-center">
                                <div className="relative w-28 h-28 tablet:w-34 tablet:h-34">
                                    <span className="absolute z-20 top-0 left-0 bg-(--tertiary-accent) text-(--primary-light) font-semibold rounded-full flex justify-center items-center w-6 h-6 xs:w-8 xs:h-8 p-2">3</span>
                                    <div className="relative z-10 rounded-full border-2 border-(--text-dark-muted) p-3 overflow-hidden">
                                        <img src={wash} alt='Fenugreek' className="w-full h-full object-contain" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center p-3">
                                    <h3 className="text-center relative text-[1rem] xs:text-[1.2rem] tablet:text-[1.4rem] text-(--primary-dark) font-body pb-2">Rinse Thoroughly</h3>
                                    <p className="text-center text-[14px] font-body text-(--secondary-dark) leading-4 tablet:leading-5 -mt-1.5 max-w-[85%] w-full mx-auto">Rinse well with lukewarm water. Apply Conditioner if needed.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
                <section id='shop' className="w-full py-8 px-4">
                    <div className="w-full max-w-250 mx-auto flex flex-col justify-center items-center gap-12 mt-4">
                        <div className="flex flex-col justify-center items-center gap-1.5">
                            <h2 className="text-[2.2rem] xs:text-[2.5rem] text-center text-(--primary-dark) font-display leading-11 xs:leading-14 mb-2">
                                How Would You Like To Order?
                            </h2>
                            <p className="text-[14px] xs:text-[16px] text-(--tertiary-accent) text-center">
                                Choose your preferred way to place your order.
                            </p>
                        </div>
                        <div className="flex flex-col tablet:flex-row justify-center items-center gap-10">
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative max-w-100 w-full flex flex-col justify-center items-center bg-(--tertiary-light) p-6 rounded-2xl"
                            >
                                <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-(--secondary-accent) rounded-full flex justify-center items-center"><svg fill="#ffffff" width='26' height='26' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.667 30.667" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path> </g> </g></svg></span>
                                <div className="flex flex-col justify-center items-center gap-1.5 mt-6">
                                    <h3 className="text-center relative text-[1.1rem] uppercase xs:text-[1.2rem] tablet:text-[1.3rem] text-(--primary-dark) font-serif pb-2">Order via whatsapp</h3>
                                    <p className="text-center text-[14px] font-body text-(--secondary-dark) leading-5 -mt-1.5 max-w-[80%] w-full mx-auto">Chat with us directly on whatsapp for quick queries and order.</p>
                                </div>
                                <button className="bg-(--tertiary-accent) text-white text-[14px] px-5 mt-4 tablet:px-10 py-3 rounded-lg font-body flex justify-center items-center gap-3 hover:opacity-95 transition-opacity duration-300 cursor-pointer">Order on Whatsapp</button>
                            </motion.div>
                            <div className="relative w-28 h-px tablet:w-px tablet:h-28 bg-(--text-light-muted) z-20"><span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 text-[14px] bg-(--primary-light) border border-(--text-light-muted) rounded-full flex justify-center items-center">OR</span></div>
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative mt-4 tablet:mt-0 max-w-100 w-full flex flex-col justify-center items-center bg-(--secondary-light-100) p-6 rounded-2xl"
                            >
                                <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-(--sandy-accent-100) rounded-full flex justify-center items-center"><svg viewBox="0 -4 32 32" width='26' height='26' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="#fff" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -259.000000)" fill="#fff"> <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg></span>
                                <div className="flex flex-col justify-center items-center gap-1.5 mt-6">
                                    <h3 className="text-center relative text-[1.1rem] uppercase xs:text-[1.2rem] tablet:text-[1.3rem] text-(--primary-dark) font-serif pb-2">Order via Email</h3>
                                    <p className="text-center text-[14px] font-body text-(--secondary-dark) leading-5 -mt-1.5 max-w-[80%] w-full mx-auto">Send us an email and we'll get back to you with all th details.</p>
                                </div>
                                <button className="bg-(--sandy-accent) text-white text-[14px] px-5 mt-4 tablet:px-10 py-3 rounded-lg font-body flex justify-center items-center gap-3 hover:opacity-95 transition-opacity duration-300 cursor-pointer">Email us to Order</button>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}

export default Home
