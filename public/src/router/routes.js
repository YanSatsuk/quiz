import SignForm from '../app/signform/SignForm.js';
import QuizContainer from '../app/quiz/QuizContainer.js';

export const routes = {
  sign_in: '#signin',
  sign_up: '#signup',
  home: '',
};

export const route_elements = {
  [routes.sign_in]: new SignForm(),
  [routes.sign_up]: new SignForm(),
  [routes.home]: new QuizContainer(),
};