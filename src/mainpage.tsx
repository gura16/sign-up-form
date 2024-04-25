import styled from "styled-components";
import bgImage from "./assets/bg-intro-mobile.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Error_img from "./assets/icon-error.svg";

function Mainpage() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Maincontainer>
        <Titelcard>
          <Titel1>Learn to code by watching others</Titel1>
          <Titel2>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </Titel2>
        </Titelcard>
        <Maincard>
          <Pricecard>
            <Span1>Try it free 7 days then </Span1>
            <Span2> $20/mo. thereafter</Span2>
          </Pricecard>
          <Inputcard>
            <form>
              <Inputdiv>
                <Input
                  onFocus={() => console.log("focused")}
                  onBlur={() => console.log("blur")}
                  type="text"
                  placeholder="First Name"
                />
                <Error_text>First Name cannot be empty</Error_text>
              </Inputdiv>
              <Inputdiv>
                <Input
                  onFocus={() => console.log("focused")}
                  onBlur={() => console.log("blur")}
                  type="text"
                  placeholder="Last Name"
                />
                <Error_text>Last Name cannot be empty</Error_text>
              </Inputdiv>
              <Inputdiv>
                <Input
                  onFocus={() => console.log("focused")}
                  onBlur={() => console.log("blur")}
                  type="text"
                  placeholder="Email Address"
                />
                <Error_text>Looks like this is not an email</Error_text>
              </Inputdiv>
              <Inputdiv>
                <Input
                  onFocus={() => console.log("focused")}
                  onBlur={() => console.log("blur")}
                  type="password"
                  placeholder="Password"
                />
                <Error_text>Password cannot be empty</Error_text>
              </Inputdiv>
              <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
            </form>
            <Services>
              By clicking the button, you are agreeing to our
              <Span3>Terms and Services</Span3>
            </Services>
          </Inputcard>
        </Maincard>
      </Maincontainer>
    </>
  );
}

export default Mainpage;

const Maincontainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ff7979;
  background-image: url(${bgImage});
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Titelcard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
`;
const Titel1 = styled.p`
  width: 327px;
  height: 80px;
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.2916666865348816px;
  text-align: center;
  color: white;
`;
const Titel2 = styled.p`
  width: 267px;
  height: 130px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  color: white;
`;

const Maincard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Pricecard = styled.div`
  width: 327px;
  height: 88px;
  border-radius: 10px;
  background-color: #5e54a4;
  box-shadow: 0px 8px 0px 0px #00000025;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Span1 = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.2678571045398712px;
  text-align: center;
  color: white;
`;

const Span2 = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.2678571045398712px;
  text-align: center;
  color: white;
`;

const Inputcard = styled.div`
  width: 327px;
  height: 442px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 8px 0px 0px #00000025;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 18px;
  padding-top: 20px;
`;

const Inputdiv = styled.div``;

const Error_text = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: italic;
  font-weight: 500;
  line-height: 16.5px;
  text-align: right;
  color: #ff7979;
`;
const Input = styled.input`
  background-image: url(${Error_img});
  background-repeat: no-repeat;
  background-position: 95%;
  background-size: 24px;
  width: 279px;
  height: 56px;
  border: 2px solid #dedede;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.25px;
  text-align: left;
  outline: none;
  border-radius: 10px;
  opacity: 75%;
  color: #3d3b48;
  padding: 0px 50px 0px 10px;
`;

const Button = styled.button`
  width: 279px;
  height: 56px;
  background-color: #38cc8b;
  box-shadow: 0px -4px 0px 0px #00000017 inset;
  border-radius: 10px;
  border: none;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
`;

const Services = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #bab7d4;
  width: 249px;
  height: 42px;
`;

const Span3 = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  color: #ed7171;
`;
