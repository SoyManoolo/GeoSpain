import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/searchContext";
import Map from "./Map";
import { getWeatherDescription } from "../utils/weatherUtils";

interface CurrentWeather {
    temperature: number;
    weathercode: number;
    windspeed: number;
    winddirection: number;
    is_day: number;
    time: string;
    interval?: number;
}

interface WeatherData {
    latitude: number;
    longitude: number;
    current_weather?: CurrentWeather;
    hourly?: string;
}

function Body() {
    const { searchTerm, coordinates } = useContext(SearchContext);
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (coordinates.lat === null || coordinates.lon === null) {
                setWeatherData(null);
                setError(null);
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);
            setWeatherData(null);

            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,cloudcover,precipitation,weathercode&timezone=Europe/Madrid&start_date=${formattedDate}&end_date=${formattedDate}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    let errorBody = `HTTP error! status: ${response.status}`;
                    try {
                        const errorData = await response.json();
                        errorBody += ` - ${errorData.reason || JSON.stringify(errorData)}`;
                    } catch { /* vacío */ }
                    throw new Error(errorBody);
                }
                const data: WeatherData = await response.json();
                setWeatherData(data);
                console.log("Weather Data fetched:", data);
            } catch (err: unknown) {
                console.error("Failed to fetch weather data:", err);
                setError(err instanceof Error ? err.message : "Error al obtener datos del tiempo.");
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [coordinates.lat, coordinates.lon]);

    return (
        <>
            {/* Primera columna: Mapa */}
            <div className="p-4 border rounded shadow flex flex-col">
                <h2 className="text-xl font-semibold mb-2 shrink-0">Mapa</h2>
                <div className="grow">
                    <Map latitude={coordinates.lat ?? 40.4167047} longitude={coordinates.lon ?? -3.7035825} />
                </div>
            </div>

            {/* Segunda columna: Información Meteorológica */}
            <div className="p-4 border rounded shadow">
                <h2 className="text-xl font-semibold mb-2">Información Meteorológica</h2>
                {!loading && !error && weatherData && weatherData.current_weather ? (
                    <div>
                        <p><strong>Ubicación:</strong> {searchTerm || `(${weatherData.latitude?.toFixed(4)}, ${weatherData.longitude?.toFixed(4)})`}</p>
                        <p><strong>Temperatura Actual:</strong> {weatherData.current_weather.temperature}°C</p>
                        <p><strong>Estado del Tiempo:</strong> {getWeatherDescription(weatherData.current_weather.weathercode)}</p>
                        <p><strong>Velocidad del Viento:</strong> {weatherData.current_weather.windspeed} km/h</p>
                        <p><strong>Dirección del Viento:</strong> {weatherData.current_weather.winddirection}°</p>
                    </div>
                ) : (
                    <p>No hay datos disponibles.</p>
                )}
            </div>
        </>
    );
}

export default Body;