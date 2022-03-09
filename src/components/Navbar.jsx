import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {

    return (
        <Div>
            <div><img src="main.png" alt="mainLogo" /></div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/appointment">Book an Appointment</Link>
                <Link to="/doctor">Find a Doctor</Link>
            </div>
        </Div>
    )
}

const Div = styled.div`
    position:fixed;
    background-color:black;
    width: 100%;
    height: 100px;
    display:flex;
    color: white;
    &>div{
        width: 100%;
    }
    & img{
        padding-left: 20px;
        height:100%;
    }
    &>div:nth-child(1){
        text-align:left;
    }
    &>div:nth-child(2){
        width: 50%;
        display:flex;
        align-items:center;
        justify-content: space-around;
    }
    &>div:nth-child(2)>div{
        cursor: pointer;
    }
`;