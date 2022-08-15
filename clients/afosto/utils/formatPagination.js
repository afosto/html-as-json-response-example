const formatPagination = pagination => {
  const activeButton = (pagination?.buttons || []).find(button => !!button.active);
  const activeItemsPerPage = Object.values(pagination?.options || {}).find(
    option => !!option.active,
  );

  return {
    ...(pagination || {}),
    itemsPerPage: {
      value: activeItemsPerPage ? parseInt(activeItemsPerPage.label, 10) : 20,
      options: Object.values(pagination?.options || {}),
    },
    page: activeButton ? parseInt(activeButton.label, 10) : 1,
  };
};

export default formatPagination;
