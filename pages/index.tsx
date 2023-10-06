import type { NextPage } from 'next';
import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';
import { Header, HeaderContainer, Left, StyledLoggedInMenu, LoginButton, Menu, Text, MenuProps, DropdownMenu, DropdownHeader, AvatarLabelGroup, LabelGroup, LabelName, LabelEmail, DropdownItems, DropdownItem, Divider, NavMenu, XIcon, DropdownMenu2, NotLoggedInContainer, LoginButton2 } from './header.styles';
import { About, AboutDesc, AboutEmail, Heading, AboutInfo, AboutText, AboutVisitorCount, Content, Desc, SectionTitle, Profile, ProfileDesc, Repos, Username, Visitors, AvatarGroup, VisitorSection, RepoHeader, Badge, RepoCards, InnerDesc } from './content.styles';
import RepoCard from '@/components/RepoCard';
import { Footer, FooterContainer, FooterContent } from './footer.styles';
import {  useState } from 'react';

const Home: NextPage = () => {

  const [loggedIn, setLoggedIn] = useState(true);
  const [menuClicked, setMenuClicked] = useState(false);


  function handleClick(){
    setMenuClicked(!menuClicked)
  }

  const LoggedInMenu = ({ menuClicked }: MenuProps) => (
    <>
      <StyledLoggedInMenu menuClicked={menuClicked} onClick={handleClick}>
        <Image src="/loggedIn_avatar.png" alt="loggedIn-avatar" width="40" height="40"/>
        <Menu>
          <Image src="/menu.png" alt="menu" width="18" height="12" />
        </Menu>
        {/* when screen width > 360px */}
        {menuClicked && 
          <DropdownMenu>
            <DropdownHeader>
              <AvatarLabelGroup>
                <Image src="/loggedIn_avatar.png" alt='loggedIn_avatar' width="40" height="40"/>
                <LabelGroup>
                  <LabelName>
                    Rice Rice
                  </LabelName>
                  <LabelEmail>
                    rys@pixel8Labs.com
                  </LabelEmail>
                </LabelGroup>
              </AvatarLabelGroup>
            </DropdownHeader>
            <DropdownItems>
              <DropdownItem>
                View profile
              </DropdownItem>
              <Divider />
              <DropdownItem>
                Log out
              </DropdownItem>
            </DropdownItems>
          </DropdownMenu>
        }
      </StyledLoggedInMenu> 
      {/* when screen width <= 360px */}
      {menuClicked && 
        <DropdownMenu2>
          <DropdownHeader>
            <AvatarLabelGroup>
              <Image src="/loggedIn_avatar.png" alt='loggedIn_avatar' width="40" height="40"/>
              <LabelGroup>
                <LabelName>
                  Rice Rice
                </LabelName>
                <LabelEmail>
                  rys@pixel8Labs.com
                </LabelEmail>
              </LabelGroup>
            </AvatarLabelGroup>
          </DropdownHeader>
          <DropdownItems>
            <DropdownItem>
              View profile
            </DropdownItem>
            <Divider />
            <DropdownItem>
              Log out
            </DropdownItem>
          </DropdownItems>
        </DropdownMenu2>
      }
    </>
  )

  return (
    <>
      <Header>
        <HeaderContainer>
          <Left>
            <Image src="/logo.png" alt="logo" width="32" height="32"/>
            <Text>
              Simple.Repo
            </Text>
          </Left>

          {loggedIn ? 
            <>
              {/* status: logged in */}
              <LoggedInMenu menuClicked={menuClicked} />
              {menuClicked && 
                <XIcon onClick={handleClick}>
                  <Image src="/x.png" alt="x-icon" width="24" height="24" />
                </XIcon>
              }
            </>
          : 
            <>
              {/* status: not logged in */}
              {/* when screen width <= 480px */}
              {menuClicked ? 
              <>
                <XIcon onClick={handleClick}>
                  <Image src="/x.png" alt="x-icon" width="24" height="24" unoptimized/>
                </XIcon>
                <DropdownMenu2>
                  <NotLoggedInContainer>
                    <LoginButton2>
                      Login With Github
                    </LoginButton2>
                  </NotLoggedInContainer>
                </DropdownMenu2>
              </>
              :
              <>
                <NavMenu onClick={handleClick}>
                  <Image src="/menu.png" alt="menu" width={20} height={20} unoptimized/>
                </NavMenu>
              </> 

              }
              {/* when screen width > 480px */}
              <LoginButton>
                Login With Github
              </LoginButton>
            </>
          }
        </HeaderContainer>
      </Header>
      <Content>
        <ProfileDesc>
          <Profile>
            <Desc>
              <Image src="/profile_test_img.png" alt="profile_picture" width="160" height="160"/>
              <InnerDesc>
                <SectionTitle>
                  Pixel8labs
                </SectionTitle>
                <Username>
                  @pixel8Labs
                </Username>
              </InnerDesc>
            </Desc>
            <About>
              <Heading>
                About
              </Heading>
              <AboutDesc>
                <AboutText>
                  Web3 startup with a team from all over the world. 
                  Need help with smart contracts? Launching NFT collections? come with us!
                </AboutText>
                <AboutInfo>
                  <AboutEmail>
                    <Image src="/email.png" alt="email" width={20} height={20} unoptimized/>
                    <AboutText>gm@pixel8labs.com</AboutText>
                  </AboutEmail>
                  <AboutVisitorCount>
                    <Image src="/people.png" alt="people" width="20" height="20" unoptimized/>
                    <AboutText><b>821.320</b> profile visitor</AboutText> 
                  </AboutVisitorCount>
                </AboutInfo>
              </AboutDesc>
            </About>
          </Profile>
          <VisitorSection>
            <Visitors>
              <Heading>
                Latest Visitor
              </Heading>
              <AvatarGroup>
                <Image src="/Avatar1.png" alt="people" width="56" height="56"/>
                <Image src="/Avatar2.png" alt="people" width="56" height="56"/>
                <Image src="/Avatar3.png" alt="people" width="56" height="56"/>
              </AvatarGroup>
            </Visitors>
          </VisitorSection>
        </ProfileDesc>
        <Repos>
          <RepoHeader>
            <SectionTitle>Repository</SectionTitle>
            <Badge>6</Badge>
          </RepoHeader>
          <RepoCards>
            <RepoCard 
              repoName="pixel8Labs-api"
              repoType="public"
              repoDesc="Awesome Api from us for general development (all-at-once)"
              repoDotColor="#B42318"
              repoLang="Ruby"
              repoStatus="updated just now" />
            <RepoCard 
              repoName="pixel8Labs-api"
              repoType="public"
              repoDesc="Awesome Api from us for general development (all-at-once)"
              repoDotColor="#B42318"
              repoLang="Ruby"
              repoStatus="updated just now" />
            <RepoCard 
              repoName="pixel8Labs-api"
              repoType="public"
              repoDesc="Awesome Api from us for general development (all-at-once)"
              repoDotColor="#B42318"
              repoLang="Ruby"
              repoStatus="updated just now" />
            <RepoCard 
              repoName="pixel8Labs-api"
              repoType="public"
              repoDesc="Awesome Api from us for general development (all-at-once)"
              repoDotColor="#B42318"
              repoLang="Ruby"
              repoStatus="updated just now" />
            <RepoCard 
              repoName="pixel8Labs-api"
              repoType="public"
              repoDesc="Awesome Api from us for general development (all-at-once)"
              repoDotColor="#B42318"
              repoLang="Ruby"
              repoStatus="updated just now" />
            <RepoCard 
              repoName="pixel8Labs-api"
              repoType="public"
              repoDesc="Awesome Api from us for general development (all-at-once)"
              repoDotColor="#B42318"
              repoLang="Ruby"
              repoStatus="updated just now" />
          </RepoCards>
        </Repos>
      </Content>
      <Footer>
        <FooterContainer>
          <FooterContent>
          @ {new Date().getFullYear()} Pixel8Labs. All rights reserved.
          </FooterContent>
        </FooterContainer>

      </Footer>
    </>
  );
};

export default Home;