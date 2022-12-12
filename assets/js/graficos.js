const namegrafico = 'chart-grafico-';

const grafico1 = (contarHombres, contarMujeres, departamentos) => {
  const ctx = document.getElementById(`${namegrafico}1`);
  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: departamentos,
          datasets:[
              {
                  label: "Hombres",
                  data: contarHombres
              }, 
              {
                  label: "Mujeres",
                  data: contarMujeres
              }
          ]
      },

      options: { plugins: { title: { display: true, text: '¿Cuantas mujeres y hombres hay en cada departamento?',}}}
  });
}


const grafico2 = (contarGrados, grados) => {
  const ctx = document.getElementById(`${namegrafico}2`);
  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: grados,
          datasets: [
            {
                label:'Grado Maximo',
                data: contarGrados,
                backgroundColor: 'rgba(142, 68, 173, 0.5)',
            }
          ]
      },

      options: { plugins: { title: { display: true, text: '¿Cuántas personas terminaron el grado escolar?',}}}
  });
}


const grafico3 = (contar_mujeres_hijos) => {
    const ctx = document.getElementById(`${namegrafico}3`);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Mujeres con hijos", "Mujeres sin hijos"],
            datasets: [
                {
                    label:'Hijos',
                    data: contar_mujeres_hijos,
                    backgroundColor: 'rgba(40, 180, 99, 0.5)',
                }
            ]
        },

        options: { plugins: { title: { display: true, text: 'Mujeres con hijos',}}}
    });
}



const grafico4 = (pensiones) => {
    const ctx = document.getElementById(`${namegrafico}4`);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Cobran", "No cobran"],
            datasets: [
                {
                    label:'Personas',
                    data: pensiones
                }
            ]
        },

        options: { plugins: { title: { display: true, text: '¿Cobra la pension o jubilacion?',}}}
    });
}



const grafico5 = (titulosaportes, contarAportes) => {
    const ctx = document.getElementById(`${namegrafico}5`);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: titulosaportes,
            datasets: [
                {
                    label:'Personas',
                    data: contarAportes,
                    backgroundColor: 'rgba(46, 64, 83, 0.5)',
                }
            ]
        },

        options: { plugins: { title: { display: true, text: 'Tipos de aportes de jubilacion',}}}
    });
}


const grafico6 = (restricciones) => {
    const ctx = document.getElementById(`${namegrafico}6`);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Entre 0 a 14 años', 'Entre 15 a 59 años', 'Mayores a 60 años'],
            datasets: [
                {
                    label:'Personas',
                    data: restricciones,
                    backgroundColor: 'rgba(243, 156, 18, 0.5)',
                }
            ]
        },

        options: { plugins: { title: { display: true, text: 'Poblacion por edades',}}}
    });
}