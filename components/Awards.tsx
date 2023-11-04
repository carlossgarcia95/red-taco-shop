import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const Awards = () => {
  return (
      <div className="container flex flex-col-reverse justify-between md:flex-row items-center max-w-5xl md:gap-10 py-6">
        <div className="flex flex-col items-center">
          <p className="flex font-bold items-center text-2xl md:text-4xl md:self-start">
            4.8{" "}
            <AiFillStar size={55} className="text-yellow-400 md:mx-2" />
            Rating
          </p>
          <p className="font-bold text-center md:text-start text-xl md:text-3xl max-w-md">
            2022 Best Restaurant Award Winner
          </p>
        </div>
        <div className="relative aspect-video h-[125px] md:h-[200px]">
          <Image
            src="/doordash-new.png"
            fill
            alt="doordash logo"
            className="object-contain"
          />
        </div>
      </div>
  );
};

export default Awards;
