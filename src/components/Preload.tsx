"use client"

import ReactDOM from "react-dom"

export function PreloadFonts() {
    const opts = { as: "font", type: 'font/ttf', crossOrigin: 'anonymous' } as const
    ReactDOM.preload("/fonts/saira.ttf", opts)
    ReactDOM.preload("/fonts/saira-italic.ttf", opts)
    return null
}