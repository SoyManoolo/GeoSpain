import { useContext } from "react";
import { SearchContext } from "../context/searchContext";

function Header() {
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    return (
        <header className="fixed top-0 left-0 right-0 shadow-md z-50">
            <nav className="flex mx-auto p-4 bg-blue-900 justify-between items-center">
                <h1 className="text-white text-xl">GeoSpain</h1>
                <div className="w-1/3 flex justify-center">
                    <input
                        type="search"
                        name="location"
                        id="location"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-700 p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                        placeholder="Buscar ubicación..."
                    />
                </div>
            </nav>
        </header>
    );
}

export default Header;
