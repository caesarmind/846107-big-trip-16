export const renderPos = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};
export const renderTemplate = (container, template, placement) => {
  container.insertAdjacentHTML(placement, template);
};
