/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import type { NextPage } from "next";

const FuturamaPage: NextPage = () => {
  return (
    <FuturamaCont>
      <FuturamaH2>FUTURAMA</FuturamaH2>
      <FuturamaTit src="https://www.denofgeek.com/wp-content/uploads/2018/06/futurama_4.jpg?resize=768%2C432" alt="logo" />
      <FuturamaFooter>
        <p>Copyright &copy; </p>
      </FuturamaFooter>
    </FuturamaCont>
  )
}

export default FuturamaPage;

const FuturamaCont = styled.div`
  text-align: center;
`

const FuturamaH2 = styled.h2 `
  font-size: 2.5rem;
`

const FuturamaTit = styled.img`
  width: 60%;
  height: 60%;
  border-radius: 10px;
`

const FuturamaFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: lightgray;
`