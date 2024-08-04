import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  CardContainer,
  LeftContainer,
  LeftHeading,
  LeftImage,
  RightContainer,
  ToolsList,
  ToolsItem,
  Button,
  TextArea,
} from './styledComponents'

class Home extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'
    const bold = <VscBold size={25} />
    const italic = <GoItalic size={25} />
    const underline = <AiOutlineUnderline size={25} />
    return (
      <MainContainer>
        <CardContainer>
          <LeftContainer>
            <LeftHeading>Text Editor</LeftHeading>
            <LeftImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <ToolsList>
              <ToolsItem>
                <Button
                  data-testid="bold"
                  colorText={boldLogo}
                  onClick={this.onClickBold}
                >
                  {bold}
                </Button>
              </ToolsItem>
              <ToolsItem>
                <Button
                  data-testid="italic"
                  colorText={italicLogo}
                  onClick={this.onClickItalic}
                >
                  {italic}
                </Button>
              </ToolsItem>
              <ToolsItem>
                <Button
                  data-testid="underline"
                  colorText={underlineLogo}
                  onClick={this.onClickUnderline}
                >
                  {underline}
                </Button>
              </ToolsItem>
            </ToolsList>
            <TextArea
              isBold={isBold}
              isUnderline={isUnderline}
              isItalic={isItalic}
            />
          </RightContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default Home
