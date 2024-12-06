interface PropsType {
    children: React.ReactNode;
}

const Container = ({ children }: PropsType) => {
    return <div className="w-[83%] mx-auto ">{children}</div>;
};

export default Container;
