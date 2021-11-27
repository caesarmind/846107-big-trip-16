import { renderTemplate, renderPos } from 'render.js';
import { createListSort} from './view/list-sorting.js';
import { createListFilter } from './view/list-filter.js';
import { createPointList } from './view/list-content.js';
import { createTripNav } from './view/menu.js';
import { createEditTrip } from './view/edit-trip.js';
import { createTripInfo } from './view/trip-info.js';

const TRIP_POINT_NUM = 3;


const tripMenu = document.querySelector('.trip-controls__navigation');
const tripMain = document.querySelector('.trip-main');
const tripControlsFilter = document.querySelector('.trip-controls__filters');

const tripEvents = document.querySelector('.trip-events');
const tripPointsList = document.querySelector('.trip-events__list');


renderTemplate(tripMain, createTripInfo(), renderPos.AFTERBEGIN);
renderTemplate(tripMenu, createTripNav(), renderPos.BEFOREEND);
renderTemplate(tripControlsFilter, createListFilter(), renderPos.BEFOREEND);

renderTemplate(tripEvents, createListSort(), renderPos.AFTERBEGIN);
renderTemplate(tripPointsList, createEditTrip(), renderPos.AFTERBEGIN);
for(let i = 0; i < TRIP_POINT_NUM; i++){
  renderTemplate(tripPointsList, createPointList(), renderPos.BEFOREEND);
}


