import styled from 'styled-components';

const EditHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const EditTab = styled.div<{ isActive: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.color.main : theme.colorGray.blueGray300)};
  font-size: ${({ theme }) => theme.fontSize.body3};
  font-weight: ${({ isActive, theme }) =>
    isActive ? theme.fontWeight.bold : theme.fontWeight.medium};
  border-bottom: ${({ isActive, theme }) => (isActive ? `1px solid ${theme.color.main}` : 'none')};
  cursor: ${({ isActive }) => (isActive ? 'none' : 'pointer')};
`;

export default { EditHeaderWrapper, EditTab };
