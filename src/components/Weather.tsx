
export default function Weather() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="bg-violet-500 text-center py-3 rounded-t-lg">
                <h1 className="text-white text-4xl font-bold font-sans-serif">Weather</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-blue-200 rounded-b-lg">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-gray-700">Today's weather conditions</h2>
                    <p>blah blab</p>
                    <p>blah blab</p>
                    <p>blah blab</p>
                    <p>blah blab</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg" style={{ height: "400px" }}>
                    <iframe
                        src="https://www.youtube.com/embed/h642pwwTJRE?si=_3YHnhkyzDpgkB9j"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{
                            position: 'relative',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                    ></iframe>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                    <iframe
                        width="650"
                        height="450"
                        src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=wind&product=ecmwf&level=surface&lat=28.46&lon=77.028"
                        frameBorder="0"
                    ></iframe>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                        Current temperature: 72°F
                        <br />
                        Humidity: 45%
                    </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-1/2 md:w-2/3 lg:w-3/4">
                    <div id="ww_eb60f82b5556d" style={{ position: 'relative', top: 0, width: '100%', height: '100%' }} v='1.3' loc='id' a='{"t":"horizontal","lang":"en","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'>More forecasts: <a href="https://oneweather.org/fr/paris/30_jours/" id="ww_eb60f82b5556d_u" target="_blank">Meteo a 30 jours</a></div>
                    <script async src="https://app2.weatherwidget.org/js/?id=ww_eb60f82b5556d"></script>
                    <p className="text-gray-700"></p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/2">
                    <p className="text-gray-700">Forecast: Sunny with a high of 80°F</p>
                </div>
                
            </div>
        </div>
    )
}