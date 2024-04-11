export function generateId() {
    let idStart = 0;
    // kiểm tra xem đã có dữ liệu trong LocalStogare chưa,
    // nếu có thì lấy gai trị id lớn nhất của listAccount để làm id bắt đầu
    if (localStorage && localStorage.getItem("listAccount")){
        let listAccount = JSON.parse(localStorage.getItem("listAccount"));

        listAccount.forEach((account) => {
            if (account.id > idStart){
                idStart = account.id;
            }
        });
    }
    let id = idStart + 1;
    return id;
}