import styled from 'styled-components';
import { DescriptionType } from './description';

interface StyledDescriptionProps {
  $descriptionType: DescriptionType;
}

export const StyledDescription = styled.p<StyledDescriptionProps>`
  width: ${(props) => props.$descriptionType === DescriptionType.DOCUMENTS ? "40%": "auto"};
  margin-block-start: 0;
  font-size: ${(props) => {
    if (props.$descriptionType === DescriptionType.APARTMENT) {
      return '16px';
    } else if (props.$descriptionType === DescriptionType.DOCUMENTS) {
      return '16px';
    } else {
      return '14px';
    }
  }};
  font-weight: 400;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 0 5px;
  }
`;
