'use client'

import React, { useState } from 'react'
import Link from 'next/link'



export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="nav bg-zinc-50">
            <div className="container h-20">
                <h2 className="homebtn h-full w-20 flex items-center justify-center">
                    <Link href="/" className="h-full w-full flex items-center justify-center text-[clamp(1vw,1vw,2vw)] font-bold text-green-400 hover:text-green-200 transition-colors">
                    [ Squire ]
                    </Link>
                </h2>

                <div>
                    <button
                        className="burger"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((s) => !s)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <ul className={`menu ${open ? 'open' : ''}`}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <style jsx>{`
                .nav {
                    // background: #111827;
                    color: #fff;
                }
                .container {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0.5rem 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .brand {
                    font-weight: 700;
                    font-size: 1.125rem;
                    color: #fff;
                    text-decoration: none;
                }
                .burger {
                    display: none;
                    background: transparent;
                    border: none;
                    padding: 0.25rem;
                    gap: 4px;
                    flex-direction: column;
                }
                .burger span {
                    display: block;
                    width: 22px;
                    height: 2px;
                    background: #fff;
                    margin: 3px 0;
                }
                .menu {
                    list-style: none;
                    display: flex;
                    gap: 1rem;
                    margin: 0;
                    padding: 0;
                }
                .menu a {
                    color: #e5e7eb;
                    text-decoration: none;
                    padding: 0.5rem 0.75rem;
                    border-radius: 6px;
                }
                .menu a:hover {
                    background: rgba(255, 255, 255, 0.06);
                }

                /* Responsive */
                @media (max-width: 720px) {
                    .burger {
                        display: flex;
                    }
                    .menu {
                        position: absolute;
                        top: 56px;
                        right: 1rem;
                        background: #0b1220;
                        flex-direction: column;
                        gap: 0;
                        min-width: 160px;
                        border-radius: 8px;
                        overflow: hidden;
                        transform-origin: top right;
                        transform: scaleY(0);
                        transition: transform 150ms ease;
                        box-shadow: 0 6px 18px rgba(2, 6, 23, 0.6);
                    }
                    .menu.open {
                        transform: scaleY(1);
                    }
                    .menu li + li a {
                        border-top: 1px solid rgba(255, 255, 255, 0.03);
                    }
                    .menu a {
                        display: block;
                        padding: 0.75rem 1rem;
                    }
                }
            `}</style>
        </nav>
    )
}