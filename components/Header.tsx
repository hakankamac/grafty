"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/site";
import { MenuOverlay } from "./MenuOverlay";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" aria-label="Ana sayfa" className="header-logo inline-flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={180}
          height={52}
          className="h-10 md:h-12 w-auto object-contain"
          priority
        />
      </Link>

      <nav
        aria-label="Primary"
        className="header-nav justify-self-center rounded-full py-2.5 px-2 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] max-[770px]:hidden"
      >
        <ul className="flex items-center gap-1 list-none m-0 p-0">
          {NAV.map((item, i) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href} className="flex items-center">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="w-px h-4 bg-white/20 mx-0.5 max-[480px]:hidden"
                  />
                )}
                <Link
                  href={item.href}
                  className={`inline-block px-[18px] py-2 text-[14px] font-medium tracking-[0.01em] rounded-full transition-colors duration-200 ease-smooth ${
                    isActive
                      ? "bg-white text-ink shadow-[0_2px_10px_rgba(0,0,0,0.18)]"
                      : "text-white/85 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="header-actions justify-self-end flex items-center gap-2.5">
        <button
          type="button"
          className="bg-white/10 text-white rounded-full px-[22px] py-3 text-[14px] font-semibold tracking-[0.01em] inline-flex items-center gap-2 backdrop-blur-xl border border-white/25 shadow-[0_8px_24px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] transition-[transform,background,border-color,box-shadow] duration-300 ease-smooth hover:-translate-y-px hover:bg-white/15 hover:border-white/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.28)] max-md:px-4 max-md:py-2.5 max-md:text-[13px]"
        >
          İLETİŞİM
          <span
            aria-hidden="true"
            className="w-1.5 h-1.5 rounded-full bg-[#22d36a] shadow-[0_0_0_3px_rgba(34,211,106,0.25)]"
          />
        </button>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Menüyü aç"
          aria-expanded={menuOpen}
          className="w-11 h-11 rounded-full bg-white/10 text-white grid place-items-center backdrop-blur-xl border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.18)] transition-[transform,background,border-color] duration-300 ease-smooth hover:rotate-90 hover:bg-white/15 hover:border-white/35"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-[18px] h-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path d="M4 9h16M4 15h16" />
          </svg>
        </button>
      </div>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
