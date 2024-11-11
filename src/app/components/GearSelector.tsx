/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";


interface GearSelectorProps {
    gear: string;
    images: string[];
    hideButtons: boolean;
}

const GearSelector: React.FC<GearSelectorProps> = ({ gear, images, hideButtons }) => {
    const [index, setIndex] = useState<number>(0);
    const buttonStyle = 'p-2 bg-gray-300 w-24 h-16 rounded-xl text-black text-lg mx-4';
    return (
        <div className="flex flex-row">
            {!hideButtons &&
                <button onClick={() => {
                    if (index > 0) {
                        setIndex(prev => prev - 1);
                    }
                }} className={`${buttonStyle} ${index > 0 ? 'bg-gray-300' : 'bg-gray-500'}`}>Prev</button>
            }
            <img className="w-96" src={images[index]} alt={gear} />
            {!hideButtons &&
                <button onClick={() => {
                    const nextIndex = index + 1;
                    if (nextIndex < images.length && images[nextIndex]) {
                        setIndex(nextIndex);
                    }
                }} className={`${buttonStyle} ${index < images.length - 1 ? 'bg-gray-300' : 'bg-gray-500'}`}>Next</button>
            }
        </div>
    );
}


export default GearSelector;
