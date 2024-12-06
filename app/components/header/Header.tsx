"use client";

import Container from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const path = usePathname();

    return (
        <header className="relative">
            <Container>
                <div className="flex items-center justify-between  py-[35px]">
                    <div className="">
                        <Image
                            src={"/img/logo.svg"}
                            alt="logo"
                            width={41}
                            height={41}
                        />
                    </div>
                    <span className="w-[553px]  h-[1px] bg-[#979797] absolute left-[319px] z-20"></span>
                    <ul className="flex gap-14 backdrop-blur-md px-[42px] pt-[32px] ">
                        <li
                            className={` ${
                                path == "/"
                                    ? "border-[#fff]"
                                    : "border-transparent"
                            }  text-[#fff]  text-[16px] leading-[19px] font-[300] flex gap-2 border-b-[2px]  pb-[32px]`}>
                            <Link className="flex gap-[20px]" href={"/"}>
                                <span className=" font-bold text-[#fff]">
                                    00
                                </span>
                                <p>HOME</p>
                            </Link>
                        </li>
                        <li
                            className={` ${
                                path.includes("/destination")
                                    ? "border-[#fff]"
                                    : "border-transparent"
                            }  text-[#fff]  text-[16px] leading-[19px] font-[300] flex gap-2 border-b-[2px]  pb-[32px]`}>
                            <Link
                                className="flex gap-[20px]"
                                href={"/destination/1"}>
                                <span className=" font-bold text-[#fff]">
                                    01
                                </span>
                                <p>DESTINATION</p>
                            </Link>
                        </li>
                        <li
                            className={` ${
                                path == "/crew"
                                    ? "border-[#fff]"
                                    : "border-transparent"
                            }  text-[#fff]  text-[16px] leading-[19px] font-[300] flex gap-2 border-b-[2px]  pb-[32px]`}>
                            <Link className="flex gap-[20px]" href={"/crew/1"}>
                                <span className=" font-bold text-[#fff]">
                                    02
                                </span>
                                <p>CREW</p>
                            </Link>
                        </li>
                        <li
                            className={` ${
                                path == "/technology"
                                    ? "border-[#fff]"
                                    : "border-transparent"
                            }  text-[#fff]  text-[16px] leading-[19px] font-[300] flex gap-2 border-b-[2px]  pb-[32px]`}>
                            <Link
                                className="flex gap-[20px]"
                                href={"/technology"}>
                                <span className=" font-bold text-[#fff]">
                                    03
                                </span>
                                <p>TECHNOLOGY</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    );
};

export default Header;
