import React from "react";
import { Button } from "reactstrap";


function ResultFormItem(props) {
  let { listAccount, editAccount ,deleteAccount } = props; 

  // khai bao item hien thi du lieu
  let items= "";

  // kiem tra neu listAccount !="" se hien thi du lieu
  if (listAccount){
    items = listAccount.map((account, index)=>{
      return (
        <tr key={index}>
          <td>{account.id}</td>
          <td>{account.email}</td>
          <td>{account.username}</td>
          <td>{account.fullname}</td>
          <td>{account.department}</td>
          <td>{account.position}</td>
          <td>{account.createDate}</td>
          <td>
            <Button color="warning" onClick={()=> {
              editAccount(account)
            }} >Edit</Button>
          </td>
          <td>
            <Button color="warning" onClick={() => {
              deleteAccount(account.id)
            }}>Delete</Button>
          </td>
        </tr>
      )
    })
   
  }

  return items
  
}

export default ResultFormItem;


