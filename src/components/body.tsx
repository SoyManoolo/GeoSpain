import { useContext } from 'react'
import { SearchContext } from '../context/searchContext'

function Body() {
    const { searchTerm } = useContext(SearchContext)

    return (
        <main className="mt-16">
            <p>Búsqueda actual: {searchTerm}</p>
        </main>
    )
}

export default Body