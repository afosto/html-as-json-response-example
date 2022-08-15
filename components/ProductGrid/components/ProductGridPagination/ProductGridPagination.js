import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import PaginationItem from './components/PaginationItem';
import * as Styled from './ProductGridPagination.styles';

const ProductGridPagination = ({ pagination }) => {
  const { query = {} } = useRouter();
  const { page: pageParam, slug, ...queryParams } = query || {};
  const { page, pageCount } = pagination || {};

  return (
    <Styled.Pagination
      count={pageCount}
      page={page}
      hidePrevButton={page <= 1}
      hideNextButton={page === pageCount}
      renderItem={item => (
        <PaginationItem
          href={{
            pathname: `/${query.slug.join('/')}`,
            query: {
              ...queryParams,
              ...(item.page > 1 ? { page: item?.page } : {}),
            },
          }}
          item={item}
          page={page}
        />
      )}
      shape="rounded"
    />
  );
};

ProductGridPagination.propTypes = {
  pagination: PropTypes.shape({
    page: PropTypes.number,
    pageCount: PropTypes.number,
  }),
};

ProductGridPagination.defaultProps = {
  pagination: {},
};

export default ProductGridPagination;
