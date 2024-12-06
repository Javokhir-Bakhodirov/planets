"use client";
import { crew } from "@/app/db";
import { CrewType } from "@/app/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
    const path = usePathname();
    const id = Number(path.split("/")[2]);

    return (
        <div className="flex items-center justify-between gap-8 p-8">
            {crew
                .filter((item: CrewType) => item.id === id)
                .map(item => (
                    <div
                        key={item.id}
                        className="flex w-full items-center justify-between">
                        <div className="w-1/2 space-y-4">
                            <h2 className="text-4xl font-bold text-[#D0D6F9] uppercase">
                                {item.name}
                            </h2>
                            <h3 className="text-xl font-medium text-gray-400 uppercase">
                                {item.job}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className="w-1/2">
                            <Image
                                style={{ width: "615px", height: "600px" }}
                                width={600}
                                height={600}
                                src={item.img}
                                alt={item.name}
                            />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Page;
