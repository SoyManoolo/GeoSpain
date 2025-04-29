import { createContext, useState, ReactNode } from 'react'

interface Coordinates {
    lat: number | null;
    lon: number | null;
}

interface SearchContextType {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    coordinates: Coordinates;
    setCoordinates: (coords: Coordinates) => void;
}

const initialCoordinates: Coordinates = { lat: null, lon: null };

export const SearchContext = createContext<SearchContextType>({
    searchTerm: '',
    setSearchTerm: () => { },
    coordinates: initialCoordinates,
    setCoordinates: () => { },
})

export function SearchProvider({ children }: { children: ReactNode }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [coordinates, setCoordinates] = useState<Coordinates>(initialCoordinates);

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, coordinates, setCoordinates }}>
            {children}
        </SearchContext.Provider>
    );
}