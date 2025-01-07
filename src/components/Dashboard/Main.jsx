import Bar from "./Bar";
import Content from "./Content";

const Main = () => {
  return (
    <div className="">
      <div className="flex items-center p-4 w-[100%] ">
        <Bar className="w-[30%] bg-slate-400" />
        <Content className="w-[70%] bg-slate-400" />
      </div>
    </div>
  );
};

export default Main;
