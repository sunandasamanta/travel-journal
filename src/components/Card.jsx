import { MdLocationOn } from 'react-icons/md'

export default function Card({ data }) {
    console.log(data);
    return (
        <div className="flex sm:flex-wrap sm:justify-center gap-4 p-4" >
            <img className="rounded-xl max-w-[250px] aspect-[3/4] object-cover" src={data.image} alt="" />
            <div className="grid place-content-center">
                <p className="flex text-xl items-center">
                    <MdLocationOn className="text-[#F55A5A] text-xl" />
                    <span className="tracking-widest font-normal px-2 text-[#2B283A]">
                        {data.country}
                    </span>
                    <a href={data.googleMap} className="underline px-4 text-gray-400">View on Google Maps</a>
                </p>
                <h2 className="font-bold text-5xl my-4">
                    {data.place}
                </h2>
                <p className="my-4 text-xl">
                    {data.period}
                </p>
                <p className="leading-7 text-[#2B283A]">
                    {data.description}
                </p>
            </div>
        </div>
    )
}
