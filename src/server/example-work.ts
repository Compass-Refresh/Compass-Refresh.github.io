
export type ExampleWork = {
    heading: string,
    body: string,
    images: { src: string }[]
}

export const EXAMPLE_WORK: ExampleWork = {
    heading: "Parking Lots Done Right",
    body: "Unlock the power of a pristine commercial space with our unbeatable competitive pricing for professional power washing and parking lot striping services",
    images: [
        { src: '/images/cr-1.png'},
        { src: '/images/cr-2.png'},
        { src: '/images/cr-3.png'},
        { src: '/images/cr-4.png'},
        { src: '/images/cr-5.png'},
    ]
}