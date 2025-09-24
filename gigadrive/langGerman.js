function toGerman() {
  document.getElementById('sortH5').textContent = 'Sortieren:';
  document.getElementById('clearFilter').textContent = 'alle';
  document.getElementById('newestSort').textContent = 'älteste';
  document.getElementById('oldestSort').textContent = 'neueste';
  document.getElementById('selectBtn').textContent = 'Auswählen';
  document.getElementById('search').placeholder = 'Suchen';
  document.getElementById('cancelSelectBtn').textContent = 'ABBRECHEN';
  document.getElementById('deleteSelection').textContent = 'LÖSCHEN';
  document.querySelectorAll('.save').forEach(el => { el.textContent = 'Speichern'; });
  document.getElementById('settings').textContent = 'Einstellungen';
  document.getElementById('general').textContent = 'ALLGEMEIN';
  document.getElementById('myDrive').textContent = 'Mein gigaDrive';
  document.getElementById('myLang').textContent = 'Sprache';
  document.getElementById('appearance').textContent = 'Anzeige';
  document.getElementById('theme1').textContent = 'Option 1';
  document.getElementById('theme2').textContent = 'Option 2';
  document.getElementById('howToCollaborate').textContent = 'Wie funktionert "Kollaborieren?"';
  document.getElementById('collaborateNow').textContent = 'Jetzt kollaborieren';
  document.getElementById('userSub').textContent = 'BENUTZER';
  document.getElementById('logOutDevice').textContent = 'Ausloggen (nur dieses Gerät)';
  document.getElementById('logOutAllDevices').textContent = 'Ausloggen (alle Geräte)';
  document.getElementById('manageDevices').textContent = 'Geräte verwalten';
  document.getElementById('delAcc').textContent = 'Account löschen';
  document.querySelectorAll('.secondary').forEach(el => { el.textContent = 'Abbrechen'; });
  document.getElementById('uploadNow').textContent = 'Hochladen';
    document.getElementById('recycleBin').textContent = 'Zuletzt gelöscht';
}