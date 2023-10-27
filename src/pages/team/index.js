import React from 'react';
import MainLayout from "../layout/MainLayout";
import DataDisplay from "../../components/team/DataDisplay";
import styled from "styled-components";


export default function Team() {
      return (
        <MainLayout>
            <TeamContainer>
                <TeamBox>
                    <DataDisplay />
                </TeamBox>
            </TeamContainer>
        </MainLayout>
      );
}

export const TeamContainer = styled.div`
  width: 95%;
  height: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: 0.3fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;/* 각 행(세로줄)의 길이 */
  gap: 10px;
`

export const TeamBox = styled.div`
  background: #202030;
  width: 100%;
  height: 100%;
  font-size: 20px;
  border: 1px solid #202030;
  text-align: center;
  border-radius: 10px;
  &:nth-child(1){
    grid-row:1/ span 2;
  }
  &:nth-child(2){
    grid-row:1/ span 2;
  }
`