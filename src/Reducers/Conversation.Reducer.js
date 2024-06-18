import image1 from "../Assets/Images/img1.svg"
import image2 from "../Assets/Images/img2.svg"

const initialState={
    convos:[{
        id:1,
        image:image1,
        title:'Meet New Paperflite',
        subTitle:'Shared 4 hours ago',
        subText:'Kevin +6 more'
    },{
        id:2,
        image:image2,
        title:'Collection "Seek"',
        subTitle:'Shared 4 hours ago',
        subText:'Kevin +6 more'
    },{
        id:3,
        image:image1,
        title:'Indhira Gandhi International Ai..',
        subTitle:'Shared 4 hours ago',
        subText:'Kevin +6 more'
    },
    {   id:4,
        image:image2,
        title:'Paperflite Originals',
        subTitle:'Shared 4 hours ago',
        subText:'Kevin +6 more'
    },
    {
        id:5,
        image:image1,
        title:'Meet New Paperflite',
        subTitle:'Shared 4 hours ago',
        subText:'Kevin +6 more'
    }
    ]
}

function conversationReducer(state = initialState, action) {
    switch (action.type) {
        case "LOAD_CONVOS":
            return state // assuming that this is the data got from the API
        default:
            return state // normally we would return the initial state
    }
  }

export default conversationReducer