export class TemplateTool {
  conurluctor() {

  }

  getIndexFromUrl(url) {
    let charArray = url.split('');
    let result = [];
    for	(let i = 0; i < charArray.length; i++) {
      let thisChar = charArray.pop();
      if (thisChar != "/") {
        result.unshift(thisChar);
      } else {
        return result.join('');
      }
    }
  }

  makeButton(spellObj){
    const name = spellObj.name;
    const url = spellObj.url;
    const id = this.getIndexFromUrl(url);
    return `<button class="btn btn-dark" type="button" id="${id}">${name}</button>`;
  }

  makeSpellCard(spellDetails){
    const name = spellDetails.name;
    let desc = spellDetails.desc[0];
    let subDesc;
    if (spellDetails.higher_level) {
      subDesc = spellDetails.higher_level[0];
    } else {
      subDesc = '';
    }
    const range = spellDetails.range;
    const duration = spellDetails.duration;
    const level = spellDetails.level;
    return `
      <h2>${name}</h2>
      <p>${desc}</p>
      <p>${subDesc}</p>
      <h5>Range: ${range}</h5>
      <h5>Duration: ${duration}</h5>
      <h5>Level: ${level}</h5>
    `;
  }

}
