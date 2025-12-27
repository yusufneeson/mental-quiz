"use client";

import CheckBoxItem from "@/components/CheckBoxItem";
import { CHECKLIST_ITEMS, getResultMessage } from "@/lib/constants";
import { HeartIcon, RefreshCcw } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Home() {
    const [score, setScore] = useState(0);

    const formSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formVal = Object.fromEntries(formData.entries());
        const formKey = Object.keys(formVal);
        setScore(formKey.length);
    };
    return (
        <div className="mx-auto flex justify-center px-3 pt-5 pb-20">
            <div className="w-145 min-h-screen">
                <div className="mt-10 mx-auto flex justify-center flex-col items-center text-center">
                    <HeartIcon className="bg-red-300/30 text-white rounded-full p-2 w-13 h-13 fill-red-400" />

                    <div className="font-semibold text-xl md:text-2xl mt-4">
                        Apa Kabar Batinku Hari ini?
                    </div>
                    <div className="text-neutral-400">
                        Catat apa yang paling kamu rasakan belakangan ini
                    </div>
                </div>

                <div className="mt-10">
                    <form onSubmit={formSubmit}>
                        <div
                            className={`w-full h-full z-10 ${score != 0 ? "pointer-events-none" : ""}`}
                        >
                            {CHECKLIST_ITEMS.map((v, i) => (
                                <CheckBoxItem label={v} id={i} key={i} />
                            ))}
                        </div>
                        {score == 0 && (
                            <div className="mt-5 text-center">
                                <button
                                    className="bg-rose-400 text-white px-10 py-3 rounded-md font-bold"
                                    type="submit"
                                >
                                    Lihat Hasil
                                </button>
                            </div>
                        )}
                    </form>

                    {score > 0 && (
                        <div className="px-5">
                            <div className="bg-white py-8 px-5 shadow-md shadow-rose-200 rounded-xl mt-7 text-center">
                                <div className="text-xl font-semibold text-neutral-800">
                                    Yuk lihat, batinmu sedang butuh apa hari
                                    ini...
                                </div>
                                <div className="text-rose-400 uppercase font-semibold mt-5">
                                    Hasil Bacaan Singkat
                                </div>
                                <div className="bg-rose-100 text-rose-800 text-xl font-bold px-5 py-4 mt-5 rounded-xl">
                                    {getResultMessage(score)}
                                </div>
                                <div className="w-full h-1 border-t border-neutral-200 mt-5"></div>
                                <div className="mt-8 text-neutral-500">
                                    Apapun hasilnya, perasaanmu valid 😊
                                </div>
                                <div className="mt-8">
                                    <button
                                        className="flex justify-center items-center gap-3 text-rose-400 font-semibold text-center w-full"
                                        onClick={() => setScore(0)}
                                    >
                                        <RefreshCcw />
                                        Mulai ulang test
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
