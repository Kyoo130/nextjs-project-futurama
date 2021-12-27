import styled from "@emotion/styled";
import { Cast } from "../types/Cast";

interface CastProps {
  castData: Cast;
}

export const CastCard = ({ castData }: CastProps ) => {
  const {name, born, died, bio} = castData;

  return (
      <CastCont>
        <div></div>
        <h3>{name}</h3>
        <p>{born}</p>
        <CastMore href={bio.url}>더보기</CastMore>
      </CastCont>
  )
};


const CastCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53); 
`

const CastMore = styled.a`
  height: 20px;
  width: 240px;
  text-align: center;
  background-color: #2689B2;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 15px;
`