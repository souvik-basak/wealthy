import Image from "next/image";

export default function FeatureCard({ text, para, image }) {
  return (
    <div className="bg-slate-100 h-80 border border-black/10 p-4 rounded-3xl flex flex-col items-center justify-center">
      <div className="h-32 aspect-video relative overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={text}
          layout="fill"
          objectFit="contain"
          className="w-full h-full object-cover rounded-lg lg:flex lg:items-center"
        />
      </div>
      <div>
        <h3 className="text-2xl font-medium mt-2">{text}</h3>
        <p className="text-black/50 mt-2 text-md">{para}</p>
      </div>
    </div>
  );
}
