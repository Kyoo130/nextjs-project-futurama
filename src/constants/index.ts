export const FUTURAMA_API_ENDPOINT = 'https://api.sampleapis.com/futurama/';

export const ROUTES = [
    {
        ID: 0,
        PATH: '/futurama',
        LABEL: 'Futurama',
        SUBS: [
            {
                ID: 0,
                PATH: '/info',
                LABEL: 'Info',
                ORDER: 0,                   
            },
            {
                ID: 1,
                PATH: '/characters',
                LABEL: 'Characters',
                ORDER: 1,                   
            },
            {
                ID: 2,
                PATH: '/cast',
                LABEL: 'Cast',
                ORDER: 2,                   
            },
            {
                ID: 3,
                PATH: '/episodes',
                LABEL: 'Episodes',
                ORDER: 3,                   
            },
            {
                ID: 4,
                PATH: '/questions',
                LABEL: 'Questions',
                ORDER: 4,                   
            },
            {
                ID: 5,
                PATH: '/inventory',
                LABEL: 'Inventory',
                ORDER: 5,                   
            },
        ]
    }
]