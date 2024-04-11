import React from "react";
import { Container, Button } from "reactstrap"

function CreateButton(props) {
    
    // gọi props
    let { onHandleCreacteButton } = props;

    // hàm xử lý khi click vào nút Creacte New Button
    let HandleCreateNewAccount = () => {
        onHandleCreacteButton();
    };

    return (
        <Container>
            <br />
            <Button color="primary" onClick={HandleCreateNewAccount}>
                Create New Account
            </Button>
        </Container>
    )
}

export default CreateButton;