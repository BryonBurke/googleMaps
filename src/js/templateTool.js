export class TemplateTool {
  constructor() {

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

  makeButton(dataObj, data){
    const name = dataObj.name;
    const url = dataObj.url;
    const id = this.getIndexFromUrl(url);
    return `<button class="btn btn-dark" type="button" id="${id}" value="${data}">${name}</button>`;
  }

  spellsMakeCard(spellDetails){
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

  monstersMakeCard(monsterDetails){
    const name = monsterDetails.name;
    const type = monsterDetails.type;
    const hp = monsterDetails.hit_points;
    return `
      <h2>${name}</h2>
      <h5>Type: ${type}</h5>
      <h5>Hit Points: ${hp}</h5>
    `;
  }

}
