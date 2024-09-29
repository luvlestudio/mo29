import React, { useState } from "react";
import SectionType2 from "../common/sectionType2";
import styled from "styled-components";
import * as CSTM from "../../custom/custom";
import { 은행계좌색깔 as COLOR } from "../../custom/color";

const Header = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #242424;
  margin-bottom: 6%;
`;

const AccordionButton = styled.button`
  background-color: ${COLOR.계좌번호버튼_색깔};
  color: black;
  cursor: pointer;
  padding: 0.8rem;
  width: 100%;
  transition: 0.4s;
  margin: 1rem 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  position: relative;
`;

const PaddingWrapper = styled.div`
  padding: 40px 30px 20px 30px;
`;

const panel1Height = CSTM.신랑혼주계좌번호리스트.length * 45 + 45;
const panel2Height = CSTM.신부혼주계좌번호리스트.length * 45 + 45;

/**
 * 신랑
 */
const ArrowIcon1 = styled.img`
  width: 13px;
  height: 10px;
  position: absolute;
  right: 2rem;
  transition: transform 0.5s ease;
  transform: ${({ $isOpen1 }) =>
    $isOpen1 ? "rotate(180deg)" : "rotate(0deg)"};
`;

const Panel1 = styled.div`
  overflow: hidden;
  line-height: 2;
  transition: 0.5s ease-out;
  height: ${({ $isOpen1 }) => ($isOpen1 ? panel1Height + "px" : "0")};
  display: flex;
  justify-content: center;
  padding: ${({ $isOpen1 }) => ($isOpen1 ? "17px" : "0")};
  font-size: 15px;
`;

/**
 * 신부
 */
const ArrowIcon2 = styled.img`
  width: 13px;
  height: 10px;
  position: absolute;
  right: 2rem;
  transition: transform 0.5s ease;
  transform: ${({ $isOpen2 }) =>
    $isOpen2 ? "rotate(180deg)" : "rotate(0deg)"};
`;

const Panel2 = styled.div`
  overflow: hidden;
  line-height: 2;
  transition: 0.5s ease-out;
  height: ${({ $isOpen2 }) => ($isOpen2 ? panel2Height + "px" : "0")};
  display: flex;
  justify-content: center;
  padding: ${({ $isOpen2 }) => ($isOpen2 ? "17px" : "0")};
  font-size: 15px;
`;

function BankAccount() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <SectionType2>
      <PaddingWrapper>
        <Header>마음 전하실 곳</Header>
        <AccordionButton onClick={toggleAccordion1}>
          신랑 측 계좌번호
          <ArrowIcon1
            src={`${process.env.PUBLIC_URL}/imgs/화살표/arrow.png`}
            $isOpen1={isOpen1}
          />
        </AccordionButton>
        <Panel1 $isOpen1={isOpen1}>
          <ul>
            <li>
              <strong>신랑 {CSTM.신랑계좌번호.이름} : </strong>
              {CSTM.신랑계좌번호.은행} {CSTM.신랑계좌번호.계좌번호}
            </li>
            {CSTM.신랑혼주계좌번호리스트.map((계좌, index) => (
              <li key={index}>
                <strong>혼주 {계좌.이름} : </strong>
                {계좌.은행} {계좌.계좌번호}
              </li>
            ))}
          </ul>
        </Panel1>
        <AccordionButton onClick={toggleAccordion2}>
          신부 측 계좌번호
          <ArrowIcon2
            src={`${process.env.PUBLIC_URL}/imgs/화살표/arrow.png`}
            $isOpen2={isOpen2}
          />
        </AccordionButton>
        <Panel2 $isOpen2={isOpen2}>
          <ul>
            <li>
              <strong>신부 {CSTM.신부계좌번호.이름} : </strong>
              {CSTM.신부계좌번호.은행} {CSTM.신부계좌번호.계좌번호}
            </li>
            {CSTM.신부혼주계좌번호리스트.map((계좌, index) => (
              <li key={index}>
                <strong>혼주 {계좌.이름} : </strong>
                {계좌.은행} {계좌.계좌번호}
              </li>
            ))}
          </ul>
        </Panel2>
      </PaddingWrapper>
    </SectionType2>
  );
}

export default BankAccount;
