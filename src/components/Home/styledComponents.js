import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #25262c;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  background-color: #1b1c22;
  height: 80vh;
  padding: 15px;
`

export const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`

export const LeftHeading = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: #f8fafc;
`

export const LeftImage = styled.img`
  height: 70%;
`

export const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #25262c;
  border-radius: 10px;
  border: 2px solid #334155;
`

export const ToolsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

export const ToolsItem = styled.li`
  list-style-type: none;
  display: flex;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  color: ${props => props.colorText};
`

export const TextArea = styled.textarea`
  height: 100%;
  background-color: #25262c;
  border: none;
  border-top: 2px solid #334155;
  width: 100%;
  outline: none;
  font-size: 20px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  color: #f8fafc;
  padding: 20px;
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`
