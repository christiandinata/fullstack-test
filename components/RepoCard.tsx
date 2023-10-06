import styled from '@emotion/styled'

interface Props {
  repoName: string;
  repoType: string;
  repoDesc: string;
  repoDotColor: string;
  repoLang: string;
  repoStatus: string;
}

interface RepoDotProps {
  backgroundColor: string;
}

const RepoCard = ({repoName, repoType, repoDesc, repoDotColor, repoLang, repoStatus}: Props) => {

  const RepoDot = ({ backgroundColor }: RepoDotProps) => (
    <StyledRepoDot backgroundColor={backgroundColor} />
  )

  return (
    <Card>
      <Bio>
        <BioTitle>
          <BioText>{repoName}</BioText>
          <BioType>{repoType}</BioType>
        </BioTitle>
        <BioDesc>{repoDesc}</BioDesc>
      </Bio>
      <RepoAdditional>
        <RepoLangInfo>
          <RepoDot backgroundColor={repoDotColor}/>
          <RepoLang>{repoLang}</RepoLang>
        </RepoLangInfo>
        <RepoStatus>{repoStatus}</RepoStatus>
      </RepoAdditional>
    </Card>
  )
}

export default RepoCard

const Card = styled.div`
  display: flex;
  background-color: #f9fafb;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px;
  gap: 24px;
  border: 1px solid #eaecf0;
  border-radius: 8px;
`
const Bio = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
`
const BioTitle = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
`
const BioText = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`
const BioType = styled.div`
  display: flex;
  background-color: #f4f3ff;
  padding: 2px 8px;
  border-radius: 16px;
`
const BioDesc = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`
const RepoAdditional = styled.div`
  display: flex;
  gap: 23px;
  justify-content: flex-start;
  align-items: center;
`
const RepoLangInfo = styled.div`
  display: flex;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
`
const StyledRepoDot = styled.div<RepoDotProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
` 
const RepoLang = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

`
const RepoStatus = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`