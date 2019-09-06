import SignForm from '../app/signform/SignForm.js';

export const routes = {
  sign_in: '#signin',
  sign_up: '#signup',
};

export const route_elements = {
  [routes.sign_in]: new SignForm(),
  [routes.sign_up]: new SignForm(),
};