import React, { useState } from 'react'
import { Menu, X, Sprout, FlaskConical, Rabbit, Sparkles } from 'lucide-react'
import { NavLink } from "react-router-dom";
import favicon from '../assets/favicon.png'

const features = [
    {
        icon: <Sprout size={14} />,
        text: "Herbal Goodness",
    },
    {
        icon: <FlaskConical size={14} />,
        text: "Sulphate & Paraben Free",
    },
    {
        icon: <Rabbit size={14} />,
        text: "Cruelty Free",
    },
    {
        icon: <Sparkles size={14} />,
        text: "Made for Healthy Hair",
    },
];

function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className="bg-(--secondary-light) overflow-hidden h-10 p-3 w-full flex">
                <div className="flex gap-10 w-max animate-marquee whitespace-nowrap">
                    {
                        [...features, ...features, ...features].map((feature, index) => (
                            <div className="shrink-0 flex justify-center items-center gap-1 text-(--text-dark-muted)" key={index}>
                                <span className="flex justify-center items-center">
                                    {feature.icon}
                                </span>
                                <span className="flex justify-center items-center text-[0.85rem] font-body">
                                    {feature.text}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <header className="max-w-350 mx-auto h-20 bg-(--primary-light) flex justify-between items-center w-full py-3 px-6 tablet:px-8">
                <button 
                    onClick={()=>setSidebarOpen(!isSidebarOpen)}
                    className="flex tablet:hidden text-(--secondary-dark) hover:text-(--tertiary-accent) transition-all cursor-pointer"
                >
                    {isSidebarOpen? (<X />): (<Menu/>)}
                </button>
                <NavLink to='/' className="flex flex-col justify-center items-center leading-5 xs:leading-6 mt-2 font-body">
                    <img src={favicon} alt='velora' className="w-6 h-6 object-contain"/>
                    <h1 className="text-(--secondary-dark) text-[1.3rem] xs:text-[1.8rem] tracking-[0.25em] font-serif font-extralight">VELORA</h1>
                    <p className="text-(--tertiary-accent) text-[0.65rem] xs:text-[0.75rem] tracking-[0.2em]">NATURALS</p>
                </NavLink>
                <nav className="hidden tablet:flex items-center gap-10 font-body text-[0.95rem] text-(--secondary-dark)">
                    <a href="#about-us" className="hover:text-(--tertiary-accent) transition-all cursor-pointer">About us</a>
                    <a href="#why-velora" className="hover:text-(--tertiary-accent) transition-all cursor-pointer">Why Velora</a>
                    <a href="#ingredients" className="hover:text-(--tertiary-accent) transition-all cursor-pointer">Ingredients</a>
                    <a href="#shop" className="hover:text-(--tertiary-accent) transition-all cursor-pointer">Shop</a>
                </nav>
                <div className="flex justify-center items-center gap-4 tablet:gap-6 text-(--secondary-dark)">
                    <button className="hidden tablet:flex hover:text-(--tertiary-accent) transition-all cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                    </button>
                    <button className="hover:text-(--tertiary-accent) transition-all cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                    </button>
                </div>
            </header>
            <aside className={`block tablet:hidden min-h-screen w-64 fixed z-20 top-30 ${isSidebarOpen?"left-0": "-left-68"} bg-(--secondary-light) p-4 transition-all duration-150 ease-in-out`}>
                <div>

                </div>
                <nav className="w-full flex flex-col items-start gap-6 font-body text-[1rem] text-(--secondary-dark)">
                    <a onClick={()=> setSidebarOpen(false)} href="#about-us" className="hover:text-(--tertiary-accent) transition-all cursor-pointer">About us</a>
                    <a onClick={()=> setSidebarOpen(false)} href="#why-velora" className="hover:text-(--tertiary-accent) transition-all cursor-pointer">Why Velora</a>
                    <a onClick={()=> setSidebarOpen(false)} href="#ingredients" className="hover:text-(--tertiary-accent) transition-all cursor-pointer">Ingredients</a>
                    <a onClick={()=> setSidebarOpen(false)} href="#shop" className="hover:text-(--tertiary-accent) transition-all cursor-pointer">Shop</a>
                </nav>
            </aside>
        </>
    )
}

export default Header
