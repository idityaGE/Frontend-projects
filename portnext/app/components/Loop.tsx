"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Loop({ direction }: { direction: "left" | "right" }) {
    return (
        <div className="">
            <InfiniteMovingCards
                items={testimonials}
                direction={direction}
                speed="slow"
                pauseOnHover={false}
            />
        </div>
    );
}

const testimonials = [
    {
        id: 1,
        title: "Environment",
    },
    {
        id: 2,
        title: "Content",
    },
    {
        id: 3,
        title: "Experience",
    },
];
