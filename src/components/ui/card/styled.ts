import styled from 'styled-components';
import { StyledReadMoreButton } from '../readMoreButton/styled';

type StyledCardAreaProps = {
  $area: string;
};

type StyledCardTypeProps = {
  $type: string;
};

export const StyledCard = styled.a<StyledCardTypeProps>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 370px;
  height: 410px;
  color: ${(props) => props.$type === 'premium' ? props.theme.colors.colorWhite : props.theme.colors.colorBlack};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 15px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const StyledCardImage = styled.img`
  display: block;
  height: 263px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const StyledCardDescription = styled.div<StyledCardTypeProps>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 20px;
  height: 147px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${(props) => props.$type === 'premium' ? props.theme.colors.colorMainRed : props.theme.colors.colorLightRed};
`;

export const StyledCardAvaiableContainer = styled.div`
  display: grid;
  grid-template-areas:
    'house housePrice button'
    'parking parkingPrice button';
  align-items: center;
  padding: 0 20px 20px 20px;
`;

export const StyledCardPlaceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledCardPlaceIcon = styled.img`
  width: 16px;
`;

export const StyledCardPlaceText = styled.span`
  font-size: 14px;
`;

export const StyledCardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 0 20px;
`;

export const StyledCardButton = styled(
  StyledReadMoreButton,
)<StyledCardTypeProps>`
  grid-area: button;
  justify-self: end;
  height: 40px;

  background-color: ${(props) => {
    return props.$type === 'premium'
      ? props.theme.colors.colorWhite
      : props.theme.colors.colorMainRed;
  }};
  color: ${(props) => {
    return props.$type === 'premium'
      ? props.theme.colors.colorMainRed
      : props.theme.colors.colorWhite;
  }};
`;

export const StyledCardAvaiable = styled.span<StyledCardAreaProps>`
  grid-area: ${(props) => props.$area};
  font-size: 12px;
`;
