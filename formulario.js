 function agregar(){


    var tableBody = document.getElementById("tableBody");
    var Nombre = document.getElementById("nombre").value;
    var Apellido = document.getElementById("apellido").value;
    var DNI = document.getElementById("dni").value;
    var Email = document.getElementById("email").value;
    var TipodeEntrada = document.getElementById("Tipo").value;
        
        var newRow = tableBody.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell7 = newRow.insertCell(5);
        

        cell1.innerHTML = Nombre;
        cell2.innerHTML = Apellido;
        cell3.innerHTML = DNI;
        cell4.innerHTML = Email;
        cell5.innerHTML = TipodeEntrada;
        cell7.innerHTML = '<button onclick="compra()">Confirmar compra</button>';    

 }

 function compra(){
    alert("Su compra se ha realizado con exito");
 }
    