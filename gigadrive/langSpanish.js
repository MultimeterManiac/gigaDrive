function toSpanish() {
  document.getElementById('sortH5').textContent = 'Ordenar';
  document.getElementById('clearFilter').textContent = 'todos';
  document.getElementById('newestSort').textContent = 'más viejo';
  document.getElementById('oldestSort').textContent = 'más nuevo';
  document.getElementById('selectBtn').textContent = 'Seleccionar';
  document.getElementById('search').placeholder = 'Buscar';
  document.getElementById('cancelSelectBtn').textContent = 'CANCELAR';
  document.getElementById('deleteSelection').textContent = 'ELIMINAR';
  document.querySelectorAll('.save').forEach(el => { el.textContent = 'Guardar'; });
  document.getElementById('settings').textContent = 'Ajustes';
  document.getElementById('general').textContent = 'GENERAL';
  document.getElementById('myDrive').textContent = 'Mi gigaDrive';
  document.getElementById('myLang').textContent = 'Idioma';
  document.getElementById('appearance').textContent = 'Diseño';
  document.getElementById('theme1').textContent = 'Tema 1';
  document.getElementById('theme2').textContent = 'Tema 2';
  document.getElementById('howToCollaborate').textContent = 'Cómo colaborar';
  document.getElementById('collaborateNow').textContent = 'Colaborar ahora';
  document.getElementById('userSub').textContent = 'USUARIO';
  document.getElementById('logOutDevice').textContent = 'Log Out (este dispositivo)';
  document.getElementById('logOutAllDevices').textContent = 'Log Out (todos dispositivos)';
  document.getElementById('manageDevices').textContent = 'Administrar dispositivos';
  document.getElementById('delAcc').textContent = 'Eliminar cuenta';
  document.querySelectorAll('.secondary').forEach(el => { el.textContent = 'Cancelar'; });
  document.getElementById('uploadNow').textContent = 'Subir';
  document.getElementById('recycleBin').textContent = 'Recién eliminado';
}