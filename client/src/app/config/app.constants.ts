
export const ERROR = {
    serviceError: 'Service is temporarily unavailable. Please try after sometime.'
}

export const APIURL = {
    login: 'http://localhost:4000/api/user/login',
    register: 'http://localhost:4000/api/user/register',
    /****************************************************/
    materialRegister: 'http://localhost:4000/api/material/register',
    retrieveMaterial: 'http://localhost:4000/api/material/',
    materialList: 'http://localhost:4000/api/material/list',
    materialShip: 'http://localhost:4000/api/material/ship',
    /*****************************************************/
    productRegister: 'http://localhost:4000/api/product/register',
    retrieveProduct: 'http://localhost:4000/api/product/',
    productList: 'http://localhost:4000/api/product/list',
    productShip: 'http://localhost:4000/api/product/list',
    /*******************************************************/
    upload: 'http://localhost:4000/api/upload'
}

export const DROPDOWNCONSTANT = {
    ddSettings: {
        buttonClasses: 'btn btn-default btn-secondary dropdown-btn',
        dynamicTitleMaxItems: 0,
        maxHeight: '120px'
    }
}


export const DATEPICKERCONST = {
    currDate: new Date(),
    options : {
        dateFormat: 'dd/mm/yyyy',
        editableDateField: false,
        disableSince: { year: (new Date()).getFullYear(), month: (new Date()).getMonth() + 1, day: (new Date()).getDate() + 1 }
    }
}