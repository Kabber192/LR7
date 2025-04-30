
const accountService=require('../services/accountService')

const getAllAccounts=async(req,res)=>{res.json(await accountService.getAllAccounts())}

const getAccountById=async(req,res)=>{
  const account=await accountService.getAccountById(req.params.id)
  if(!account)res.status(404).json({error:'Счет не найден'})
  else res.json(account)
}

const createAccount=async(req,res)=>{
  const account=await accountService.createAccount(req.body)
  res.status(201).json(account)
}

const updateAccount=async(req,res)=>{
  const account=await accountService.updateAccount(req.params.id,req.body)
  if(!account)res.status(404).json({error:'Счет не найден'})
  else res.json(account)
}

const patchAccount=async(req,res)=>{
  const account=await accountService.patchAccount(req.params.id,req.body)
  if(!account)res.status(404).json({error:'Счет не найден'})
  else res.json(account)
}

const deleteAccount=async(req,res)=>{
  const success=await accountService.deleteAccount(req.params.id)
  if(!success)res.status(404).json({error:'Счет не найден'})
  else res.status(204).send()
}

module.exports={getAllAccounts,getAccountById,createAccount,updateAccount,patchAccount,deleteAccount}