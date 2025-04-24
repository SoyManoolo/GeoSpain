import { useContext } from "react";
import { SearchContext } from "../context/searchContext";
import Map from "./Map";

function Body() {
    const { searchTerm } = useContext(SearchContext);

    return (
        <div>
            <p>Búsqueda actual: {searchTerm}</p>
            <Map />
        </div>
    );
}

export default Body;
