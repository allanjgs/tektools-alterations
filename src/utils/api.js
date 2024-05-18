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

