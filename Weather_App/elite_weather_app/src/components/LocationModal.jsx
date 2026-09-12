import { X } from 'lucide-react';
import { useState } from 'react';
import { getGeoLocation } from '../services/get-geolocation';


export default function LocationModal({ onClose }) {
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const value = city.trim();


        try {
            const result = await getGeoLocation(value);
            console.log(result);
        } catch (error) {
            console.log(error);
        }

    }

    const handleGeoLocation = () => {

        navigator.geolocation.getCurrentPosition((position) => {

            const { latitude, longitude } = position.coords;
            console.log({ latitude, longitude });
        }, (error) => {
            console.log(error);
        }, {
            timeout: 10000
        })
    }




    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
            <div className="h-[300px] w-[400px] p-5 rounded-2xl bg-gray-100 shadow-2xl">
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-medium">
                        Where are you today?
                    </h2>
                    <button className='w-10 h-10 rounded-full p-1 bg-gray-400 cursor-pointer'
                        onClick={onClose}><X /></button>
                </div>

                <div className='pt-8'>
                    <form onSubmit={handleSubmit} action="" className='space-y-5'>
                        <input
                            placeholder='Enter City Name'
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className='w-full border p-1 ' />
                        <div className="flex justify-center">
                            <button type="submit"

                                className="text-lg w-full font-medium bg-blue-500 px-5 py-2  rounded-4xl
                 text-gray-100
                hover:scale-105 transition-all delay-500">
                                Get Weather
                            </button>
                        </div>
                    </form>
                </div>
                <div className='py-2 text-center'>
                    Or
                </div>
                <div>
                    <div className="flex justify-center">
                        <button type="button"
                            onClick={handleGeoLocation}

                            className="text-lg w-full font-medium bg-blue-500 px-5 py-2  rounded-4xl
                 text-gray-100
                hover:scale-105 transition-all delay-500">
                            Use My Location
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}