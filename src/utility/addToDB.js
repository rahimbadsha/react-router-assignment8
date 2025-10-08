const getInstallApp = () => { 
  const installedAppSTR = localStorage.getItem('installAPP');

  if (installedAppSTR) {
    const storeInstallApp = JSON.parse(installedAppSTR);
    return storeInstallApp;
  } else {
    return [];
  }
}


const addTOInstallDB = (id) => {
  const installedApp = getInstallApp();

  if (installedApp.includes(id)) {
    return;
  } else {
    installedApp.push(id);
    const data = JSON.stringify(installedApp);
    localStorage.setItem('installAPP', data);
  }
}


export {getInstallApp, addTOInstallDB};