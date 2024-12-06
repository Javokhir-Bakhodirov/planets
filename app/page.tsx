import Container from "./utils";

export default function Home() {
    return (
        <section>
            <Container>
                <div className="flex items-end justify-between pt-[125px] px-[50px]">
                    <div className="left-content max-w-[444px]">
                        <h1 className=" text-[28px] font-[500] text-[#D0D6F9]">
                            SO, YOU WANT TO TRAVEL TO{" "}
                            <span className="text-[#fff] text-[128px]">
                                SPACE
                            </span>
                        </h1>
                        <p className="leading-[32px] text-[18px] font-[400] text-[#D0D6F9]">
                            Let s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we ll give you a truly out of this world
                            experience!
                        </p>
                    </div>
                    <div className="">
                        <div className="w-[245px] h-[245px] bg-white rounded-full flex items-center justify-center font-[400] text-[32px]">
                            <p className="text-[#000]">EXPLORE</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
