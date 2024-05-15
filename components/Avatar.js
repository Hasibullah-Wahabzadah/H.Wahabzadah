//  next image
import Image from "next/image";

const Avatar = () => {
  return <div className="h-[100px] xl:flex xl:max-w-none">
    <Image src={'/ha.png'} width={737} height={678} alt="me" 
    className=" translate-z-0 w-[800px] h-[400px] sm:w-[500px] sm:h-[500px]"/>
  </div>;
};

export default Avatar;
