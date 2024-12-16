'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-50 p-4 border-b-2 border-black">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-600 font-comic">
                    Ritee
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <NavLinks />
                    <button className="px-4 py-2 bg-green-400 border-2 border-black shadow-brutal hover:translate-y-[-2px] transition-transform rounded-lg">
                        Let's Work Together!
                    </button>
                </nav>
                <button 
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden mt-4">
                    <nav className="flex flex-col items-center gap-4">
                        <NavLinks />
                        <button className="px-4 py-2 bg-green-400 border-2 border-black shadow-brutal hover:translate-y-[-2px] transition-transform rounded-lg w-full">
                            Let's Work Together!
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}

function NavLinks() {
    return (
        <>
            <Link href="#home" className="hover:underline">home</Link>
            <Link href="#skills" className="hover:underline">skills</Link>
            <Link href="#experience" className="hover:underline">experience</Link>
            <Link href="#projects" className="hover:underline">projects</Link>
            <Link href="#contact" className="hover:underline">contact</Link>
        </>
    );
}

