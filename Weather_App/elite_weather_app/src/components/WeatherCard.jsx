import { MapPin } from "lucide-react";
import StatCard from "./StatCard";


export default function WeatherCard({ weather, place }) {

    const stat = [
        { icon: '', label: "Feels Like", value: `${weather?.feelsLike}` },
        { icon: '', label: "Humidity", value: `${weather?.humidity}` },
        { icon: '', label: "Wind Speed", value: `${weather?.windSpeed}` },

    ];


    return (
        <div className="space-y-3">
            <h1 className="text-2xl text-blue-500 font-semibold">
                Today's Weather Details
            </h1>
            <div className="flex items-center gap-3">
                <MapPin size={30} />
                <h2 className="text-4xl text-purple-500 font-semibold">
                    {place.name}
                </h2>
            </div>
            <div className="flex items-center gap-16">
                <h3 className="text-6xl text-purple-900 font-extrabold">
                    {weather?.temperature} C
                </h3>
                <p className="text-4xl text-purple-800 font-extrabold">
                    {weather?.description}
                </p>
            </div>

            <div className="flex items-center justify-between">

                {
                    stat.map((s, index) => {
                        return (<StatCard key={index} s={s} />)
                    })
                }




            </div>

        </div>
    );
}