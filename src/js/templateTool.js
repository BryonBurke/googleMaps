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
    return `<button type="button" id="${id}">${name}</button>`;
  }

  // makeSpellCard(spellDetails){
  //
  // }

}
