import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 455px;

  margin-top: 20px;
  gap: 12px;
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 100%;
  gap: 12px;
  padding: 20px;

  background-color: white;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Signal = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
