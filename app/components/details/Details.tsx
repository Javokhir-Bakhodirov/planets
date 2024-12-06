import { PlanetType } from "@/app/types";
import Image from "next/image";
import React from "react";

interface DetailType {
    item: PlanetType;
}

const Details = ({ item }: DetailType) => {
    console.log();

    return (
        <div className=" flex justify-between text-[#D0D6F9]">
            <div className="animate-spin-slow">
                <Image
                    priority
                    src={item.img}
                    alt=""
                    width={445}
                    height={445}
                />
            </div>
            <div className="max-w-[475px] flex flex-col gap-[35px]">
                <div className="py-[25px] border-b-2 border-[#D0D6F9]">
                    <h2 className="text-[100px] font-[500] text-white">
                        {item.name}
                    </h2>
                    <p className="text-[18px] font-semibold text-[#D0D6F9]">
                        {item.description}
                    </p>
                </div>
                <div className="grid items-start grid-cols-2 gap-[20px] ">
                    <div className="">
                        <p className="text-[17px] font-semibold">
                            AVG. DISTANCE
                        </p>
                        <strong className="text-[28px] leading-[32px] mt-[29px]">
                            {item.distance}
                        </strong>
                    </div>
                    <div className="">
                        <p className="text-[17px] font-semibold">
                            Est. travel time
                        </p>
                        <strong className="text-[28px] leading-[32px]">
                            {item.travelTime}
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
