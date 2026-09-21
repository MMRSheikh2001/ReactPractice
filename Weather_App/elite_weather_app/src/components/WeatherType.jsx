
export default function WeatherType({weather,place}) {

    return (

        <div className="shadow-2xl flex flex-col items-center justify-between rounded-2xl p-5">
            <div className="text-center">
                <h2 className="text-blue-950 font-bold text-xl">
                    Live in {place.name}
                </h2>
            </div>
            <div className="flex items-center justify-center">
                <p className="text-4xl text-blue-900 font-extrabold">
                    {weather?.description}
                </p>
            </div>
            <div className="flex items-center justify-center">
                <span className="rounded-full border-2 font-medium text-lg border-purple-400 p-1">
                    Feels Like : {weather?.feelsLike}
                </span>
            </div>
        </div>
    );
}