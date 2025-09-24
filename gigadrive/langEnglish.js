function toEnglish() {
  document.getElementById('sortH5').textContent = 'Sort:';
  document.getElementById('clearFilter').textContent = 'all';
  document.getElementById('newestSort').textContent = 'Newest';
  document.getElementById('oldestSort').textContent = 'Oldest';
  document.getElementById('selectBtn').textContent = 'Select';
  document.getElementById('search').placeholder = 'Search';
  document.getElementById('cancelSelectBtn').textContent = 'CANCEL';
  document.getElementById('deleteSelection').textContent = 'DELETE';
  document.querySelectorAll('.save').forEach(el => { el.textContent = 'Save'; });
  document.getElementById('settings').textContent = 'Settings';
  document.getElementById('general').textContent = 'GENERAL';
  document.getElementById('myDrive').textContent = 'My Drive';
  document.getElementById('myLang').textContent = 'Language';
  document.getElementById('appearance').textContent = 'Appearance';
  document.getElementById('theme1').textContent = 'Theme 1';
  document.getElementById('theme2').textContent = 'Theme 2';
  document.getElementById('howToCollaborate').textContent = 'How To Collaborate';
  document.getElementById('collaborateNow').textContent = 'Collaborate Now';
  document.getElementById('userSub').textContent = 'USER';
  document.getElementById('logOutDevice').textContent = 'Log Out (this device)';
  document.getElementById('logOutAllDevices').textContent = 'Log Out (all devices)';
  document.getElementById('manageDevices').textContent = 'Manage my devices';
  document.getElementById('delAcc').textContent = 'Delete account';
  document.querySelectorAll('.secondary').forEach(el => { el.textContent = 'Cancel'; });
  document.getElementById('uploadNow').textContent = 'Upload';
    document.getElementById('recycleBin').textContent = 'Recycle Bin';
}