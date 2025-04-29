import { useContext, useRef } from "react";
import { SearchContext } from "../context/searchContext";

function Header() {
    const apiUrl: string = "https://nominatim.openstreetmap.org/search?";

    const { setSearchTerm, setCoordinates } = useContext(SearchContext);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = async () => {
        if (inputRef.current) {
            setSearchTerm(inputRef.current.value);

            const url = await fetch(`${apiUrl}q=${inputRef.current.value}&format=json`);

            const data = await url.json()

            const result = data[0];

            const lat = result.lat;
            const lon = result.lon;

            setCoordinates({ lat, lon})

            console.log(lat, lon);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 shadow-md z-[10000]">
            <nav className="flex mx-auto p-4 bg-blue-900 justify-between items-center">
                <h1 className="text-white text-xl">GeoSpain</h1>
                <div className="w-1/3 flex justify-center items-center space-x-2">
                    <input
                        ref={inputRef}
                        type="search"
                        name="location"
                        id="location"
                        onKeyDown={handleKeyDown}
                        className="w-full bg-gray-700 p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                        placeholder="Buscar ubicación..."
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 flex-shrink-0"
                    >
                        Buscar
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;