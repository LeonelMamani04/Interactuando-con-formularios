window.onload = function () {
    let titulo = document.querySelector(".moviesAddTitulo");
    let formulario = document.querySelector("#formulario");
    let article = document.querySelector("article");
    titulo.innerHTML = "AGREGAR PELÍCULA";
    titulo.classList.add("titulo");
    article.classList.add("fondoTransparente");
    formulario.classList.add("fondoCRUD");
  
    let form = document.querySelector("form.form");
    let errores = document.querySelector(".errores");
    let title = document.querySelector("#title");
    let rating = document.querySelector("#rating");
    let awards = document.querySelector("#awards");
    let release_date = document.querySelector("#release_date");
    let length = document.querySelector("#length");
    let genreID = document.querySelector("#genre_id");
  
    title.focus();
    let errors = [];
  
    title.addEventListener("blur", () => {
      switch (true) {
        case title.value == "":
          title.classList.add("is-invalid");
          errors.push("El Titulo no puede estar vacio");
          break;
        default:
          title.classList.remove("is-invalid");
          title.classList.add("is-valid");
          errors = errors.filter((elem) => elem !== "El Titulo no puede estar vacio");
          break;
      }
    });
  
    rating.addEventListener("blur", () => {
      switch (true) {
        case rating.value == "":
          rating.classList.add("is-invalid");
          errors.push("La calificación no puede estar vacia");
          break;
        case rating.value < 0 || rating.value > 10:
          rating.classList.add("is-invalid");
          errors.push("Solo valores entre 0 y 10");
          break;
        default:
          rating.classList.remove("is-invalid");
          rating.classList.add("is-valid");
          errors = errors.filter(
            (elem) =>
              elem !== "La calificación no puede estar vacia" ||
              elem !== "Solo valores entre 0 y 10"
          );
          break;
      }
    });
  
    awards.addEventListener("blur", () => {
      switch (true) {
        case awards.value == "":
          awards.classList.add("is-invalid");
          errors.push("El premio no puede estar vacio");
          break;
        case awards.value < 0 && awards.value > 10:
          awards.classList.add("is-invalid");
          errors.push("Solo valores entre 0 y 10");
          break;
        default:
          awards.classList.remove("is-invalid");
          awards.classList.add("is-valid");
          errors = errors.filter(
            (elem) =>
              elem !== "El premio no puede estar vacio" ||
              elem !== "Solo valores entre 0 y 10"
          );
          break;
      }
    });
  
    release_date.addEventListener("blur", () => {
      switch (true) {
        case release_date.value == "":
          release_date.classList.add("is-invalid");
          errors.push("La fecha no puede estar vacia");
          break;
        default:
          release_date.classList.remove("is-invalid");
          release_date.classList.add("is-valid");
          errors = errors.filter((elem) => elem !== "La fecha no puede estar vacia");
          break;
      }
    });
  
    length.addEventListener("blur", () => {
      switch (true) {
        case length.value == "":
          length.classList.add("is-invalid");
          errors.push("La duración no puede estar vacia");
          break;
        case length.value < 60 || length.value > 360:
          length.classList.add("is-invalid");
          errors.push("Solo valores entre 60 y 360");
          break;
        default:
          length.classList.remove("is-invalid");
          length.classList.add("is-valid");
          errors = errors.filter(
            (elem) =>
              elem !== "La duración no puede estar vacia" ||
              elem !== "Solo valores entre 60 y 360"
          );
          break;
      }
    });
  
    genreID.addEventListener("blur", () => {
      switch (true) {
        case !genreID.value.trim():
          genreID.classList.add("is-invalid");
          errors.push("Seleccione un genero");
          break;
        default:
          genreID.classList.remove("is-invalid");
          genreID.classList.add("is-valid");
          errors = errors.filter((elem) => elem !== "Seleccione un genero");
          break;
      }
    });
  
    form.addEventListener("submit", (e) => {
      errors = [];
      const FORM_ELEMENTS = e.target.elements;
      for (let index = 0; index < FORM_ELEMENTS.length - 1; index++) {
        const element = FORM_ELEMENTS[index];
        element.dispatchEvent(new Event("blur"));
      }
      if (errors.length > 0) {
        e.preventDefault();
        errores.classList.add("alert-warning");
        errores.innerHTML = "";
        for (let i = 0; i < errors.length; i++) {
          console.log(errors[i]);
          errores.innerHTML += "<li>" + errors[i] + "</li>";
        }
      } else {
        alert("La película se guardó correctamente");
      }
    });
  };
  