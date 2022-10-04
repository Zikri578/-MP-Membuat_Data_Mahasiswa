import { useState } from "react";


export default function App() {

    const [dataSiswa, setDataSiswa] = useState([]);

    const handleSubmit = (e) => {
        // stop form for reload
        e.preventDefault()

        // get input data
        let fullname = e.target.fullname.value;
        let date = e.target.date.value;
        let alamat = e.target.alamat.value;

        // console.info({
        //     fullname, date, alamat
        // });

        setDataSiswa([
            ...dataSiswa, {
                fullname: fullname,
                date: date,
                alamat: alamat,
                id: Date.now()
            }
        ]);
    }

    return (
        <div className="w-screen min-h-screen bg-slate-300">

            <div className="w-full max-w-[900px] flex flex-col mx-auto p-10">
                <h1 className="text-4xl text-white-500">Data Mahasiswa</h1>

                <form className="w-full flex flex-col p-8 bg-white shadow-lg gap-4 mt-10" onSubmit={handleSubmit}>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname">Nama Lengkap</label>
                        <input type="text" id="fullname" required className="h-10 px-3 font-light rounded-md border-[1px] border-slate-300" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="date">Tempat / Tahun Lahir</label>
                        <input type="text" id="date" required className="h-10 px-3 font-light rounded-md border-[1px] border-slate-300" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="alamat">Alamat</label>
                        <textarea type="text" id="alamat" required className="p-3 font-light rounded-md h-[200px] border-[1px] border-slate-300" />
                    </div>

                    <button type="submit" className="w-[120px] h-10 bg-blue-500 rounded-md text-white ml-auto">Submit</button>

                </form>

                {dataSiswa.map((e) => {
                    return (
                        <div className="w-full flex flex-col bg-white shadow-md p-6 my-6 rounded-md" key={e.id}>
                            <h1 className="text-2xl font-light">{e.fullname}</h1>
                            <h6 className="text-2xl font-light">{e.date}</h6>
                            <small>{e.date}</small>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}