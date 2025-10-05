"use client";

import Navbar from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { useEffect, useState } from "react";

const link =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQahW7iwp4_-6QDunPE1z-NjnRRxr2xXj8HvuD3qZAGmVHe8F7JCRowQTOKQn8Q8L00qOj8qMxKYZa-/pub?output=csv";

export default function Butiken() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(link);
      const text = await res.text();

      // Parse CSV → array of rows
      const rows = text.split("\n").map((row) => row.split(","));
      const [header, ...data] = rows;

      const products = data.map((row) =>
        Object.fromEntries(
          header.map((h, i) => [h.trim(), row[i]?.trim() || null])
        )
      );

      console.log(products);

      setProducts(products);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="p-1 w-1/2 mx-auto text-center my-10">
        <p>
          Vill du beställ något? <br />
          Maila din beställning till: fargmagasinet@brafarg.se <br />
          Swish 123-0078600 eller Bankgiro 717-2521
        </p>

        <div className="flex justify-center flex-wrap gap-6 py-8">
          {products.map(
            (p, idx) =>
              p.name && (
                <ProductCard
                  key={idx}
                  imageUrl={p.image_url}
                  title={p.name}
                  description={p.description}
                />
              )
          )}

          {/* <ProductCard
            imageUrl="/äggoljetempera.jpg"
            title="Äggoljetempera"
            description="Färg i påse 430:-"
          />
          <ProductCard
            imageUrl="/speedheater.jpg"
            title="Speedheater"
            description="Cobra: 2995:-"
          />
          <ProductCard
            imageUrl="/linoljefärg.jpg"
            title="Linoljefärg"
            description="1 liter: 160:-"
          /> */}
        </div>
      </div>
    </div>
  );
}
