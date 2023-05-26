const initialState = {
    publications: [],
    authors: [
        {
            id: 1,
            name: "Anakin Skywalker",
            avatar: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/10/27120854/Hayden-Christensen-FI-1.jpg",
            nickname: "AnakinSky",
            tag: "@anakin_sky",
        },
        {
            id: 2,
            name: "Darth Vader",
            avatar: "https://t4.ftcdn.net/jpg/03/13/36/79/360_F_313367965_7B8Y7JrJ3JAG6zdjw51L59kVQZMlA9K7.jpg",
            nickname: "DVader",
            tag: "@d_vader",
        },
        {
            id: 3,
            name: "R2-D2",
            avatar: "https://technomarket.biz.ua/img/cms/sphero-r2d2-7.jpg",
            nickname: "R1-D1",
            tag: "@r2_d2",
        },
        {
            id: 4,
            name: "Chewbacca",
            avatar: "https://lumiere-a.akamaihd.net/v1/images/5e94826f7d7499000120d564-image_f9b9d30e.jpeg?region=336%2C0%2C864%2C864",
            nickname: "Chucha",
            tag: "@chucha",
        },
    ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PUBLICATION':
            return {
                ...state,
                publications: [...state.publications, action.payload]
            };
        default:
            return state;
    }
};

export default reducer;