const formatBreadcrumbs = (breadcrumbs = []) =>
  breadcrumbs.map((breadcrumb, idx) => ({
    key: `${breadcrumb.label}_${idx}`,
    label: breadcrumb.label,
    url: breadcrumb.link,
    active: breadcrumb.active,
  }));

export default formatBreadcrumbs;
