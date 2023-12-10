import Constructor from '../../components/layouts/constructor/constructor';
import { StyledConstructorContainer, StyledConstructorPage } from './styled';
import { constructorOptions } from './constructorConfig';


function ConstructorPage() {
  return (
    <StyledConstructorPage>
      <StyledConstructorContainer>
        <Constructor data={constructorOptions}/>
      </StyledConstructorContainer>
    </StyledConstructorPage>
  );
}

export default ConstructorPage;
