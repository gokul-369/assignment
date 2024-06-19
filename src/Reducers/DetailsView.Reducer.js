import dp1 from "../Assets/Images/dp1.svg"
import dp2 from "../Assets/Images/dp2.svg"
import dp3 from "../Assets/Images/dp3.svg"
import dp4 from "../Assets/Images/dp4.svg"
import mail from "../Assets/Images/mail.svg"
import ctr from "../Assets/Images/CTR.svg"
import time from "../Assets/Images/time.svg"
import money from "../Assets/Images/money.svg"

const initialState = {
    convoDetails: {
        title: `Collection "Seek"`,
        subTitle: "You have shared 2 assets with 4 recipients",
        subText: "1 month ago via QuickSend",
        stats: [
            {
                parameter: "email open rate",
                value: "50%",
                icon: mail
            },
            {
                parameter: "content click rate",
                value: "100%",
                icon: ctr
            },
            {
                parameter: "total time spent",
                value: "22:53",
                icon: time
            },
            {
                parameter: "deal value",
                value: "$ 367",
                icon: money
            },
        ],
        recipientsCount: 8,
        sectionCount: 5,
        recipientList: [
            {
                id: 1,
                profilePicture: dp1,
                name: "James Clark",
                lastViewed: "02 Jan 2024",
                count: "~85m"
            },
            {
                id: 2,
                profilePicture: dp2,
                name: "Elizabeth Carol",
                lastViewed: "02 Jan 2024",
                count: "~85m"
            },
            {
                id: 3,
                profilePicture: dp3,
                name: "Michael",
                lastViewed: "02 Jan 2024",
                count: "~85m"
            },
            {
                id: 4,
                profilePicture: dp4,
                name: "Pamela Jack",
                lastViewed: "02 Jan 2024",
                count: "~85m"
            },
            {
                id: 5,
                profilePicture: dp3,
                name: "Pamela Jack",
                lastViewed: "02 Jan 2024",
                count: "~85m"
            },
        ]
    }
}

function detailsReducer(state = initialState, action) {
    switch (action.type) {
        case "LOAD_DETAILS":
            return state // assuming that this is the data got from the API
        default:
            return state // normally we would return the initial state
    }
}

export default detailsReducer