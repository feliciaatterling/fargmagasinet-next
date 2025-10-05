import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type ProductCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export const ProductCard = ({
  imageUrl,
  title,
  description,
}: ProductCardProps) => {
  return (
    <Card className="w-[15vw] h-[400px] bg-white border border-gray-300 p-4 text-center shadow-sm rounded-none hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Image
          src={imageUrl}
          alt={title}
          width={288}
          height={200}
          className="object-cover w-full h-[300px]"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg font-light uppercase">{title}</CardTitle>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
      </CardContent>
    </Card>
  );
};
