// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { Logic } from './js/logic.js';

// USER INTERFACE
$(document).ready(function(){

  const start = async () => {
    const spellButtons = await logic.getButtons('spells');
    $('.spell-buttons').append(spellButtons);
    const monsterButtons = await logic.getButtons('monsters');
    $('.monster-buttons').append(monsterButtons);
  };

  let logic = new Logic();
  start();

  $('.buttons').on('click', 'button', async (event) => {
    const buttonId = event.target.id;
    const type = $(event.target).val();
    const resultCard = await logic.getCard(type, buttonId);
    $(`#${type}-content`).text('');
    $(`#${type}-content`).append(resultCard);
    $(`.${type}-modal`).modal('show');
  });

  $('.modal-content').click(() => {
    $('.spell-modal').modal('hide');
  });

  $('.header').on('click', (event) => {
    const type = $(event.target).attr('value');
    $(`.${type}-wrap`).toggle();
  });

});
