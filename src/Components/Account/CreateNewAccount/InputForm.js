import React, { useEffect, useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { generateId } from "../../../Utils/Helpers/GenerateId";
import { getNowDate } from "../../../Utils/Helpers/GetNowDate";

function InputForm(props) {
    let { onHandleCreateNewAccount, listDepartment, dataModel } = props;
    console.log(listDepartment);
    
    let [Email, setEmail] = useState("");
    let [Username, setUsername] = useState("");
    let [Fullname, setFullname] = useState("");
    let [Department, setDepartment] = useState("");
    let [Position, setPosition] = useState("");

    // hàm xử lý khi click vao nút create
    let handleCreate = () => {
        let accountNew = {
            id: generateId(),
            email: Email,
            username: Username,
            fullname: Fullname,
            department: Department,
            position: Position,
            createDate: getNowDate(),
        }
        console.log("accountNew: ",accountNew);
        // truyen account can tạo về AccountContainer
        onHandleCreateNewAccount(accountNew);
    }

    // hàm xử lý khi click vào nút resert
    let handleReset = ()=> {
        setEmail("");
        setUsername("");
        setFullname("");
    }

    // ham xu ly danh sach department
    let departmentItem = listDepartment.map((department, index) => {
        return (
          <option value={department.id} key={index}>
            {listDepartment.name}
          </option>
        );
      });     

    // hàm xử lý update sau khi edit
    const handleUpdate = ()=> {
        console.log("update");
    }

    useEffect(() => {
        setEmail(dataModel.email);
        setUsername(dataModel.username);
        setFullname(dataModel.fullname);
        setDepartment(dataModel.department);
        setPosition(dataModel.position);
    }, [])

    return (
        <Container>
            <Form>
                {/* Email */}
                <FormGroup>
                    <Label for="Email">Email: </Label>
                    <Input
                        id="Email"
                        name="Email"
                        placeholder="Input Email"
                        type="Email"
                        value={Email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                    />
                </FormGroup>

                {/* User name */}
                <FormGroup>
                    <Label for="Username">Username: </Label>
                    <Input
                        id="Username"
                        name="Username"
                        placeholder="Input Username"
                        type="Username"
                        value={Username}
                        onChange={(e)=>{
                            setUsername(e.target.value);
                        }}
                    />
                </FormGroup>

                {/* fullname */}
                <FormGroup>
                    <Label for="Fullname">Fullname: </Label>
                    <Input
                        id="Fullname"
                        name="Fullname"
                        placeholder="Input Fullname"
                        type="Fullname"
                        value={Fullname}
                        onChange={(e)=>{
                            setFullname(e.target.value);
                        }}
                    />
                </FormGroup>

                {/* Department */}
                <FormGroup>
                    <Label for="Department">Select a Department: </Label>
                    <Input 
                        id="Department" 
                        name="Department" 
                        type="select"
                        value={Department}
                        onChange={(e)=>{
                            setDepartment(e.target.value);
                        }}
                    >
                        {/* <option value={"Inter"}>Inter</option>
                        <option value={"Fesher"}>Fesher</option>
                        <option value={"Junior"}>Junior</option>
                        <option value={"Senior"}>Senior</option>
                        <option value={"Mentor"}>Mentor</option> */}
                        {departmentItem}
                    </Input>
                </FormGroup>

                {/* Postion */}
                <FormGroup>
                    <Label for="Position">Select a Position: </Label>
                    <Input 
                        id="Position" 
                        name="Position" 
                        type="select"
                        value={Position}
                        onChange={(e)=>{
                            setPosition(e.target.value);
                        }}
                    >
                        <option value={"Dev"}>Dev</option>
                        <option value={"Test"}>Test</option>
                        <option value={"PM"}>PM</option>
                        <option value={"Scrum_Mater"}>Scrum Mater</option>
                    </Input>
                </FormGroup>
            </Form>

            {/* button */}
            <Button id="create" color="primary" onClick={handleCreate}>Create</Button>
            <Button color="danger" onClick={handleReset}>Reset</Button>
            <Button id="update" color="primary" style={{display:"none"}} onClick={handleUpdate}>Update</Button>

        </Container>
    )
}

export default InputForm;