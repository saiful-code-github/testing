import TikTakTeoData from "./TikTakTeoData";

const TikTakTeo = () => {
    return (
        <div className="max-w-[500px] mx-auto mt-4">
             <h2 className="text-center bg-linear-to-r text-6xl to-sky-800 via-orange-700 from-purple-800 font-bold capitalize" style={{WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", fontWeight: "700"}}>TikTakTeo Operation</h2>
             {/* tiktakteo data */}
             <TikTakTeoData/>
        </div>
    )
}
export default TikTakTeo;