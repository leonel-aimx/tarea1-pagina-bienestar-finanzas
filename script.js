document.addEventListener('DOMContentLoaded', function () {
  var startButton = document.getElementById('start-button');
  var form = document.getElementById('profile-form');
  var resultCard = document.getElementById('result-card');
  var resultTitle = document.getElementById('result-title');
  var resultDescription = document.getElementById('result-description');
  var resultAdvice = document.getElementById('result-advice');
  var resultProgram = document.getElementById('result-program');
  var resultFocus = document.getElementById('result-focus');
  var resultIcon = document.querySelector('.result-icon');

  function scrollToForm() {
    var section = document.getElementById('evaluation-section');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showResult(status, description, advice, program, focus, icon) {
    resultTitle.textContent = status;
    resultDescription.textContent = description;
    resultAdvice.textContent = advice;
    resultProgram.textContent = program;
    resultFocus.textContent = focus;
    resultIcon.textContent = icon;
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  startButton.addEventListener('click', scrollToForm);

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var supportValue = document.getElementById('support').value;
    var appsValue = document.getElementById('apps').value;
    var debtValue = Number(document.getElementById('debt').value || 0);
    var savingsValue = Number(document.getElementById('savings').value || 0);

    if (appsValue === 'si' && debtValue <= 1500 && savingsValue >= 500) {
      showResult(
        'Crecimiento',
        'Tu perfil es estable. Estás aprovechando tus apoyos y cuentas con un espacio para ahorrar.',
        'Continúa revisando tus recursos y reserva un monto fijo cada mes.',
        supportValue === 'pension' ? 'Pensión para el Bienestar' : 'Beca Benito Juárez',
        'Ahorro y confiabilidad',
        '🌿'
      );
      return;
    }

    if (supportValue === 'pension' || supportValue === 'mujeres' || debtValue > 2000) {
      showResult(
        'Transición',
        'Tu perfil muestra que estás en una etapa de adaptación. Algunos gastos pueden estar en revisión.',
        'Haz una lista de gastos esenciales y apóyate en tus programas para estabilizar tu presupuesto.',
        supportValue === 'mujeres' ? 'Mujeres Bienestar' : supportValue === 'pension' ? 'Pensión para el Bienestar' : 'Ingreso básico',
        'Control y planificación',
        '🌱'
      );
      return;
    }

    showResult(
      'Riesgo',
      'Tu perfil indica que es momento de ordenar tus deudas y revisar cómo usar mejor tus apoyos.',
      'Busca apoyo en el centro comunitario y anota tus ingresos y gastos para tomar decisiones claras.',
      supportValue === 'beca' ? 'Beca Benito Juárez' : 'Ingreso básico',
      'Ordenar gastos',
      '⚠️'
    );
  });
});
