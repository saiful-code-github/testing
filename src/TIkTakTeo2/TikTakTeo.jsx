import TikTakTeoData from "./TiKTakTeoData";

const TikTakTeo = () => {
    return (
        <div className="max-w-[500px] mx-auto my-[40px]">
             <h2 className="text-center fon-bold bg-linear-90 to-sky-700 via-orange-700 from-purple-700" style={{WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "38px", fontWeight: "700"}}>TikTakTeo Operation</h2>
             <TikTakTeoData/>
        </div>
    )
}
export default TikTakTeo;