import { USERS } from "./users"

export const POSTS = [
    {
        imageUrl: "https://static2.abc.es/media/bienestar/2021/04/04/batchcoocking-kEBB--620x349@abc.jpg",
        user: USERS[0].user,
        likes: 7870,
        caption: "Train Ride to Home",
        profile_picture: USERS[0].image,
        comments: [
            {
                user: "gallo",
                comment: "Wow! This is very good!"
            },
            {
                user: "pato",
                comment: "I said the same :S"
            },
        ],
    },
    {
        imageUrl: "https://static2.abc.es/media/bienestar/2021/04/04/batchcoocking-kEBB--620x349@abc.jpg",
        user: USERS[1].user,
        likes: 3500,
        caption: "Train Ride to Home",
        profile_picture: USERS[1].image,
        comments: [
            {
                user: "sebastian",
                comment: "OMG!"
            },
            {
                user: "me.dev",
                comment: "Zz"
            },
        ],
    }

]