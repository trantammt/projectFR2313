import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import { addAccountNewAPI, getListAccountAPI } from "../API/AcoountAPI";
import { getListDepartmentAPI } from "../API/DepartmentAPI";

function  AccountContainer(props) {
    let [showForm, setShowForm] = useState(false);
    let [listAccount, setListAccount] = useState([]);
    let [listDepartment, setListDepartment] = useState([]);
    let [edittingModel, setEdittingModel] = useState([]);

    // Hàm callback xử lý khi nhấn nút Create New Account
    let onHandleCreacteButton = () => { 
        setShowForm(true);
        setEdittingModel({});
    };

    // Hàm callback xử lý khi nhấn nút Close
    let onHandleCloseModal = () => {
        setShowForm(false);
    };

    // hàm callback xử lý khi ấn nút create ở inputForm
    let onHandleCreateNewAccount = (accountNew) => {
        console.log("accountNew: ", accountNew);
        // Chuyển accountNew về Account cần thêm mới API
        let accountNew_API = {
          email: accountNew.email,
          username: accountNew.username,
          fullname: accountNew.fullname,
          departmentId: accountNew.department,
          positionId: accountNew.position,
        };
        addAccountNewAPI(accountNew_API).then((response) => {
          // Sau khi tạo dữ liệu thành công gọi hàm để load lại listAccount
          loadAccount();
        });
       
        // Thực hiện đóng Form sau khi thêm mới
        setShowForm(false);
      };
    

    //  Hàm sửa value nhap vao form
    const editAccount = (account) => {
        console.log(account);
        setEdittingModel(account);
        setShowForm(true);
    };


    const deleteAccount = (id) => {
      
    }

    // Ham render ListAccount
    const loadAccount = () => { 
        getListAccountAPI().then((response)=>{
            setListAccount(response);
        })
        // const baseUrl =`https://65f04eecda8c6584131b65b0.mockapi.io/`
        // Axios.get( `${baseUrl}listAccount`)
        //     .then((response) => {
        //         let listAccounts = response.data;
        //         setListAccount(listAccounts);
        //     })
        //     .catch((error) => {console.log(error);});
    }

    const loadDepartment = () => {
        getListDepartmentAPI().then((response) => {
            setListDepartment(response);
        })
    };
    

    // khai báo useEffect mỗi khi component dược mount và state listAccount thay đổi
    useEffect(() => {
        loadAccount()
        loadDepartment()
    },[]);



    return (
        <Container>
            <CreateButton onHandleCreacteButton={onHandleCreacteButton}/>
            <ModalCreateNewAccount 
                showForm={showForm}
                onHandleCloseModal={onHandleCloseModal}
                onHandleCreateNewAccount={onHandleCreateNewAccount}
                model={edittingModel}
                listDepartment={listDepartment}
            />
            <ResultForm 
                listAccount={listAccount}
                deleteAccount={deleteAccount}
                editAccount ={editAccount}
            />
        </Container>
    )
}

export default AccountContainer;