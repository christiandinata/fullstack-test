import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import {useSession, signIn, signOut} from 'next-auth/react'
import Image from 'next/image';
import { Header, HeaderContainer, Left, StyledLoggedInMenu, LoginButton, Menu, Text, MenuProps, DropdownMenu, DropdownHeader, AvatarLabelGroup, LabelGroup, LabelName, LabelEmail, DropdownItems, DropdownItem, Divider, NavMenu, XIcon, DropdownMenu2, NotLoggedInContainer, LoginButton2 } from '../styles/header.styles';
import { About, AboutDesc, AboutEmail, Heading, AboutInfo, AboutText, AboutVisitorCount, Content, Desc, SectionTitle, Profile, ProfileDesc, Repos, Username, Visitors, AvatarGroup, VisitorSection, RepoHeader, Badge, RepoCards, InnerDesc, AboutFollows, Followers, FollowText, imageStyle } from '../styles/content.styles';
import RepoCard from '@/components/RepoCard';
import { Footer, FooterContainer, FooterContent } from '../styles/footer.styles';
import {  useEffect, useState } from 'react';
import axios from 'axios';
import colors from '../github.lang.color.json'
import Link from 'next/link';
import { child, get, ref, set } from "firebase/database";
import { database } from 'firebase.config';

interface User{
  avatar_url: string;
  name: string;
  email: string;
  bio: string;
  login: string;
  followers: number;
  following: number;
}

interface Repo{
  name: string;
  visibility: string;
  description: string;
  language: string;
  updated_at: string;
}

interface Colors {
  [key: string]: string;
}

interface LatestVisitor {
  login: string;
  avatar_url: string;
}

const colore: Colors = colors;

