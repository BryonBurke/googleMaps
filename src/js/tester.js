import { ApiTool } from './apiTool.js';

const apiTool = new ApiTool();

const run = async () => {
  const allSpellsObj = await apiTool.getSpells();
  console.log(allSpellsObj);
};

console.log("HI!");
run();
