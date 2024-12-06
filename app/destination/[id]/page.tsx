"use client";
import Details from "@/app/components/details/Details";
import { planets } from "@/app/db";
import { PlanetType } from "@/app/types";
import { usePathname } from "next/navigation";

const Page = () => {
    const path = usePathname();
    const id = Number(path.split("/")[2]);

    return (
        <>
            <div className="mt-[75px]">
                {planets
                    .filter((item: PlanetType) => item.id == id)
                    .map(item => (
                        <Details item={item} key={item.id} />
                    ))}
            </div>
        </>
    );
};

export default Page;
