import { useLocation } from "react-router"
import { getWeather } from "../services/get-weather";
import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import RecommendationCard from "../components/RecommendationCard";
import WeatherType from "../components/WeatherType";
import { getRecommendations } from "../utils/getRecommendation";

export default function Weather() {

    const [weather, setWeather] = useState(null);

    const value = useLocation();
    const place = value.state.location;

    console.log(place);
    console.log("Weather ", weather);

    useEffect(() => {
        if (!place) {
            return;
        }

        const fetchWeather = async () => {
            try {
                const result = await getWeather(place);
                console.log(result);

                setWeather(result);
            } catch (error) {
                console.log(error);
            }
        }

        fetchWeather();
    }, [place])

   

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">


                    <div className="shadow-2xl rounded-2xl p-5">
                        {/* weather Card */}
                        <WeatherCard weather={weather} place={place} />

                    </div>
                    {/* Weather Recommendation */}

                    <RecommendationCard recommendation={getRecommendations(weather)} />
                </div>


                {/* weather type */}
                <WeatherType weather={weather} place={place} />
            </div>
        </div>
    )
}