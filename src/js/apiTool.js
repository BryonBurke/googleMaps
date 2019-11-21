export class ApiTool {
  constructor() {
    this.memo = {};
    this.spells = [];
  }

  // http://dnd5eapi.co/api/spells/
  async getSpells(indexString) {
    if (this.memo[indexString]) {
      return this.memo[indexString];
    } else {
      const spellsObj = new Promise((resolve,reject) => {
        const request = new XMLHttpRequest();
        const url = `http://dnd5eapi.co/api/spells/${indexString}`;
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
        this.memo[indexString] = await spellsObj;
      }
      return spellsObj;
    }
  }

}
