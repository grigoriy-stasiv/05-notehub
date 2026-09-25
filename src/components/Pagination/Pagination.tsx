import React from 'react';
import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface IPaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: number) => void;
  forcePage: number;
}

export const Pagination: React.FC<IPaginationProps> = ({ pageCount, onPageChange, forcePage }) => {
  const handlePageClick = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected + 1);
  };

  const PaginateComponent = (ReactPaginate as any).default || ReactPaginate;

  return (
    <PaginateComponent
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={css.pagination}
      activeClassName={css.active}
      forcePage={forcePage - 1}
    />
  );
};
