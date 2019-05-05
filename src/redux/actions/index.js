export function selectFetchItem(selected_item) {
  return {
    type: 'SELECT_ITEM',
    payload: selected_item,
  };
}

export function updateState() {
  return dispatch => {
    dispatch({
      type: 'CHANGEMODIFY_NAME',
      payload: 'waseem'
    })
    dispatch({
      type: 'CHANGEMODIFY_EMAIL',
      payload: 'waseemkhan@gmail.com'
    })
    dispatch({
      type: 'CHANGEMODIFY_CELL',
      payload: '03008523691'
    })
    dispatch({
      type: 'CHANGEMODIFY_AGE',
      payload: '26'
    })
    dispatch({
      type: 'CHANGEMODIFY_GENDER',
      payload: 'male'
    })

  }
}

export function formData1(
  updateUserName,
  updateUserEmail,
  updateUserCell,
  updateUserAge,
  updateUserGender
  
) {
  return dispatch => {
    dispatch({
      type: 'CHANGEUSER_NAME',
      payload: updateUserName
    })
    dispatch({
      type: 'CHANGEUSER_EMAIL',
      payload: updateUserEmail
    })
    dispatch({
      type: 'CHANGEUSER_CELL',
      payload: updateUserCell
    })
    dispatch({
      type: 'CHANGEUSER_AGE',
      payload: updateUserAge
    })
    dispatch({
      type: 'CHANGEUSER_GENDER',
      payload: updateUserGender
    })
  }
}

export function stepFromData(

  eNameGet,
  eLastNameGet,
  eEmailGet,
  eCellGet,
  eAddressGet,
  eCommentsGet,
  eRegisterationDateGet,
  eGenderGet,
  eCityGet,
  eStateGet,
  eCountryGet,
  matricGet,
  enterGet,
  graduateGet,
  
) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_ENAME',
      payload: eNameGet
    })
    dispatch({
      type: 'CHANGE_ELASTNAME',
      payload: eLastNameGet
    })
    dispatch({
      type: 'CHANGE_EEMAIL',
      payload: eEmailGet
    })
    dispatch({
      type: 'CHANGE_ECELL',
      payload: eCellGet
    })
    dispatch({
      type: 'CHANGE_EADDRESS',
      payload: eAddressGet
    })
    dispatch({
      type: 'CHANGE_ECOMMENTS',
      payload: eCommentsGet
    })
    dispatch({
      type: 'CHANGE_EREGISTERATIONDATE',
      payload: eRegisterationDateGet
    })
    dispatch({
      type: 'CHANGE_EGENDER',
      payload: eGenderGet
    })
    dispatch({
      type: 'CHANGE_ECITY',
      payload: eCityGet
    })
    dispatch({
      type: 'CHANGE_ESTATE',
      payload: eStateGet
    })
    dispatch({
      type: 'CHANGE_ECOUNTRY',
      payload: eCountryGet
    })
    dispatch({
      type: 'CHANGE_MATRIC',
      payload: matricGet
    })
    dispatch({
      type: 'CHANGE_ENTER',
      payload: enterGet
    })
    dispatch({
      type: 'CHANGE_GRADUATE',
      payload: graduateGet
    })
  }
}

export function incrementMethod(count) {
  return {
    type: 'INCREMENT',
    payload: count
  }
}


// export function incrementMethod(count) {
//   return dispatch => {
//     dispatch({
//       type: 'INCREMENT',
//       payload: count + 1
//     })
//   }
// }