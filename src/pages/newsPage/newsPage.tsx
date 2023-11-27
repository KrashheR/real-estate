import { useEffect } from 'react';
import Title, { TitleLevel, TitleType } from '../../components/ui/title/title';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchNews } from '../../store/reducers/ActionCreators';
import {
  selectNews,
  selectNewsLoading,
  selectCurrentPage,
  selectPageSize,
  selectTotalNews
} from '../../store/reducers/news/NewsSelectors';
import NewsList from './newsList/newsList';
import { StyledNewsPage } from './styled';
import Pagination, { PaginationType } from '../../components/ui/pagination/pagintaion';
import { updateCurrentPage } from '../../store/reducers/news/NewsSlice';

function NewsPage() {
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);
  const isLoading = useAppSelector(selectNewsLoading);
  const currentPage = useAppSelector(selectCurrentPage);
  const pageSize = useAppSelector(selectPageSize);
  const totalNews = useAppSelector(selectTotalNews);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage, pageSize }));
  }, [dispatch, currentPage, pageSize]);


  const handlePageChange = (newPage: number) => {
    dispatch(updateCurrentPage(newPage));
    dispatch(fetchNews({ page: newPage, pageSize }));
  };

  return (
    <StyledNewsPage>
      <Title level={TitleLevel.H1} type={TitleType.PAGETITLE}>
        Наши новости
      </Title>
      <NewsList news={news} />
      {isLoading ?? <p>Загрузка...</p>}
      <Pagination
          total={totalNews}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          paginationType={PaginationType.NEWS}
        />
    </StyledNewsPage>
  );
}

export default NewsPage;
