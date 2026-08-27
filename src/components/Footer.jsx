import React from 'react'

function Footer() {
    return (
        <footer className="bg-(--secondary-light) mt-8">
            <div className="mx-auto flex flex-col tablet:flex-row w-full max-w-7xl items-center justify-center tablet:justify-between px-5 py-6 gap-3">

                {/* Copyright */}
                <div>
                    <p className="text-sm text-(--secondary-dark)">
                        © 2026 Velora Naturals. All rights reserved.
                    </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-5">
                    <a
                        href="#"
                        className="text-sm text-(--secondary-dark) transition-opacity hover:opacity-70"
                    >
                        Privacy Policy
                    </a>
                    <div className="bg-(--text-dark-muted) w-[1.3px] h-4 rounded-sm"></div>
                    <a
                        href="#"
                        className="text-sm text-(--secondary-dark) transition-opacity hover:opacity-70"
                    >
                        Terms of Service
                    </a>
                    <div className="bg-(--text-dark-muted) w-[1.3px] h-4 rounded-sm"></div>
                    <a
                        href="#"
                        className="text-sm text-(--secondary-dark) transition-opacity hover:opacity-70"
                    >
                        Contact Us
                    </a>

                </div>

            </div>
        </footer>
    )
}

export default Footer
