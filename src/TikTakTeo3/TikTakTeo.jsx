import TikTakTeoData from "./TikTakTeoData";

const TikTakTeo = () => {
    return (
        <div className="max-w-[500px] mx-auto flex justify-center items-center mx-auto flex-col mt-3">
            <h2 className="bg-linear-90 to-sky-700 from-blue-600 via-sky-300" style={{WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", fontSize: "2rem", fontWeight: "700"}}>TikTakTeo Operation</h2>
            <TikTakTeoData/>
        </div>
    )
}
export default TikTakTeo;