"use client";
import React, { ReactNode } from "react";
import Container from "../utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const path = usePathname();
    return (
        <Container>
            <div className="px-[80px]">
                <h2 className="leading-[34px] text-[28px] font-[400] flex gap-5">
                    <span className="text-gray-700 font-bold">01</span>
                    {"  "}Pick your destination
                </h2>
                <div className=" mt-[35px] flex justify-self-end">
                    <ul className="flex space-x-[55px] justify-item-end">
                        <li>
                            <Link
                                className={` hover:opacity-50 transition duration-300  p-[12px] font-[500] text-[16px] text-[#D0D6F9]  border-b-2  ${
                                    path.includes("1")
                                        ? "border-white"
                                        : "border-transparent"
                                } `}
                                href={`/destination/1`}>
                                MOON
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`hover:opacity-50 transition duration-300 p-[12px] font-[500] text-[16px] text-[#D0D6F9]  border-b-2  ${
                                    path.includes("2")
                                        ? "border-white"
                                        : "border-transparent"
                                } `}
                                href={`/destination/2`}>
                                MARS
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`hover:opacity-50 transition duration-300 p-[12px] font-[500] text-[16px] text-[#D0D6F9]  border-b-2  ${
                                    path.includes("3")
                                        ? "border-white"
                                        : "border-transparent"
                                } `}
                                href={`/destination/3`}>
                                EUROPA
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`hover:opacity-50 transition duration-300 p-[12px] font-[500] text-[16px] text-[#D0D6F9]  border-b-2  ${
                                    path.includes("4")
                                        ? "border-white"
                                        : "border-transparent"
                                } `}
                                href={`/destination/4`}>
                                TITAN
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">{children}</div>
            </div>
        </Container>
    );
};

export default Layout;
