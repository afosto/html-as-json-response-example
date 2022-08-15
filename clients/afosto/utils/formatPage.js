import formatBreadcrumbs from './formatBreadcrumbs';
import formatActiveFilters from './formatActiveFilters';
import formatCleanFilter from './formatCleanFilter';
import formatFilters from './formatFilters';
import formatMenus from './formatMenus';
import formatPagination from './formatPagination';
import formatSort from './formatSort';

const formatPage = page => {
  const breadcrumbs = formatBreadcrumbs(page.breadcrumbs);
  const activeFilters = formatActiveFilters(page.active_filters);
  const cleanFilter = formatCleanFilter(page.active_filters);
  const filters = formatFilters(page.filters);
  const menus = formatMenus(page.menus);
  const pagination = formatPagination(page.content?.pagination);
  const sort = formatSort(page.sort);

  return {
    ...page,
    breadcrumbs,
    content: {
      ...(page.content || {}),
      addonProducts: page.content?.addon_products || [],
      activeFilters: formatActiveFilters(page.content?.active_filters),
      filters: formatFilters(page.content?.filters),
      pagination,
    },
    activeFilters,
    cleanFilter,
    filters,
    menus,
    sort,
  };
};

export default formatPage;
