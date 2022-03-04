import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import styled from "styled-components";

const options = [
  { value: "template1", label: "template1", id: "0" },
  { value: "template2", label: "template2", id: "1" },
  { value: "template3", label: "template3", id: "2" },
];

function Template() {
  const history = useHistory();
  const [template, setTemplate] = useState(0);
  const handleChange = (e) => {
    setTemplate(e.id);
  };

  const handleClick = (e) => {
    history.push("/write/stack");
  };

  useEffect(() => {
    return console.log("axios 템플릿 건네주기");
  }, []);

  return (
    <>
      <BottomNav>
        <button onClick={handleClick}>템플릿 선택</button>
      </BottomNav>
    </>
  );
}

const BottomNav = styled.div`
  position: absolute;
  width: 1440px;
  height: 100px;
  left: 0px;
  top: 956px;
  background: #999999;
`;

export default Template;
