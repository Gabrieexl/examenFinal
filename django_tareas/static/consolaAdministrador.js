function editarUsuario(idEditar) {
    let userId = '';
    
    for (let i = 0; i < idEditar.length; i++) {
        if (!isNaN(idEditar[i])) {
            userId += idEditar[i];
        }
    }

    fetch(`/obtener_datos_usuario/${userId}/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('editNombreUsuario').value = data.first_name;
            document.getElementById('editApellidoUsuario').value = data.last_name;
            document.getElementById('editEmailUsuario').value = data.email;
            document.getElementById('editFechaIngreso').value = data.fechaIngreso;
            document.getElementById('editProfesionUsuario').value = data.profesionUsuario;
            document.getElementById('editNroCelular').value = data.nroCelular;

            document.getElementById('cargaId').innerHTML = data.id;
        })
}


function actualizarUsuario() {
    let idUsuario = document.getElementById('cargaId').innerHTML;
    let nroCelular = document.getElementById('editNroCelular').value;
    let profesionUsuario = document.getElementById('editProfesionUsuario').value;

    fetch(`/actualizar_datos_usuario/${idUsuario}/`, {
        method: 'POST',
        headers: {
            "X-Requested-With":"XMLHttpRequest",
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({
            id: idUsuario,
            nroCelular: nroCelular,
            profesionUsuario: profesionUsuario
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario actualizado:', data);

        let modalEditar = new bootstrap.Modal(document.getElementById('editarUsuario'));
        modalEditar.hide();
    })
    .catch(error => console.error('Error:', error));
}


function getCookie(name)
{
    let cookieValue = null;
    if(document.cookie && document.cookie !== "")
    {
        const cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++)
        {
            const cookie = cookies[i].trim();
            if(cookie.substring(0,name.length + 1) === (name + "="))
            {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue 
}


