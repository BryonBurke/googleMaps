import { TemplateTool } from './templateTool.js';
import { ApiTool } from './apiTool.js';

export class Logic {
  constructor() {
    this.apiTool = new ApiTool();
    this.templateTool = new TemplateTool();
  }

  async getSpellButtons() {
    const allSpellsObj = await this.apiTool.getSpells('');
    const spellsArray = allSpellsObj.results;
    console.log(spellsArray);
    const spellButtons = spellsArray.map(spell => this.templateTool.makeButton(spell));
    return  spellButtons.join('');
  }

  // async getSpellCard(index) {
  //   const spellObj = await this.apiTool.getSpells(index);
  //   const spellCardHtml = this.templateTool.makeSpellCard(spellObj);
  //   return spellCardHtml;
  // }

}
