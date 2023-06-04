import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
export const BoxImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px 80px;

  border: 1px solid transparent;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  background-color: white;
  > p {
    font-weight: 500;
  }
  img {
    width: 150px;
    border-radius: 50%;
    margin-bottom: 30px;
    background-color: #bdb76b;
  }
`;
export const UserData = styled.p`
  margin-top: 20px;
  font-size: 26px;
  color: #808080;
`;
export const StateList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #c0c0c0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: #f5f5f5;
`;
export const StateItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-size: 26px;
  padding: 20px 40px;

  border-right: 1px solid #c0c0c0;
`;
export const Label = styled.span`
  font-size: 20px;
  color: #808080;
  margin-bottom: 8px;
`;
export const Quantity = styled.span`
  font-weight: 700;
`;
