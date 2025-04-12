import React from 'react'
import { Search, Calendar, Book, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
    return (
        <div className="text-black h-[60vh] flex items-center text-2xl">
            <div className="w-full">
                <h1 className="text-center text-5xl mb-15">How it works</h1>
                <div className="grid grid-cols-5 w-full">
                    <div className="text-center">
                        <Search className="mx-auto w-30 h-30"/>
                        Search Tutors
                    </div>
                    <div>
                        <ArrowRight className="mx-auto w-30 h-30" />
                    </div>
                    <div className="text-center">
                        <Calendar className="mx-auto w-30 h-30" />
                        Request Session
                    </div>
                    <div>
                        <ArrowRight className="mx-auto w-30 h-30" />
                    </div>
                    <div className="text-center">
                        <Book className="mx-auto w-30 h-30 font-light" />
                        Start learning
                    </div>
                </div>
            </div>
        </div>
    )
}
