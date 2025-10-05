"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";

export default function Navbar() {
  return (
    <div>
      <header className="w-full py-10 px-8 bg-white/50">
        <nav className="flex justify-evenly w-full text-xl">
          <Link href="/om">
            <Button
              variant="ghost"
              className="text-3xl uppercase font-light hover:bg-transparent hover:scale-105"
            >
              Om Oss
            </Button>
          </Link>
          <Link href="/butiken">
            <Button
              variant="ghost"
              className="text-3xl uppercase font-light hover:bg-transparent hover:scale-105"
            >
              Butiken
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="ghost"
              className="text-5xl font-bold uppercase hover:bg-transparent hover:scale-105"
            >
              Färgmagasinet
            </Button>
          </Link>
          <Link href="/tips">
            <Button
              variant="ghost"
              className="text-3xl uppercase font-light hover:bg-transparent hover:scale-105"
            >
              Tips & Trix
            </Button>
          </Link>
          <Link href="#kontakt">
            <Button
              variant="ghost"
              className="text-3xl uppercase font-light hover:bg-transparent hover:scale-105"
            >
              Kontakt
            </Button>
          </Link>
        </nav>
      </header>
      <Separator
        orientation="vertical"
        className="w-full mx-auto bg-gray-500 h-px"
      />
    </div>
  );
}
