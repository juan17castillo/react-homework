import React from "react";

const CreateVenue = () => {
  return (
    <div className="container text-center">
      <h1 className="my-5">Crear sede</h1>
      <div className="card col-md-12 py-5 my-5">
        <form>
          <div class="form-row col-md-12">
            <div class="form-group col-md-6">
              <label for="inputText">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="inputText"
                placeholder="Jhon Doe"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputTel">Teléfono</label>
              <input
                type="tel"
                class="form-control"
                id="inputTel"
                placeholder="(+57) 555 555 55 55"
              />
            </div>
          </div>
          <div class="form-row col-md-12">
            <div class="form-group col-md-4">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-8">
              <label for="inputAddress2">Dirección</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Avenida 555 calle 55"
              />
            </div>
          </div>
          <div class="form-row col-md-12">
            <div class="form-group col-md-8">
              <label for="inputText">Ciudad</label>
              <input
                type="text"
                class="form-control"
                id="inputText"
                placeholder="Cali"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputText">Código Zip</label>
              <input
                type="text"
                class="form-control"
                id="inputText"
                placeholder="760026"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Activa
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Crear sede
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateVenue;
