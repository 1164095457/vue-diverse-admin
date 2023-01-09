import service from '@/utils/service.js'

export const routerList = (data) =>{
    return service({
        method:'GET',
        url:'/api/router/list'
    })
}

export const pageLogin = (data) =>{
    return service({
        method:'GET',
        url:'/api/login'
    })
}
