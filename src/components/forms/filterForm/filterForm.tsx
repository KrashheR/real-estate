import { useState, useEffect, ChangeEvent } from 'react';
import {
  StyledFilterForm,
  StyledFormLabel,
  StyledFormItem,
} from './styled';
import FormSelect from './formSelect/formSelect';
import FormRange from './formRange/formRange';
import FormRadio from './formRadio/formRadio';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setFilters } from '../../../store/reducers/CardSlice';
import { selectMaxPrice, selectMinPrice } from '../../../store/reducers/Selectors';

function FilterForm() {
  const dispatch = useAppDispatch();
  const initialMinPrice = useAppSelector(selectMinPrice);
  const initialMaxPrice = useAppSelector(selectMaxPrice);

  const [minPrice, setMinPrice] = useState<number | null>(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number | null>(initialMaxPrice);
  const [deliveryDate, setDeliveryDate] = useState<number | null>(null);
  const [objectType, setObjectType] = useState<string>('Все объекты');

  useEffect(() => {
    if (initialMinPrice !== null) {
      setMinPrice(initialMinPrice);
    }
    if (initialMaxPrice !== null) {
      setMaxPrice(initialMaxPrice);
    }
  }, [initialMinPrice, initialMaxPrice]);

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(parseInt(e.target.value));
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseInt(e.target.value));
  };

  const handleObjectTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setObjectType(e.target.value);
  };

  const handleDeliveryDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeliveryDate(parseInt(e.target.value));
  };

  useEffect(() => {
    dispatch(setFilters({
      minPrice,
      maxPrice,
      objectType,
      deliveryDate,
    }));
  }, [minPrice, maxPrice, objectType, deliveryDate, dispatch]);

  return (
    <StyledFilterForm>
      <StyledFormItem>
        <StyledFormLabel htmlFor="form-object-type">
          Тип объекта
        </StyledFormLabel>
        <FormSelect id="form-object-type" onChange={handleObjectTypeChange} />
      </StyledFormItem>
      <StyledFormItem>
        <StyledFormLabel htmlFor="form-object-price">
          Стоимость объекта, млн. руб.
        </StyledFormLabel>
        <FormRange
          id="form-object-price"
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
        />
      </StyledFormItem>
      <StyledFormItem>
        <StyledFormLabel htmlFor="form-object-date">
          Сдача объекта
        </StyledFormLabel>
        <FormRadio onChange={handleDeliveryDateChange} />
      </StyledFormItem>
    </StyledFilterForm>
  );
}

export default FilterForm;
