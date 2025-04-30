const fs = require('fs').promises;
const path = require('path');

const dbPath = path.join(__dirname, 'db.json')

const readData = async () => {
  try {
    const data = await fs.readFile(dbPath, 'utf8');
    return JSON.parse(data).accounts; 
  } catch (error) {
    return [];
  }
};

const writeData = async (accounts) => {
  await fs.writeFile(dbPath, JSON.stringify({ accounts }, null, 2)); 
};

module.exports = {
  getAccounts: readData,
  saveAccounts: writeData
};