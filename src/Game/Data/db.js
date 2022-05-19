import Dexie from 'dexie';

const db = new Dexie('gameData');
db.version(1).stores({
  game: '++id, name, createdAt, updatedAt',
  player: '++id, name, createdAt, updatedAt',
  bankAccount: '++id, name, value, createdAt, updatedAt',
  bankAccountTransactions: '++id, bankAccountId, playerId, value, createdAt, updatedAt',
});

export default db;
