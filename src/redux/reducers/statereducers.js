
const CURRENT_STATE = {

    // static state
    employeID: 1,
    employeName: 'muhammad waqas',
    employeEmail: 'muhammadwaqas642@gmail.com',
    employeCell: '03222946642',
    employeAge: '22',
    employeGender: 'male',

    // modify state
    modifyID: 0,
    modifyName: 'alber khan',
    modifyEmail: 'alberkhan@gmail.com',
    modifyCell: '03338523694',
    modifyAge: '23',
    modifyGender: 'male',

    // form data change
    userID: 1,
    userName: '',
    userEmail: '',
    userCell: '',
    userAge: '',
    userGender: '',

    eName: '',
    eLastName: '',
    eEmail: '',
    eCell: '',
    eAddress: '',
    eComments: '',
    eRegisterationDate: '',
    eGender: '',
    eCity: '',
    eState: '',
    eCountry: '',
    matric: '',
    enter: '',
    graduate: '',

    count: 0,

}

export default (state = CURRENT_STATE, action) => {
    switch (action.type) {

        case 'CHANGEMODIFY_NAME':
            return ({
                ...state,
                modifyName: action.payload,
            })
        case 'CHANGEMODIFY_EMAIL':
            return ({
                ...state,
                modifyEmail: action.payload,
            })
        case 'CHANGEMODIFY_CELL':
            return ({
                ...state,
                modifyCell: action.payload,
            })
        case 'CHANGEMODIFY_AGE':
            return ({
                ...state,
                modifyAge: action.payload,
            })
        case 'CHANGEMODIFY_GENDER':
            return ({
                ...state,
                modifyGender: action.payload,
            })


        case 'CHANGEUSER_NAME':
            return ({
                ...state,
                userName: action.payload,
            })
        case 'CHANGEUSER_EMAIL':
            return ({
                ...state,
                userEmail: action.payload,
            })
        case 'CHANGEUSER_CELL':
            return ({
                ...state,
                userCell: action.payload,
            })
        case 'CHANGEUSER_AGE':
            return ({
                ...state,
                userAge: action.payload,
            })
        case 'CHANGEUSER_GENDER':
            return ({
                ...state,
                userGender: action.payload,
            })

        // step form states

        case 'CHANGE_ENAME':
            return ({
                ...state,
                eName: action.payload,
            })
        case 'CHANGE_ELASTNAME':
            return ({
                ...state,
                eLastName: action.payload,
            })
        case 'CHANGE_EEMAIL':
            return ({
                ...state,
                eEmail: action.payload,
            })
        case 'CHANGE_ECELL':
            return ({
                ...state,
                eCell: action.payload,
            })
        case 'CHANGE_EADDRESS':
            return ({
                ...state,
                eAddress: action.payload,
            })
        case 'CHANGE_ECOMMENTS':
            return ({
                ...state,
                eComments: action.payload,
            })
        case 'CHANGE_EREGISTERATIONDATE':
            return ({
                ...state,
                eRegisterationDate: action.payload,
            })
        case 'CHANGE_EGENDER':
            return ({
                ...state,
                eGender: action.payload,
            })
        case 'CHANGE_ECITY':
            return ({
                ...state,
                eCity: action.payload,
            })
        case 'CHANGE_ESTATE':
            return ({
                ...state,
                eState: action.payload,
            })
        case 'CHANGE_ECOUNTRY':
            return ({
                ...state,
                eCountry: action.payload,
            })
        case 'CHANGE_MATRIC':
            return ({
                ...state,
                matric: action.payload,
            })
        case 'CHANGE_ENTER':
            return ({
                ...state,
                enter: action.payload,
            })
        case 'CHANGE_GRADUATE':
            return ({
                ...state,
                graduate: action.payload,
            })

        // step form states end


        case 'INCREMENT':
            return ({
                ...state,
                count: state.count + 1
            })


        default:
            return state;
    }
}



// export default (state = CURRENT_STATE, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }