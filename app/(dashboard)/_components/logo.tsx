import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex w-full items-center justify-center">
            <Image
            height={80}
            width={80}
            alt="logo"
            src= "/logo-web.svg"
            />
            <div className="text-3xl font-bold text-red-800 w-full ">
                HUST Learn 
            </div>
        </div>
    )
}