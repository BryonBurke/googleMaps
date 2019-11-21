export class ApiTool {
  constructor() {
    this.spellsMemo = {};
    this.monstersMemo = {};
    this.spells = [];
    this.monsters = [];
  }

  // http://dnd5eapi.co/api/spells/
  async getData(data, indexString) {
    if (this[`${data}Memo`][indexString]) {
      return this[`${data}Memo`][indexString];
    } else {
      const dataObj = new Promise((resolve,reject) => {
        const request = new XMLHttpRequest();
        const url = `http://dnd5eapi.co/api/${data}/${indexString}`;
        request.onload = function() {
          if (this.status === 200) {
            const responseObj = JSON.parse(request.response);
            resolve(responseObj);
          } else {
            reject(request.statusText);
          }
        };
        request.open("GET",url,true);
        request.send();
      });
      if (indexString) {
        this[`${data}Memo`][indexString] = await dataObj;
      }
      return dataObj;
    }
  }

}
