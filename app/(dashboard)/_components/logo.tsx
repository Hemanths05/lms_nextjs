import Image from "next/image";

export const Logo = () => {
    return ( 
        <Image 
        height={130}
        width={60}
        alt="logo"
        src="/logo.svg"
        />
     );
}
 
