export interface Character {
    name: {
        first: string,
        middle: string,
        last: string
        },
    images: {
        headshot: string,
        main: string,
        },
    gender: string,
    species: string,
    homePlanet: string,
    occupation: string,
    // sayings: ["Shut up and take my money!"],
    id: number,
    age: number
}


