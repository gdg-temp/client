import styled from 'styled-components';

const EditHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 72px;
`;

const EditTab = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  color: ${({ theme, isActive }) => (isActive ? theme.color.main : theme.colorGray.blueGray300)};
  font-size: ${({ theme }) => theme.fontSize.body2};
  font-weight: ${({ isActive, theme }) =>
    isActive ? theme.fontWeight.bold : theme.fontWeight.medium};
  border-bottom: ${({ isActive, theme }) => (isActive ? `1px solid ${theme.color.main}` : 'none')};
  cursor: ${({ isActive }) => (isActive ? 'none' : 'pointer')};
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 258px;
`;

const TextWrapper = styled.div`
  margin-bottom: 12px;
`;

export default { EditHeaderWrapper, EditTab, CardWrapper, TextWrapper };
