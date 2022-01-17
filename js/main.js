alert("A continuación ingrese sus datos para efectuar la reserva");

const persona = {
    nombre: prompt("Ingrese su Nombre"),
    apellido: prompt("Ingrese su Apellido"),
    telefono: +prompt("Ingrese su Telefono"),
    direccion: prompt("Ingrese su Dirección"),
    datosPersona: function() {
      return "Nombre: " + this.nombre + " " + this.apellido + "\nTelefono: " + this.telefono + "\nDirección: " + this.direccion;
    }
  };

  alert(persona.datosPersona());





