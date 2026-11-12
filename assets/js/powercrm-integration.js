/* Integração Esteio Sul / Power CRM.
 * O script oficial do Power CRM é responsável por cidades, marcas, modelos e envio.
 * Não há event.preventDefault(), captura de dados ou requisição própria neste arquivo.
 * Removemos apenas a opção de caminhão da comunicação comercial visível.
 */
(function () {
  'use strict';
  const vehicleType = document.getElementById('pwrVhclTyp');
  if (!vehicleType) return;
  function filterTrucks() {
    Array.from(vehicleType.options).forEach(option => {
      if (option.value === '3' || /caminh(?:ão|ao|ões|oes)|micro.?ônibus/i.test(option.textContent)) {
        option.remove();
      }
    });
  }
  filterTrucks();
  // Se o CRM preencher novamente a lista, respeitar o posicionamento da Esteio Sul.
  const observer = new MutationObserver(filterTrucks);
  observer.observe(vehicleType, {childList:true,subtree:true});
})();
