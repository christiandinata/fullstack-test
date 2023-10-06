import styled from '@emotion/styled'

export interface MenuProps {
  menuClicked: boolean;
}

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  /* padding: 0 32px 0 32px; */
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 1px 2px 0px #1018280D;
  background-color: #fff;
  border-bottom:1px solid #f2f4f7;

  @media (max-width: 480px){
    height: 72px;
  }
`

export const HeaderContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  /* margin: 0 80px; */

  @media (max-width: 480px){
    padding: 0 12px 0 16px;
  }
`

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;s
`

export const Text = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  margin-left: 8px;
`
  
export const LoginButton = styled.div`
  display: flex;
  padding: 10px 18px 10px 18px;
  background-color: #dd2590;
  color: white;
  border: 1px solid #dd2590;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  margin: 0 12px;
  cursor: pointer;

  @media (max-width: 480px){
    display: none;
  }
`

export const LoginButton2 = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 18px 10px 18px;
  background-color: #dd2590;
  color: white;
  border: 1px solid #dd2590;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  margin: 0 12px;
  cursor: pointer;
`

export const NavMenu = styled.div`
  display: none;
  padding: 8px;
  border-radius: 8px;
  gap: 8px;
  cursor: pointer;

  @media (max-width: 480px){
    display: flex;
  }
`

export const StyledLoggedInMenu = styled.div<MenuProps>`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 360px;
  border: 1px solid #D0D5DD;
  padding: 8px 16px;
  gap: 16px;
  margin: 0 12px;
  color: #D0D5DD;
  transition: 0.2s ease-in;
  background-color: ${({menuClicked}) => menuClicked ? "#f2f4f7" : "#fff"};

  &:hover{
    cursor: pointer;
    background-color: #f2f4f7;
  }

  @media (max-width: 480px){
    position: static;
    display: ${({menuClicked}) => menuClicked ? "none" : "flex"};
  }

  @media (max-width: 360px){
    
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
`

export const XIcon = styled.div`
  display: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;

  @media (max-width: 480px){
    display: flex;
  }
`

export const DropdownMenu = styled.div`
  display: flex;
  color: #000;
  flex-direction: column;
  /* margin-right: 72px; */
  right: 8px;
  transform: translateY(70%);
  position: absolute;
  padding: 8px 0;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #f2f4f7;
  /* z-index: 10; */

  @media (max-width: 480px){
    display: none;
  }
`

export const DropdownMenu2 = styled.div`
  display: none;
  color: #000;
  flex-direction: column;
  /* margin-right: 72px; */
  transform: translateY(0);
  right: 0;
  height: 100vh;
  width: 100vw;
  top: 72px;
  position: absolute;
  padding: 8px 0;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #f2f4f7;
  /* z-index: 10; */

  @media (max-width: 480px){
    display: flex;
  }
`

export const DropdownHeader = styled.div`
  display: flex;
  width: 240px;
  justify-content: flex-start;
  padding: 12px 16px;
`

export const NotLoggedInContainer = styled.div`
  display: flex;
  padding: 24px 16px;
`

export const AvatarLabelGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
`
export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const LabelName = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

`
export const LabelEmail = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

`
export const DropdownItems = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 480px){
    padding: 24px 0;
    gap: 8px;
  }
`
export const DropdownItem = styled.div`
  display: flex;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`

export const Divider = styled.div`
  height: 1px;
  color: #f2f4f7;
  background-color: #f2f4f7;
`