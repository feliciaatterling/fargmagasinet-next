"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Tips() {
  const sections = [
    { id: "golv", title: "Golv" },
    { id: "äggoljeglasyr", title: "Äggoljeglasyr" },
    { id: "färg", title: "Färg" },
    { id: "tjärolja", title: "Tjärolja" },
  ];

  const [active, setActive] = useState<string>("golv");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
        if (visible) setActive(visible.target.id);
      },
      {
        rootMargin: "-50% 0px -50% 0px", // triggers when section middle is in view
        threshold: 0,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div>
      <Navbar />

      <div className="w-full px-50">
        <div className="sticky top-0 z-10 border-b bg-white">
          <nav className="flex justify-evenly space-x-6 px-4 py-2 text-sm font-medium">
            {sections.map((s) => (
              <Link key={s.id} href={`#${s.id}`} scroll={true}>
                <Button
                  variant="ghost"
                  className={`font ${
                    active === s.id ? "font-bold" : "font-light"
                  }`}
                >
                  {s.title}
                </Button>
              </Link>
            ))}
          </nav>
        </div>

        <main className="mx-auto max-w-3xl space-y-16 px-4 py-8">
          <section id="golv">
            <h2 className="text-xl font-bold">Golv</h2>
            <div className="py-2">
              <h3 className="text-m font-bold">
                Skura golv med Olivoljetvål (Marseille)
              </h3>
              <p>
                Ta skurblandning 50g olivoljetvål till 1 liter vatten. Mixa
                ihop. (Använd rivjärn eller skär tvålen i bitar. Vattnet kan
                vara varmt när du blandar ihop olivoljetvålen och vattnet).
                Alternativt, släng i tvålen i en hink med vatten o låt den ligga
                någon/några minuter. Vipps du har ett dundervatten för golv,
                köksluckor mm. Blöt upp några brädor med vatten i taget. Skura
                rent golvet, borsta o gno. Gärna skurborste med stång. Ej varmt
                vatten. Torka upp skurvatten. Blöttorka med rent vatten.
              </p>
            </div>
            <div className="py-2">
              <h3 className="text-m font-bold">Impregnera golvet</h3>
              <p>
                Ta 80 g tvål, skär i små bitar, häll 1/2 liter kokt vatten över,
                vänta en stund så det löser sig en del, mixa. Häll på
                ytterligare 1/2 liter kallt vatten, mixa. Golvet ngt fuktigt.
                Pensla på såpvattnet, gärna lite ljummet då porerna i golvet
                öppnar sig lite mer och tar in såpan. Ek är ju lite hårdare än
                gran och fur (tall) så det kan vara bra att ha vattnet lite
                varmare. Låt torka in. (Om tvålblandningen står och kallnar så
                stelnar den. Mixa igen.) Polera gärna efter några/någon dag då
                golvet kan bli lite strävt i början. Gno med skurborste eller
                liknande. Det går även att ha pigment i denna blandning,
                alternativt pigmentvatten först, sedan såpblandningen. T. ex. 24
                maj 30 för att få bort gulheten i nyslipat golv. Snabbar på att
                det ser lite äldre ut fortare. 27 juli 20 ger ett djup till
                träts egen färg. Har du pigmentvatten stående kan du prova med
                t.ex. lasyrgrad L 10, 75g pigmentvatten till 1 liter
                såpblandning, se ovan. (80g Marseilletvål till 1 liter vatten)
                Tänk på att dubbelt lager ökar lasyrgraden mycket. L 5 40g
                pigmentvatten L 10 75g pigmentvatten L 20 150g pigmentvatten L
                30 225g pigmentvatten L 40 300g pigmentvatten L 50 375g
                pigmentvatten Kontakta butik om du vill ha resept på hur du gör
                äggoljetemperalasyr. Äh, här har du hur du gör.
              </p>
            </div>
          </section>

          <section id="äggoljeglasyr">
            <h2 className="text-xl font-bold">Äggoljeglasyr</h2>
            <div className="py-2">
              <h3 className="text-m font-bold">
                Gör en äggoljeemulsion till Äggoljelasyr.
              </h3>
              <p>
                250g ägg 250g kallpressad rå raffinerad linolja. Mixa ihop under
                2 min. Tillsätt 500g vatten mixa ihop. Nu har du en
                äggoljeemulsion på 1000g ca 1 liter. Tillsätt pigmentvatten i
                den grad du vill. (En lasyr tar längre tid på sig att oxidera är
                vad en vanlig äggoljetempera färg gör.)
              </p>
            </div>
          </section>

          <section id="färg">
            <h2 className="text-xl font-bold">Färg</h2>
            <div className="py-2">
              <h3 className="text-m font-bold">
                Gör målad yta tåligare för smuts och vatten
              </h3>
              <p>
                1 Låt färgen oxidera ca 6 månader. 2 Pensla på såpblandning. (se
                Impregnera golv. 80g tvål till 1 liter vatten) Låt torka, 0-1
                timma. 3 Polera med borste eller trasa.
              </p>
            </div>
            <div className="py-2">
              <h3 className="text-m font-bold">Lerklining och grundfärg</h3>
              <p>
                Gärna grundfärg på så snart som det är färdigputsat. Blanda som
                vanligt. Lägger du på den tidigt efter slutputsning gör det att
                lerputsen spricker mindre. Om det redan är torkat använd en påse
                till dubbel satts emulsion. Alltså blanda en påse som det står.
                Sedan tillsätter du 500g vatten och 380 äggolja. När detta är
                pålagt låter du grundfärgen oxidera gärna några dagar. Sedan ett
                lager vanlig grund. Linolja tar man vid hörn och fönsterbrädor
                som ska tåla lite mer påstötning. Att köra linolja på allt gör
                att väggen blir mindre diffusionsöppen.
              </p>
            </div>
          </section>

          <section id="tjärolja">
            <h2 className="text-xl font-bold">Tjärolja</h2>
            <div className="py-2">
              <h3 className="text-m font-bold">Tjärolja</h3>

              <p>
                Mkt dryg om man blandar den med ägg och vatten. Typ en näve ägg,
                en näve tjärolja mixa med stavmixer\visp. Två nävar vatten. Mixa
                ihop äggtjäroljan med vattnet och du får en dryg emulsion till
                din altan. Gärna trät/altanen lätt fuktig/nyskurad när du lägger
                på emulsionen. Med 3 ägg räcker denna blandning till ca 20 m2!
                Och du har bara gjort åt 1/5 av t.ex en enliters dunk! Går att
                pigmentera med t.ex gulbrun el mörkbrun umbra..
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
