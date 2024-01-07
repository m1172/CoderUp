import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  z-index: 999;
`;
export const Wrappper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 10px;
`;

export const Form = styled.form`
  background-color: white;
  padding: 25px 60px;
  border-radius: 20px;

  @media (max-width: 400px) {
    padding: 25px 30px;
  }
  @media (max-width: 500px) {
    padding: 25px 40px;
  }
`;

export const Title = styled.h1`
  color: rgb(77, 1, 77);
  text-align: center;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;

  @media (max-width: 400px) {
    height: 40px;
    font-size: 17px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  color: black;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
export const Span = styled.span`
  font-size: 13px;
  color: red;
  display: none;
  margin-left: 3px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const WrongSpan = styled.span`
  font-size: 13px;
  color: red;
  width: 200px;

  margin-left: 3px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
