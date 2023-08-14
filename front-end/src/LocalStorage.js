/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
function localStorageExpire() {
  const toRemove = []; // Itens para serem removidos
  const currentData = new Date().getTime; // Data atual em milissegundos

  for (let i = 0, j = localStorage.length; i < j; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    // Verifica se o formato do item para evitar conflitar com outras aplicações
    if (value && value[0] === '{' && value.slice(-1) === '}') {
      // Decodifica de volta para JSON
      const current = JSON.parse(value);

      // Checa a chave expires do item especifico se for mais antigo que a data atual ele salva no array
      if (current.expires && current.expires <= currentData) {
        toRemove.push(key);
      }
    }
  }
  // Remove itens que já passaram do tempo
  for (let i = toRemove.length - 1; i >= 0; i--) {
    localStorage.removeItem(toRemove[i]);
  }
}

localStorageExpire();

/**
 * Função para adicionar itens no localStorage
 * @param {string} chave Chave que será usada para obter o valor posteriormente
 * @param {*} valor Quase qualquer tipo de valor pode ser adicionado, desde que não falhe no JSON.stringify
 * @param {number} Tempo de vida em minutos do item
 */

export function setLocalStorege(chave, valor, minutos) {
  // eslint-disable-next-line no-var
  var expiram = new Date().getTime() + (60000 * minutos);

  localStorage.setItem(chave, JSON.stringify({
    value: valor,
    expires: expiram,
  }));
}

/**
 * Função para obter itens do localStorage que ainda não expiraram
 * @param {string} chave Chave para obter o valor associado
 * @return {*} Retorna qualquer valor, se o item tiver expirado irá retorna undefined
 */
export function getLocalStorage(chave) {
  localStorageExpire();// Limpa itens

  const value = localStorage.getItem(chave);

  if (value && value[0] === '{' && value.slice(-1) === '}') {
    // Decodifica de volta para JSON
    const current = JSON.parse(value);

    return current.value;
  }
}
