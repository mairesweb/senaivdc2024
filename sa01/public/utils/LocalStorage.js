function getStorage() {
  return localStorage;
}

function setItem(key, value) {
  getStorage().setItem(key, value);
}

function getItem(key) {
  return getStorage().getItem(key);
}

function removeItem(key) {
  getStorage().removeItem(key);
}

function clear() {
  getStorage().clear();
}

function removeItemById(db, id) {
  let produtos = JSON.parse(getStorage().getItem(db)) || [];
  produtos = produtos.filter((produto) => produto.id !== id);
  getStorage().setItem(db, JSON.stringify(produtos));
}
