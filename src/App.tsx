import { useState } from "react";
import { IoAddSharp, IoClose, IoTrash, IoCheckmark } from "react-icons/io5";

const App = () => {
  interface dataType {
    id: number;
    text: string;
  }
  const [title, setTitle] = useState<string>("");
  const [data, setData] = useState<dataType[]>([]);
  const [complete, setComplete] = useState<dataType[]>([]);

  const addhandle = () => {
    setTitle("");
    if (title !== "") {
      setData([...data, { id: Date.now(), text: title }]);
    } else {
      alert("write something");
    }
  };
  const completehandle = (id: number, text: string) => {
    setComplete([...complete, { id: Date.now(), text: text }]);
    setData(data.filter((i) => i.id !== id));
  };
  const deletehandle = (id: number) => {
    setData(data.filter((i) => i.id !== id));
  };
  const deletehandle2 = (id: number) => {
    setComplete(complete.filter((i) => i.id !== id));
  };
  return (
    <div className="flex flex-col justify-start items-center w-full h-screen px-8 gap-10 py-20">
      <div className=" flex gap-4">
        <div className="border-outliner border w-80 rounded-xl flex justify-center px-2 items-center">
          <input
            type="text"
            value={title}
            placeholder="Add a new task"
            onChange={(e) => setTitle(e.target.value)}
            className="focus:outline-none w-full bg-transparent px-2 h-12 "
            onKeyDown={(e) => (e.key === "Enter" ? addhandle() : "")}
          />

          <IoClose
            className={`text-white text-3xl  ${
              title == "" ? "hidden" : "block"
            } cursor-pointer`}
            onClick={() => setTitle("")}
          />
        </div>

        <button className="bg-secondary hover:bg-secondary/70 duration-500  h-12 w-12 rounded-xl flex justify-center items-center">
          <IoAddSharp className="text-white text-3xl" onClick={addhandle} />
        </button>
      </div>
      <div className="h-auto w-full flex flex-col gap-4">
        <p>Tasks to do - {data.length}</p>
        {data.map((i) => {
          return (
            <section
              key={i.id}
              className="bg-btncolor w-full py-6 flex justify-between px-4 items-center rounded-xl"
            >
              <p>{i.text}</p>
              <div className="flex text-2xl gap-3">
                <IoCheckmark
                  onClick={() => completehandle(i.id, i.text)}
                  className="text-white hover:text-secondary duration-300 cursor-pointer"
                />
                <IoTrash
                  onClick={() => deletehandle(i.id)}
                  className="text-white hover:text-secondary duration-300 cursor-pointer"
                />
              </div>
            </section>
          );
        })}
      </div>
      <div className="h-20 w-full flex flex-col gap-4">
        <p>Done - {complete.length}</p>
        {complete.map((i) => {
          return (
            <section
              key={i.id}
              className="bg-btncolor w-full py-6 flex justify-between px-4 items-center rounded-xl "
            >
              <p className="text-green-400 line-through">{i.text}</p>
              <IoTrash
                onClick={() => deletehandle2(i.id)}
                className="text-white text-2xl hover:text-secondary duration-300 cursor-pointer"
              />
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default App;
