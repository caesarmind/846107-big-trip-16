import {listSorting, sortingEvents} from './view/list-sorting.js';
import { filteringList } from './view/list-filter.js';
import { pointList } from './view/list-content.js';
import { tripNavigation } from './view/menu.js';
import { editTrip } from './view/edit-trip.js';
import { tripInfo } from './view/trip-info.js';

export const renderPos = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};
const renderTemplate = (container, template, placement) => {
  container.insertAdjacentHTML(placement, template);
};


const tripMenu = document.querySelector('.trip-controls__navigation');
const tripMain = document.querySelector('.trip-main');
const tripControlsFilter = document.querySelector('.trip-controls__filters');

const tripEvents = document.querySelector('.trip-events');
const tripPointsList = document.querySelector('.trip-events__list');


renderTemplate(tripMain, tripInfo(), renderPos.AFTERBEGIN);
renderTemplate(tripMenu, tripNavigation(), renderPos.BEFOREEND);
renderTemplate(tripControlsFilter, filteringList(), renderPos.BEFOREEND);

renderTemplate(tripEvents, listSorting(), renderPos.AFTERBEGIN);
renderTemplate(tripPointsList, editTrip(), renderPos.AFTERBEGIN);
for(let i = 0; i < 3; i++){
  renderTemplate(tripPointsList, pointList(), renderPos.BEFOREEND);
}


