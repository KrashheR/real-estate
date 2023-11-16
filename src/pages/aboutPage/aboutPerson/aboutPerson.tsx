import {
  StyledAboutPerson,
  StyledAboutPersonPhotoContainer,
  StyledAboutPersonPhoto,
  StyledAboutPersonInfo,
} from './styled';
import BossPhoto from '../../../assets/images/about/boss_photo.webp';
import Title, {
  TitleLevel,
  TitleType,
} from '../../../components/ui/title/title';
import Description, {
  DescriptionType,
} from '../../../components/ui/description/description';
import bossVasiliySpeech from "../../../assets/sounds/Boss_Vasiliy_speech.m4a"
import { useRef } from 'react';

function AboutPerson() {

  const audioRef = useRef(new Audio(bossVasiliySpeech));

  const handleMouseEnter = () => {
    audioRef.current.play();
  };

  const handleMouseLeave = () => {
    audioRef.current.pause();
  };

  return (
    <StyledAboutPerson onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <StyledAboutPersonPhotoContainer>
        <StyledAboutPersonPhoto src={BossPhoto} />
      </StyledAboutPersonPhotoContainer>
      <StyledAboutPersonInfo
              >
        <Description type={DescriptionType.CONTACTS}>
          Меня зовут Василий Мурзыченко. Я отвечаю за постройку домов в компании
          real-estate. Как видите, в моих лапах достаточно сил, чтобы держать не
          только молоток и уровень, но и контроль над всем строительством. То,
          что у меня лапки - не оправдание.
        </Description>
        <Title level={TitleLevel.H2} type={TitleType.CONTACTS}>
          Василий Мурзыченко
        </Title>
      </StyledAboutPersonInfo>
    </StyledAboutPerson>
  );
}

export default AboutPerson;
