export default function RecommendationCard({recommendation}) {
    return (

        <div className="shadow-2xl rounded-2xl p-5">
            <h2 className="text-blue-950 font-bold text-xl">
                Smart Recommendations
            </h2>

            <div className="">

                {
                   recommendation?.text
                }
            </div>
        </div>
    );
}