import * as actions from '../actions/index'
import * as types from '../constants'
import { put, takeEvery } from 'redux-saga/effects'
import callApi from '../fetchAPIs/callAPI'
function* getItem() {
    try {
        const res = yield callApi('GET', '')
        yield put(actions.getItemSuccess(res))
       
    } catch (error) {
        yield put(actions.getItemFailure(error))
    }
}
function* addItem(data) {
    try {
        console.log(data, 'hoan');
        const res = yield callApi('POST', '', data.payload)
        if (res.messsages === 'l') {
            alert('khong co quyen truy cap ')
        }
        yield put(actions.addItemSuccess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.addItemFailure(error))
    }
}
function* deleteItem(data) {
    try {
        const res = yield callApi('DELETE', `${data.payload.id}`)
        if (res.messsages === 'l') {
            alert('khong co quyen truy cap ')
        }
        yield put(actions.deleteItemSuccess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.deleteItemFailure(error))
    }
}
function* updateItem(data) {
    try {
        console.log(data,'hh');
        const res = yield callApi('PUT', `${data.payload.id}`, { name: data.payload.nameUpdate })
        if (res.messsages === 'l') {
            alert('khong co quyen truy cap ')
        }
        yield put(actions.updateItemSuccess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.updateItemFailure(error))
    }
}

function* searchItem(data) {
    try {
        const res = yield callApi('GET', `search/?textSearch=${data.payload.nameSearch}`)
        yield put(actions.searchItemSuccess({
            res: res.listStudent,
            nameSearch: data.payload.nameSearch
        }))
    } catch (error) {
        yield put(actions.searchItemFailure(error))

    }
}

function* signUp(data) {
    try {
       const res= yield callApi('POST', 'signup', data.payload)
        if (res.message === 'error') {
            alert('ten tai khoan da ton tai')
            yield put(actions.signUpFailure(res.message))
        }
        else {
            yield put(actions.signUpSuccess())
            yield alert('dang ki thanh cong')
            window.location="http://localhost:3000/"
        }
    } catch (error) {
        yield put(actions.signUpFailure(error))
        alert('dang ki khong thanh cong ')
    }
}

function* login(data) {
    try {
        const res = yield callApi('POST', 'login', data.payload)
        if (res.message === 'failure') {
            
            yield put(actions.loginFailure(res.message))
            alert('dang nhap khong thanh cong')
        }
        else {
            const token = res.token
            yield localStorage.setItem('token', token)
            yield localStorage.setItem('role', res.role)
            yield put(actions.loginSuccess({ token }))
            window.location.reload()

        }

    } catch (error) {
        yield put(actions.loginFailure(error))
    }
}

export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getItem),
    takeEvery(types.ADD_ITEM_REQUEST, addItem),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateItem),
    takeEvery(types.DELETE_ITEM_REQUEST, deleteItem),
    takeEvery(types.SEARCH_ITEM_REQUEST, searchItem),
    takeEvery(types.SIGNUP_REQUEST, signUp),
    takeEvery(types.LOGIN_REQUEST, login)
] 