import { useState } from "react";
import styled from "styled-components";

export function Doctor() {
    const [data, setData] = useState([]);

    return <Div>
        <fieldset>
            <legend>Search</legend>
            <label >Search for Doctors</label>
            <input type="text" />
            <input type="submit" value={"Search"} />
        </fieldset>
    </Div>
}

const Div = styled.div`
    padding-top: 120px;
`;