export function getNowDate() {
    let date = new Date();
    let currentDay = date.getDate();
    let currentmonth = date.getMonth() + 1;
    var currentYear = date.getFullYear();

    // trả về định dạng yyyy mm dd
    return currentYear+'-'+currentmonth+'-'+currentDay;
}