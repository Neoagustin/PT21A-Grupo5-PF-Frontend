"use client";

import React, { useState } from "react";

export const StarRating: React.FC = (): React.ReactElement => {

    const [hover, setHover] = useState<number>(0);

    return (

        <div className="flex items-center">
            {
                [1, 2, 3, 4, 5].map((star) => (
                    <span className={`cursor-pointer text-xs transition-all ${star <= hover ? 'text-[#b4690e]' : 'text-blackPage'}`} key={star} onMouseEnter={() => setHover(star)} onMouseLeave={() => setHover(0)}>★</span>
                ))
            }
        </div>

    );

};

export default StarRating;