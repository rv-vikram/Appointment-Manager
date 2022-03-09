import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Home() {
    const [clinic, setClinic] = useState();

    useEffect(() => {
        async function getData() {
            const res = await fetch("http://localhost:5000/clinic/");
            setClinic(await res.json());
            console.log(clinic.clinic[0].totalDoctor);
        }
        getData();
    }, [])

    return <Div>
        <div>
            <div>
                <div>
                    <div>
                        <h1>Welcome to Appointment Dashboard.</h1>
                        <p>Find Doctor anywhere, anytime so to ease you find best doctor nearby you with ease!</p>
                        <Button><Link to="/appointment">Book a Appointment</Link></Button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <p>Clinics in your areas</p>

                <BoxLayout>
                    {clinic?.clinic.slice(0, 3).map(el => (
                        <Box key={el._id}>
                            <h2>{el.Name}</h2><hr />
                            <div>Total Doctors: {el.totalDoctor.length}</div>

                        </Box>
                    ))}
                </BoxLayout>
                <BoxLayout>
                    {clinic?.clinic.slice(3).map(el => (
                        <Box key={el._id}>
                            <h2>{el.Name}</h2><hr />
                            <div>Total Doctors: {el.totalDoctor.length}</div>
                        </Box>
                    ))}
                </BoxLayout>
            </div>
        </div>
        <Footer>Made with &#10084; by Rv </Footer>
    </Div>
}

const Div = styled.div`
    padding-top: 100px;
    &>div:nth-child(1){
        width:100%;
        height:100vh;
        /* height: 100vh; */
        background-image: url("413051.jpg");
        background-size: cover;

    }
    &>div:nth-child(1)>div{
    text-align:left;

        width:40%;
        padding: 5%;
    }
    &>div:nth-child(1)>div>div{
        height: 500px;

        box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);

        background-color: #ffffff65;
        color:black
    }
    &>div:nth-child(1)>div>div>div{
        padding: 5%;
    }
    &>div:nth-child(1)>div>div>div>p{
        font-size: 20px;
        margin-left: 3%;
        width: 70%;
    }
    &>div:nth-child(2){
        background-color: #ebebeb;

    }
    &>div:nth-child(2)>div{
        padding: 4%;
    }
    &>div:nth-child(2)>div>p{
        font-size: 30px;
    }
    
`;

const Button = styled.button`
    padding: 20px 50px;
    font-size: 20px;
    margin-left: 3%;
    border-radius: 4px;
    background-color: green;
    color: white;
    transition: all .2s ease;
    cursor: pointer;
    &:hover{
        background-color: #016401;
    }
`;
const BoxLayout = styled.div`
    display:flex;
    width: 90%;
    margin: 1% auto;
    height: 200px;
`;
const Box = styled.div`
background-color: white;
    margin: auto;
    width: 31%;
    height: 200px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
`;

const Footer = styled.footer`
padding:1%;
    background-color: black;
    color: white;
`;