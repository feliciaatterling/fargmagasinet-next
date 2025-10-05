import { InfoCard } from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import { Separator } from "@radix-ui/react-separator";

export default function Home() {
  return (
    <div className="text-center">
      <div
        className="relative w-auto h-[700px] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="relative z-10">
          <Navbar />
          <main className=" text-gray-800 flex-row text-center">
            <div className="p-1 w-1/2 mx-auto">
              <p className="text-2xl my-10 font-light">
                Här kan du hitta äggoljetempera från Av jord och söker du
                linoljefärg är vi återförsäljare för Wibo färg. Du kan även hyra
                olika Speedheater apparater för att ta bort färg på fasad,
                möbler, fönster, mm. Det mesta tas hem på beställning. Förutom
                att sälja färg jobbar vi med fönsterrenovering i vår
                Fönstervagn.
              </p>
            </div>
          </main>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white/60 py-4 z-20">
          <h2 className="text-3xl my-5 font-bold uppercase ">
            BUTIKENS ÖPPETTIDER
          </h2>
          <p className="text-gray-800 text-center text-2xl my-2">
            Onsdagar 14–18
            <br />
            eller boka ett besök
            <br />
            Poppelgatan 2, Alingsås
          </p>
        </div>
      </div>

      <div className=" w-full py-5">
        <h2 className="text-3xl my-5 font-bold uppercase">Vad vi erbjuder</h2>
        <Separator
          orientation="vertical"
          className="w-10/12 mx-auto bg-gray-500 h-px"
        />
        <div className="flex justify-center flex-wrap gap-6 py-8">
          <InfoCard imageUrl="/äggoljetempera.jpg" title="Äggoljetempera" />
          <InfoCard imageUrl="/linoljefärg.jpg" title="Linoljefärg" />
          <InfoCard imageUrl="/speedheater.jpg" title="Speedheater" />
          <InfoCard imageUrl="/fönstervagnen.jpg" title="Fönstervagnen" />
        </div>
      </div>
      <div id="kontakt" className="py-1">
        <h2 className="text-3xl my-5 font-bold uppercase">Kontakta oss</h2>
        <Separator
          orientation="vertical"
          className="w-10/12 mx-auto bg-gray-500 h-px"
        />

        <div className="my-3 flex justify-evenly mr-auto">
          <p className="text-2xl my-1 font-light">
            Daniel Kindblad
            <br />
            0703-640220
          </p>
          <p className="text-2xl my-1 font-light">fargmagasinet@brafarg.se</p>
          <p className="text-2xl my-1 font-light">
            Marita Kindblad
            <br />
            0739-631938
          </p>
        </div>
      </div>
    </div>
  );
}
