let intialState = {
    DialogData: [
        { id: 1, name: "саня", src: "https://imgv3.fotor.com/images/gallery/american-anime-stule-naked-man-avatar.jpg" },
        { id: 2, name: "андрюха", src: "https://static.vecteezy.com/system/resources/thumbnails/015/409/989/small/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg" },
        { id: 3, name: "дима", src: "https://png.pngtree.com/background/20230519/original/pngtree-landscape-jpg-wallpapers-free-download-picture-image_2668463.jpg" },
        { id: 4, name: "леха", src: "https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" }
    ],

    MessageData: [
        { id: 1, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
        { id: 2, message: "How are you ?" },
        { id: 3, message: "let`s go" },
        { id: 4, message: "yo yo yo" },
    ]

}
export const dialogsReducer = (state = intialState, action) => {

    switch (action.type) {
            
        case "ADD-MESSAGE":
            
        return {
            ...state,
            MessageData: [
                ...state.MessageData,
                { id: 5, message: action.newMessageText }
            ]
        };
       
default:
return state;
    }


}
export const addMessageActionCreator = (message) => ({ type: 'ADD-MESSAGE', newMessageText: message })
