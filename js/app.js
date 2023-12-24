//data
let person = {
  name: "Silver",
  age: "15",
  family: "Ash",
};

const house = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const qualities = [
  "Valor, Strength, Courage",
  "Justice, Loyalty, Patience",
  "Creativity, Erudition, Intelligence",
  "Ambition, Determination, Cunning",
];

const lineage = ["Half-blood", "Muggle", "Pure-blood"];

//selectors - input
const nameValue = document.querySelector("#name");
const ageValue = document.querySelector("#age");
const lineageValue = document.querySelector("#lineage");
const houseValue = document.querySelector("#house");
const animalPatronumValue = document.querySelector("#animalPatronum");
const qualitiesValue = document.querySelector("#qualities");

//selectors - output
const contentContainer = document.querySelector("#content-container");
const contentInformation = document.querySelector("#container-information");
const showDate = document.querySelector(".info-date .info-value");
const showName = document.querySelector(".info-name .info-value");
const showAge = document.querySelector(".info-age .info-value");
const showLineage = document.querySelector(".info-lineage .info-value");
const showHouse = document.querySelector(".info-house .info-value");
const showAnimalPatronum = document.querySelector(
  ".info-animalPatronum .info-value"
);
const showQualities = document.querySelector(".info-qualities .info-value");
const showTitle = document.querySelector("h1");

//selectors - button
const mainButton = document.querySelector("#main-button");

//events
mainButton.addEventListener("click", () => {
  mostrarPersona();
});

function fillValues() {
  nameValue.value = `${person.name} ${person.family}`;
  ageValue.value = person.age;
  lineageValue.value = randomLineage();
  qualitiesValue.value = randomQualities();
}

function main() {
  fillValues();
  
}

function mostrarPersona() {
  showTitle.textContent = "Student information"
  contentContainer.style.display = "none";
  contentInformation.style.display = "flex";
  contentInformation.style.flexDirection = "column";
  contentInformation.style.fontSize = "35px";
  mainButton.firstChild.nextSibling.textContent = "Close"
  const date = new Date();
  const dateFormat = date.toDateString();
  showDate.textContent = dateFormat;

  const { name, age, family, lineage, house, animalPatronum, qualities } =
    person;

    showName.textContent = `${name} ${family}`;
    showAge.textContent = age;
    showLineage.textContent = lineage;
    showHouse.textContent = house;
    showAnimalPatronum.textContent = animalPatronum;
    showQualities.textContent = qualities;
}

function randomLineage() {
  const optionLineage = Math.floor(Math.random() * 3);
  do {
    switch (optionLineage) {
      case 0:
        person.lineage = lineage[0];
        break;
      case 1:
        person.lineage = lineage[1];
        break;
      case 2:
        person.lineage = lineage[2];
        break;
      default:
        break;
    }
  } while (optionLineage < 0 || optionLineage > 2);

  return person.lineage;
}

function randomQualities() {
  const optionQualities = Math.floor(Math.random() * 4);

  do {
    switch (optionQualities) {
      case 0:
        person.qualities = qualities[0];
        break;
      case 1:
        if (person.lineage === lineage[2]) {
          return randomQualities();
        }
        person.qualities = qualities[1];
        break;
      case 2:
        person.qualities = qualities[2];
        break;
      case 3:
        if (person.lineage === lineage[0] || person.lineage === lineage[1]) {
          return randomQualities();
        }
        person.qualities = qualities[3];
        break;
      default:
        break;
    }
  } while (optionQualities < 0 || optionQualities > 3);

  return person.qualities;
}

function seleccionarCasa() {
  mostrarMensaje(
    "De acuerdo a tu lineage y tus qualities se te seleccionara una house"
  );
  mostrarMensaje("Seleccionando house...");
  if (person.lineage === lineage[0] || person.lineage === lineage[1]) {
    switch (person.qualities) {
      case qualities[0]:
        person.house = house[0];

        break;
      case qualities[1]:
        person.house = house[1];

        break;
      case qualities[2]:
        person.house = house[2];

        break;
      default:
        mostrarMensaje("Opcion no valida");
        break;
    }
  } else {
    switch (person.qualities) {
      case qualities[0]:
        person.house = house[0];

        break;
      case qualities[2]:
        person.house = house[2];

        break;
      case qualities[3]:
        person.house = house[3];

        break;
      default:
        mostrarMensaje("Opcion no valida");
        break;
    }
  }
}

function claseTransformaciones() {
  mostrarMensaje("Entraste a clase de transformaciones");
  const transformaciones = {
    nombreProfesor: "Kevin Slughorn",
    horario: "15:00",
    rastrearTransformacion: false, //true quiere decir que el boggart se esta transformando
    hechizoRiddikulus: function () {
      if (this.rastrearTransformacion) {
        mostrarMensaje(`Realizando el hechizo Riddikulus...`);
      } else {
        mostrarMensaje("No hay boggart presente");
      }
    },
    enfrentarBoggart: function (boggart) {
      mostrarMensaje(`Enfrentando al boggart
      El estado del boggart es: ${boggart}`);
      mostrarMensaje(`Realizamos el hechizo riddikulus`);
      this.hechizoRiddikulus();
      boggart = "boggart transformado";
      mostrarMensaje(`el resultado de la transformacion es ${boggart}`);
      mostrarMensaje("Has vencido al boggart");
    },
  };
  let boggartEjemplo = "boggart original";
  mostrarMensaje("Un boggart ha aparecido");
  transformaciones.rastrearTransformacion = true;
  transformaciones.enfrentarBoggart(boggartEjemplo);
  mostrarMensaje("Termino la clase de transformaciones");
}