const HomePage: NextPage = () => {
  const router = useRouter();
  const username = router?.query?.username;
  const {data: session} = useSession();

  const [menuClicked, setMenuClicked] = useState(false);
  const [user, setUser] = useState({} as User)

  const [repos, setRepos] = useState<Repo[]>([])
  const [totalViews, setTotalViews] = useState(0);

  const [latestVisitor, setLatestVisitor] = useState<LatestVisitor[]>([])

  // get user
  useEffect(() => {
    if (!username) return;
    axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      }
    })
    .then(res => {
      if (res.status === 200){
        setUser(res.data)
      }
    }).catch(err => console.log(err))

    // get total profile views
    get(child(ref(database), `users/${username}/totalViews`)).then((snapshot) => {
      if (snapshot.exists()) {
        setTotalViews(snapshot.val()+1);
        set(ref(database, 'users/' + username + '/totalViews'),
          snapshot.val()+1
        );
      } else {
        set(ref(database, 'users/' + username + '/totalViews'),
          1
        );
        setTotalViews(1)
      }
    }).catch((error) => {
      console.error(error);
    });

  }, [username])

  // get 3 latest visitors
  useEffect(() => {
    if (session){
      if (session?.login !== username){
        get(child(ref(database), `users/${username}/lastVisitors`)).then((snapshot) => {
          if (snapshot.exists()) {
            const tempVisitors = snapshot.val();
            if (tempVisitors.includes(session?.login)){
              tempVisitors.splice(tempVisitors.indexOf(session?.login), 1);
            }
            if (tempVisitors.length >= 3){
              tempVisitors.pop();
            }
            tempVisitors.unshift(session?.login)
            set(ref(database, 'users/' + username + '/lastVisitors'),
              tempVisitors
            );
            const arr = tempVisitors.map(async (visitor: any) => {
              const res = await axios.get(`https://api.github.com/users/${visitor}`, {
                headers: {
                  'X-GitHub-Api-Version': '2022-11-28',
                }
              });
              return {login: visitor, avatar_url: res?.data?.avatar_url};
            })
            Promise.all(arr).then(results => {
              setLatestVisitor(results);
            });
          } else {
            set(ref(database, 'users/' + username + '/lastVisitors'),
              [session?.login]
            );
            axios.get(`https://api.github.com/users/${session?.login}`, {
              headers: {
                'X-GitHub-Api-Version': '2022-11-28',
              }
            }).then(res => {
              setLatestVisitor([{login: session?.login, avatar_url: res?.data?.avatar_url}]);
            })

          }
        }).catch((error) => {
          console.error(error);
        });
      }
    }else{
      get(child(ref(database), `users/${username}/lastVisitors`)).then((snapshot) => {
        if (snapshot.exists()) {
          const tempVisitors = snapshot.val();
          const arr = tempVisitors.map(async (visitor: any) => {
            const res = await axios.get(`https://api.github.com/users/${visitor}`, {
              headers: {
                'X-GitHub-Api-Version': '2022-11-28',
              }
            });
            return {login: visitor, avatar_url: res?.data?.avatar_url};
          })
          Promise.all(arr).then(results => {
            setLatestVisitor(results);
          });
        } else {
          // do nothing
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [session])
  
  // getRepos
  useEffect(() => {
    if (!username) return;
    axios.get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      }
    })
    .then(res => {
      if (res.status === 200){
        setRepos(res.data)
      }
    }).catch(err => console.log(err))
  }, [username])

  function timeAgo(date: string){
    const newDate = new Date(date);
    const now = new Date();

    const diffInSeconds = (now.getTime() - newDate.getTime()) / 1000;
    const diffInMinutes = diffInSeconds / 60; 
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours  / 24;

    if (diffInMinutes < 1) {
      return("updated just now");
    } else if (diffInMinutes < 60) {
      return(`updated ${Math.round(diffInMinutes)} minutes ago`);
    } else if (diffInHours < 24) {
      return(`updated ${Math.round(diffInHours)} hours ago`); 
    } else if (diffInDays < 2) {
      return("updated yesterday");
    } else if (diffInDays < 365) {
      const month = newDate.toLocaleString('default', { month: 'long' });
      const day = newDate.getDate();
      return(`updated on ${month.slice(0,3)} ${day}`); 
    } else {
      return(`updated ${Math.round(diffInDays/365)} years ago`);
    }
  }

  const formattedRepos = repos.map(repo => {
    const updatedAt = timeAgo(repo.updated_at);
    return {
      ...repo, 
      updated_at: updatedAt
    };
  });

  function handleClick(){
    setMenuClicked(!menuClicked)
  }

  function handleLogin(){
    signIn();
  }

  function handleLogout(){
    signOut();
  }

  const LoggedInMenu = ({ menuClicked }: MenuProps) => (
    <>
      <StyledLoggedInMenu menuClicked={menuClicked} onClick={handleClick}>
        <Image src={session?.user?.image!} alt="loggedIn-avatar" width="40" height="40" style={imageStyle}/>
        <Menu>
          <Image src="/menu.png" alt="menu" width="18" height="12" />
        </Menu>
        {/* when screen width > 360px */}
        {menuClicked && 
          <DropdownMenu>
            <DropdownHeader>
              <AvatarLabelGroup>
                <Image src={session?.user?.image!} alt='loggedIn_avatar' width="40" height="40" style={imageStyle}/>
                <LabelGroup>
                  <LabelName>
                    {session?.user?.name}
                  </LabelName>
                  <LabelEmail>
                    {session?.user?.email}
                  </LabelEmail>
                </LabelGroup>
              </AvatarLabelGroup>
            </DropdownHeader>
            <DropdownItems>
              <DropdownItem>
                View profile
              </DropdownItem>
              <Divider />
              <DropdownItem onClick={handleLogout}>
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
              <Image src={session?.user?.image!} alt='loggedIn_avatar' width="40" height="40" style={imageStyle}/>
              <LabelGroup>
                <LabelName>
                  {session?.user?.name}
                </LabelName>
                <LabelEmail>
                  {session?.user?.email}
                </LabelEmail>
              </LabelGroup>
            </AvatarLabelGroup>
          </DropdownHeader>
          <DropdownItems>
            <DropdownItem>
              View profile
            </DropdownItem>
            <Divider />
            <DropdownItem onClick={handleLogout}>
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

          {session ? 
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
                    <LoginButton2 onClick={handleLogin}>
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
              <LoginButton onClick={handleLogin}>
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
              <Image src={user?.avatar_url} alt="profile_picture" width="160" height="160" style={imageStyle}/>
              <InnerDesc>
                <SectionTitle>
                  {user?.name}
                </SectionTitle>
                <Username>
                  @{user?.login}
                </Username>
              </InnerDesc>
            </Desc>
            <About>
              <Heading>
                About
              </Heading>
              <AboutDesc>
                <AboutText>
                  {user?.bio}
                </AboutText>
                <AboutInfo>
                  <AboutFollows>
                    <Image src="/following.png" alt="followers" width={20} height={20} unoptimized/>
                    <Followers>
                      <FollowText><b>{user?.followers}</b> followers</FollowText>
                      <FollowText><b>{user?.following}</b> following</FollowText>
                    </Followers>
                  </AboutFollows>
                  {user?.email &&                   
                    <AboutEmail>
                      <Image src="/email.png" alt="email" width={20} height={20} unoptimized/>
                      <AboutText>{user?.email}</AboutText>
                    </AboutEmail>
                  }
                  <AboutVisitorCount>
                    <Image src="/people.png" alt="people" width="20" height="20"/>
                    <AboutText><b>{totalViews}</b> profile visitor</AboutText> 
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
                {latestVisitor.length > 0 ? latestVisitor?.map(visitor => {
                  return (
                    <Link key={visitor?.login} href={`/${visitor?.login}`}>
                      <Image src={visitor?.avatar_url} alt="people" width="56" height="56" style={imageStyle}/>
                    </Link>
                  )
                }) : <p>No visitors</p>}
              </AvatarGroup>
            </Visitors>
          </VisitorSection>
        </ProfileDesc>
        <Repos>
          <RepoHeader>
            <SectionTitle>Repository</SectionTitle>
            <Badge>{repos?.length > 6 ? 6 : repos?.length}</Badge>
          </RepoHeader>
          <RepoCards>
            {formattedRepos?.slice(0,6)?.map((repo,index) => {
              return (
                <div key={index}>
                <RepoCard 
                  repoName={repo?.name}
                  repoType={repo?.visibility}
                  repoDesc={repo?.description}
                  repoDotColor={colore[repo?.language]}
                  repoLang={repo?.language}
                  repoStatus={repo?.updated_at}
                /></div>
              )
            })}
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

export default HomePage;