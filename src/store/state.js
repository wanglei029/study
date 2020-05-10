let defaultCity = '上海'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (error) {
    throw Error(error)
}
export default {
    // city:localStorage.city||'上海',
    city: defaultCity //使用try 之后的defaultCity
}