export const fetchCollectionData = (creatorAddress, collectionName, selectRole, isCheckedHashlist, isCheckedSkipRole, isSaveOperation) => {
  if (isSaveOperation) {
    return fetch('/collections/definition', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        guildId: localStorage.getItem('selectedServer'),
        creatorsAddress: creatorAddress,
        collectionName: collectionName,
        hashlist: isCheckedHashlist ? [''] : [],
        holderRole: selectRole,
        skipRoleManagement: isCheckedSkipRole,
      })
    });
  } else {
    // Simular a leitura dos dados existentes (pode ser ajustado conforme necessário)
    const existingData = localStorage.getItem(`data-${creatorAddress}`);
    return Promise.resolve({
      ok: true,
      json: () => JSON.parse(existingData)
    });
  }
};
/**
 * Envia os dados de roles para a coleção via POST para o endpoint /collections/roles.
 * @param {Object} data - Os dados a serem enviados para o servidor.
 * @returns {Promise<Response>} A promessa que resolve a resposta da requisição.
 */
export const postCollectionRoles = (data) => {
  return fetch('/collections/roles', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Falha ao enviar dados para a API ');
    }
    return response.text().then(text => {
      return text ? JSON.parse(text) : {};
    });
  }).catch(error => {
    console.error('Erro ao enviar dados para a API:', error);
    throw error;
  });
};