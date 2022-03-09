import { useEffect, useState } from "react";
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
        <BoxLayout>
            {clinic?.clinic.slice(0, 3).map(el => (
                <Box key={el._id}>
                    <h2>{el.Name}</h2>
                    <div>Total Doctors: {el.totalDoctor.length}</div>
                </Box>
            ))}
        </BoxLayout>
        <BoxLayout>
            {clinic?.clinic.slice(3).map(el => (
                <Box key={el._id}>
                    <h2>{el.Name}</h2>
                    <div>Total Doctors: {el.totalDoctor.length}</div>
                </Box>
            ))}
        </BoxLayout>
    </Div>
}

const Div = styled.div`
    padding-top: 120px;
`;
const BoxLayout = styled.div`
    display:flex;
    width: 90%;
    margin: 1% auto;
    height: 200px;
`;
const Box = styled.div`
border:1px solid black;
    margin: auto;
    width: 31%;
    height: 200px;
`;
