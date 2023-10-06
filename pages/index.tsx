import type { NextPage } from 'next';
import {useSession, signIn, signOut} from 'next-auth/react'
import Image from 'next/image';
import { Header, HeaderContainer, Left, StyledLoggedInMenu, LoginButton, Menu, Text, MenuProps, DropdownMenu, DropdownHeader, AvatarLabelGroup, LabelGroup, LabelName, LabelEmail, DropdownItems, DropdownItem, Divider, NavMenu, XIcon, DropdownMenu2, NotLoggedInContainer, LoginButton2 } from './header.styles';
import { About, AboutDesc, AboutEmail, Heading, AboutInfo, AboutText, AboutVisitorCount, Content, Desc, SectionTitle, Profile, ProfileDesc, Repos, Username, Visitors, AvatarGroup, VisitorSection, RepoHeader, Badge, RepoCards, InnerDesc } from './content.styles';
import RepoCard from '@/components/RepoCard';
import { Footer, FooterContainer, FooterContent } from './footer.styles';
import {  useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to '/octocat' when the component mounts
    router.push('/octocat');
  }, []);

  return null; // This component can be empty or contain content for /octocat
};

export default HomePage;