import CheckBoxItem from "@/components/CheckBoxItem";
import { CHECKLIST_ITEMS } from "@/lib/constants";
import { HeartIcon } from "lucide-react";

export default function Home() {
    return (
        <div className="mx-auto flex justify-center px-5 pt-5 pb-20">
            <div className="w-125 h-screen">
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
                    <form>
                        {CHECKLIST_ITEMS.map((v, i) => (
                            <CheckBoxItem label={v} id={i} key={i} />
                        ))}
                    </form>
                </div>
            </div>
        </div>
    );
}
