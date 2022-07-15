import styled from 'styled-components';

export const ContactsListUl = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

export const ContacItemtLi = styled.li`
  display: inline-flex;
  justify-content: space-between;
  :not(:first-child) {
    margin-top: 15px;
  }
`;