function claseDefensaArtesOscuras() {
  mostrarMensaje("Entraste a clase de artes oscuras");
  const defensaContraLasArtesOscuras = {
    nombreProfesor: "Robinson Snape",
    horario: "17:00",
    generarAnimalPatronum: function () {
      mostrarMensaje("Seleccionando animal de patronum...");
      const animal = Math.floor(Math.random() * 8);

      switch (animal) {
        case 0:
          person.animalPatronum = "Murcielago";

          break;
        case 1:
          person.animalPatronum = "Toro";

          break;
        case 2:
          person.animalPatronum = "Gato";

          break;
        case 3:
          person.animalPatronum = "Cabra";

          break;
        case 4:
          person.animalPatronum = "Caballo";

          break;
        case 5:
          person.animalPatronum = "Conejo";

          break;
        case 6:
          person.animalPatronum = "Escorpion";

          break;
        case 7:
          person.animalPatronum = "Serpiente";

          break;
        default:
          mostrarMensaje("Opcion no valida");
          break;
      }
    },
  };
  defensaContraLasArtesOscuras.generarAnimalPatronum();
  mostrarMensaje("Termino la clase de defensa de artes oscuras");
}

function dementores() {
  mostrarMensaje(
    "En tu camino te has encontrado un dementor y solo puedes defenderte si tienes un animal patronum"
  );
  mostrarMensaje(person.animalPatronum);
  if (person.animalPatronum.length > 0) {
    mostrarMensaje("Te has defendido con tu animal patronum");
  } else {
    mostrarMensaje(
      "No tienes animal patronum no te puedes defender contra los dementores"
    );
  }
}

function clasePociones() {
  mostrarMensaje("Entraste a clase de pociones");
  const pociones = {
    nombreProfesor: "Liliana McGonagall",
    horario: "19:00",
    crisopos: 2,
    talloDeDescurainiaSophia: 1,
    tiempoPreparacion: 5, //minutos
    pocionFelixFelicis: 0,
    verMateriales: function () {
      mostrarMensaje(`Materiales:
      Crisopos = ${this.crisopos}
      Tallo de descurainia sophia ${this.talloDeDescurainiaSophia}`);
    },
    prepararPocion: function (
      crisopos,
      talloDeDescurainiaSophia,
      tiempoPreparacion
    ) {
      if (crisopos >= 2 && talloDeDescurainiaSophia >= 1) {
        if (tiempoPreparacion == this.tiempoPreparacion) {
          mostrarMensaje(`Has preparado correctamente "Pocion Felix Felicis"`);
          this.pocionFelixFelicis += 1;
        } else {
          mostrarMensaje(`El tiempo de preparacion debe ser de 5 minutos`);
          mostrarMensaje(`la pocion ha fallado y te has hecho danio`);
        }
      } else {
        mostrarMensaje(`No tienes los suficientes ingredientes para realizar la pocion
        Materiales necesarios:
        Crisopos x2
        Tallo de descurainia sophia x1
        Materiales en inventario:
        Crisopos = ${crisopos}
        Tallo de descurainia sophia = ${talloDeDescurainiaSophia}`);
        mostrarMensaje(`la pocion ha fallado y te has hecho danio`);
      }
      this.crisopos -= crisopos;
      this.talloDeDescurainiaSophia -= talloDeDescurainiaSophia;
    },
    usarPocionFelixFelicis: function () {
      if (this.pocionFelixFelicis >= 1) {
        const profesor1 = profesores.pociones;
        profesores.cambiarProfesor(profesor1);
        this.pocionFelixFelicis -= 1;
        mostrarMensaje("Cambiaste el profesor con una pocion de Felix Felicis");
      } else {
        mostrarMensaje(`No tienes suficientes pociones.
        Inventario de pociones:
        Pocion Felix Felicis = ${this.pocionFelixFelicis}`);
      }
    },
  };
  pociones.verMateriales();
  pociones.prepararPocion(
    pociones.crisopos,
    pociones.talloDeDescurainiaSophia,
    pociones.tiempoPreparacion
  );
  pociones.usarPocionFelixFelicis();
  mostrarMensaje("Has terminado la clase de pociones");
}

const profesores = {
  transformaciones: "Kevin Slughorn",
  herbologia: "Maria Umbridge",
  pociones: "Liliana McGonagall",
  encantamientos: "Jackie",
  defensaContraLasArtesOscuras: "Robinson Snape",
  animalesMagicos: "David Flich",
  historiaDeMagia: "Ronald Sprout",
  mostrarProfesores: function () {
    let message = "lista de profesores:";
    for (const key in profesores) {
      if (key == "mostrarProfesores" || key == "cambiarProfesor") {
        break;
      } else {
        message += `
        ${key}, profesor: ${profesores[key]}
        `;
      }
    }
    mostrarMensaje(message);
  },
  cambiarProfesor: function (profesor1) {
    mostrarMensaje(`Estas cambiando el profesor ${profesor1}`);
    const cambio = profesores.animalesMagicos;
    mostrarMensaje(
      `Has seleccionado cambiar el profesor ${profesor1} por ${cambio}`
    );
    for (const key in profesores) {
      if (profesores[key] === cambio) {
        profesores[key] = profesor1;
        console.log(profesores[key]);
      }
    }
    for (const key in profesores) {
      if (profesores[key] === profesor1) {
        profesores[key] = cambio;
        console.log(profesores[key]);
      }
    }
    mensajeExitoso("Se cambiaron los profesores exitosamente!!");
    this.mostrarProfesores();
  },
};

main();
