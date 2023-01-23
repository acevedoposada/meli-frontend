export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onClick: (page: number) => void;
}
