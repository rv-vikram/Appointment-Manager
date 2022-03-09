import { useEffect, useState } from "react";
import styled from "styled-components";

export function Appointment() {
    const [department, setDepartment] = useState();
    const [step, setStep] = useState(1);

    useEffect(() => {
        async function getData() {
            const res = await fetch("http://localhost:5000/speciality/");
            setDepartment(await res.json());
            console.log(department.speciality);
        }
        getData();
    }, [])

    return <Div>
        <Fieldset>
            <legend>Select Department of Concern</legend>
            {step === 1 ? <div>
                <label>Department</label>
                <select name="department">
                    {department?.speciality.map(el => (
                        <option value={el.department}>{el.department}</option>
                    ))}
                </select>
                <button>Submit</button>
            </div> : null}
        </Fieldset>
    </Div>
}

const Div = styled.div`
    padding-top: 120px;
`;
const Fieldset = styled.fieldset`
    width: 60%;
    margin: auto;
`;

