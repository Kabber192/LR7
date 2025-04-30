# ЛР7 - API для банка
Вариант: Банк.  

- `id`: строка (UUID)
- `accountNumber`: строка (номер счета)
- `balance`: число (баланс)
- `isActive`: булево (активен ли счет)
- `createdAt`: строка (дата создания, формат ISO)
- `transactionIds`: массив (список ID транзакций)

- `GET /accounts` - получить все счета
- `GET /accounts/:id` - получить счет по ID
- `POST /accounts` - создать новый счет
- `PUT /accounts/:id` - обновить счет
- `PATCH /accounts/:id` - частично обновить счет (не идемпотентно)
