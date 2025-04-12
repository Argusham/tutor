import React from 'react'
import Results from '../../components/pages/Search/Results'
import Sidebar from '../../components/pages/Search/Sidebar'

const Search = () => {
    return (
        <div className="flex w-full">
            <div className="h-[100vh]">
                <Sidebar />
            </div>
            <Results />
        </div>
    )
}

export default Search
