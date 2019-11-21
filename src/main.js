// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';
// import './js/tester.js'

// MAIN LOGIC
import { Logic } from './js/logic.js';

// Images
// import earth from './img/earth.png';

// AUDIO
// import sunMp3 from './mp3/sun.mp3';
// const sunSound = new Audio();
// sunSound.src = sunMp3;


// TEMPLATING
// import { buildPlanetInfo, buildSunInfo } from './js/templates.js';


// USER INTERFACE
$(document).ready(function(){

  const start = async () => {
    const buttons = await logic.getSpellButtons();
    $('.spell-buttons').append(buttons);
  };

  let logic = new Logic();
  start();

  $('body').on('click', 'button', async (event) => {
    const spellId = event.target.id;
    const spellCard = await logic.getSpellCard(spellId);
    $('#spell-content').text('');
    $('#spell-content').append(spellCard);
    $('.spell-modal').modal('show');
  });

  $('.modal-content').click(() => {
    $('.spell-modal').modal('hide');
  });

});
