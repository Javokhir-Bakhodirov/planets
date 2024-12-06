"use client";
import React, { ReactNode } from "react";
import Container from "../utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const path = usePathname();
    return (
        <Container>
            <div className="px-[80px] relative">
                <h2 className="leading-[34px] text-[28px] font-[400] flex gap-5">
                    <span className="text-gray-700 font-bold">02</span>
                    {"  "}MEET YOUR CREW
                </h2>
                <div className="">{children}</div>
                <ul className="flex absolute bottom-[85px] left-[25xp] space-x-[25px] justify-end">
                    <li>
                        <Link
                            href="/crew/1"
                            className={`hover:opacity-50 transition duration-300 rounded-full w-[10px] h-[10px] font-medium text-[#D0D6F9] bg-[#D0D6F9] flex items-center justify-center ${
                                path.includes("1")
                                    ? "opacity-100"
                                    : "opacity-50"
                            }`}></Link>
                    </li>
                    <li>
                        <Link
                            href="/crew/2"
                            className={`hover:opacity-50 transition duration-300 rounded-full w-[10px] h-[10px] font-medium text-[#D0D6F9] bg-[#D0D6F9] flex items-center justify-center ${
                                path.includes("2")
                                    ? "opacity-100"
                                    : "opacity-50"
                            }`}></Link>
                    </li>
                    <li>
                        <Link
                            href="/crew/3"
                            className={`hover:opacity-50 transition duration-300 rounded-full w-[10px] h-[10px] font-medium text-[#D0D6F9] bg-[#D0D6F9] flex items-center justify-center ${
                                path.includes("3")
                                    ? "opacity-100"
                                    : "opacity-50"
                            }`}></Link>
                    </li>
                    <li>
                        <Link
                            href="/crew/4"
                            className={`hover:opacity-50 transition duration-300 rounded-full w-[10px] h-[10px] font-medium text-[#D0D6F9] bg-[#D0D6F9] flex items-center justify-center ${
                                path.includes("4")
                                    ? "opacity-100"
                                    : "opacity-50"
                            }`}></Link>
                    </li>
                </ul>
            </div>
        </Container>
    );
};

export default Layout;
