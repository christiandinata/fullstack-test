import styled from '@emotion/styled'

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    margin-top: 104px;
    padding: 0 48px;

    @media (max-width: 576px){
      padding: 0;
      margin-top: 72px;
      flex-direction: column;
      align-items: center;
    }

`

export const ProfileDesc = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 576px){
    width: 100%;
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
  gap: 24px;
`
export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  @media (max-width: 576px){
    flex-direction: row;
    gap: 16px;
  }
`

export const InnerDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px){
    gap: 4px;
    align-items: start;
  }
`

export const SectionTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
`
export const Username = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`
export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`
export const Heading = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`
export const AboutDesc = styled.div`
  display: flex;
  gap: 16px;
  align-items: start;
  flex-direction: column;
`
export const AboutText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`
export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
`

export const AboutFollows = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
`
export const FollowDot = styled.div`
  width: 4px;
  height: 4px;
  margin: 0 2px;
  border-radius: 50%;
  background-color: #000;
`

export const Followers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: start;
`

export const FollowText = styled.div`
  display: flex;
  gap: 4px;
`

export const AboutEmail = styled.div`
  display: flex;
  gap: 8px;
  align-items: start;
`
export const AboutVisitorCount = styled.div`
  display: flex;
  gap: 8px;
  align-items: start;
`

export const VisitorSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
  gap: 24px;
`

export const Visitors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`
export const AvatarGroup = styled.div`
  display: flex;
  padding: 0 12px 0 0;
  align-items: start;
  gap: 8px;
`

export const Repos = styled.div`
  display: flex;
  width: 904px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding: 24px;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid #f2f4f7;
  background-color: #fff;

  @media (max-width: 576px){
    width: 100%;
  }

`
export const RepoHeader = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`
export const Badge = styled.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  background-color: #f8f9fc;
  color: #363f72;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
`
export const RepoCards = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  background-color: #fff;
`