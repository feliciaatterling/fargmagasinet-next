import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type InfoCardProps = {
  imageUrl: string;
  title: string;
};

export const InfoCard = ({ imageUrl, title }: InfoCardProps) => {
  return (
    <Card className="flex-1 max-w-[250px] h-[400px] bg-white border border-gray-300 p-4 text-center shadow-sm rounded-none hover:shadow-xl transition-shadow duration-300">
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
        <CardTitle className="text-lg font-light mb-2 uppercase">
          {title}
        </CardTitle>
      </CardContent>
    </Card>
  );
};
