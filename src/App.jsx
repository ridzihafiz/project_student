import { useState } from "react";

export default function App() {
  const [dataSiswa, setDataSiswa] = useState([]);

  const handleSubmit = (e) => {
    // stop form from reloading page
    e.preventDefault();

    // get input data
    let fullname = e.target.fullname.value;
    let dob = e.target.dob.value;
    let address = e.target.address.value;

    // console.log({ fullname, dob, address });

    setDataSiswa([
      ...dataSiswa,
      {
        // property name: value name
        fullname: fullname,
        dob: dob,
        address: address,
        id: Date.now(),
      },
    ]);
  };

  return (
    <div className="w-screen min-h-screen bg-slate-100">
      <div className="w-full max-w-[1440px] flex flex-col mx-auto p-10">
        <h1 className="text-4xl text-[#736653]">Student Data</h1>

        <form
          className="w-full flex flex-col p-8 bg-white shadow-lg gap-4 mt-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname" className="text-[#736653]">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              required
              className="h-10 px-3 font-light rounded-md border-[1px] border-slate-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dob" className="text-[#736653]">
              Date of Birth
            </label>
            <input
              type="text"
              id="dob"
              required
              className="h-10 px-3 font-light rounded-md border-[1px] border-slate-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-[#736653]">
              Address
            </label>
            <textarea
              type="text"
              id="address"
              required
              className="px-3 font-light rounded-md h-[200px] border-[1px] border-slate-300"
            />
          </div>

          <button
            type="submit"
            className="w-[120px] h-10 bg-[#9AD7B9] rounded-md text-[#736653] ml-auto"
          >
            Submit
          </button>
        </form>

        {dataSiswa.map((e) => {
          return (
            <div
              className="w-full flex flex-col bg-[#9AD7B9] shadow-md p-6 my-6 rounded-md"
              key={e.id}
            >
              <h1 className="text-2xl font-light text-[#736653]">
                {e.fullname}
              </h1>
              <small className="text-[#736653]"> {e.dob} </small>
              <h1 className="text-[#736653]"> {e.address} </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
