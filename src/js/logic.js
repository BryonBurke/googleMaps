import { TemplateTool } from './templateTool.js';
import { ApiTool } from './apiTool.js';

export class Logic {
  constructor() {
    this.apiTool = new ApiTool();
    this.templateTool = new TemplateTool();
  }

  async getButtons(type) {
    const dataObj = await this.apiTool.getData(type, '');
    const dataArray = dataObj.results;
    this.apiTool[type] = dataArray;
    const dataButtons = dataArray.map(item => this.templateTool.makeButton(item, type));
    return  dataButtons.join('');
  }

  async getCard(type, index) {
    const dataObj = await this.apiTool.getData(type, index);
    const dataCardHtml = this.templateTool[`${type}MakeCard`](dataObj);
    return dataCardHtml;
  }

}
