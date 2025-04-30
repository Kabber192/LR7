
const db = require('../db/db')

const getAllAccounts=async()=>{
  return await db.getAccounts()
};

const getAccountById = async (id) => {
  const accounts = await db.getAccounts()
  return accounts.find(acc => acc.id === id)
};

const createAccount = async (accountData) => {
  const accounts = await db.getAccounts();

  const newId = accounts.length > 0 ? String(Number(accounts[accounts.length - 1].id) + 1) : "1";
  const newAccount = {
    id: newId,
    accountNumber: accountData.accountNumber,
    balance: accountData.balance || 0,
    isActive: accountData.isActive !== undefined ? accountData.isActive : true,
    createdAt: new Date().toISOString().split('T')[0], 
    transactionIds: accountData.transactionIds || []
  };
  accounts.push(newAccount);
  await db.saveAccounts(accounts);
  return newAccount;
};

const updateAccount = async(id, updateData) => {
  const accounts=await db.getAccounts()
  const index=accounts.findIndex(acc=>acc.id===id)
  if(index===-1)return null
  accounts[index]={
    id,
    accountNumber: updateData.accountNumber || accounts[index].accountNumber,
    balance: updateData.balance !== undefined ? updateData.balance : accounts[index].balance,
    isActive: updateData.isActive !== undefined ? updateData.isActive : accounts[index].isActive,
    createdAt: accounts[index].createdAt,
    transactionIds: updateData.transactionIds || accounts[index].transactionIds
  }
  await db.saveAccounts(accounts)
  return accounts[index]
};

const patchAccount=async(id,updateData) => {
  const accounts = await db.getAccounts();
  const index = accounts.findIndex(acc => acc.id === id);
  if (index === -1) return null;
  const account = accounts[index];
  if (updateData.accountNumber) account.accountNumber = updateData.accountNumber;
  if (updateData.balance !== undefined) account.balance += updateData.balance; 
  if (updateData.isActive !== undefined) account.isActive = updateData.isActive;
  if (updateData.transactionIds) account.transactionIds = [...account.transactionIds, ...updateData.transactionIds];
  await db.saveAccounts(accounts);
  return account;
};

const deleteAccount = async (id) => {
  const accounts = await db.getAccounts();
  const index = accounts.findIndex(acc => acc.id === id);
  if (index === -1) return false;
  accounts.splice(index, 1);
  await db.saveAccounts(accounts);
  return true;
};

module.exports={getAllAccounts,getAccountById,createAccount,updateAccount,patchAccount,deleteAccount}