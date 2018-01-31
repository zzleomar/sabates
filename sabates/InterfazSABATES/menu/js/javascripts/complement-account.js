$(document).ready(function()
{
    $('#btn-account').on('click', function()
    {
        var account, description, status, error = false;

        account = $('#input-account').val();
        description = $('#input-description').val();
        status = $('#select-status').val();


        if(account==='')
        {
            $('#error-account').removeClass('hide');
            error = true;
        }
        else
        {
            $('#error-account').addClass('hide');
        }

        if(description==='')
        {
            $('#error-description').removeClass('hide');
            error = true;
        }
        else
        {
            $('#error-description').addClass('hide');
        }

        if(status==='0')
        {
            $('#error-status').removeClass('hide');
            error = true;
        }
        else
        {
            $('#error-status').addClass('hide');
        }

        if(error)
        {
            $('#message-box').hide();
        }
        else
        {
            $('#message-box').show();
        }
    });

    $('#btn-aceptar').on('click', function()
    {
        
        alert("FRANCISCO DEBES HACER LA LLAMDA A LA BASE DE DATOS PARA VALIDAR QUE SE GUARDO LA CUENTA");

            var x = prompt('RESULTADO DE LA CONSULTA');

            if(x=='no')
            {
                $('#message-box').hide();
                $('#message-box-success').hide();
                alert("Error de conexion")
            }
            else
            {
                $('#message-box-success').show();
                $('#message-box').hide();
            }
    });    

    $("#input-account").on('blur',function()
    {
        
        var account, error = false;

        account = $('#input-account').val();
        

        if(account==='')
        {
            $('#error-account').removeClass('hide');
            error = true;
        }
        else
        {
            $('#error-account').addClass('hide');
        }

        if(Number.isInteger(parseInt(account))==false)
        {
            $('#error-inval-account').removeClass('hide');
            error = true;
      // console.log(Number.isInteger(parseInt(account)));
        }
        else
        {
           $('#error-inval-account').addClass('hide');
        }

        if(!error){
            alert("FRANCISCO DEBES HACER LA LLAMDA A LA BASE DE DATOS PARA VALIDAR EL NUMERIO DE LA CUENTA");

            var x = prompt('RESULTADO DE LA CONSULTA');

            if(x=='si')
            {
                $('#error-exist-account').removeClass('hide');
                $('#error-account').hide();
                error = true;
            }
            else
            {
                $('#error-exist-account').addClass('hide');
            }
        }   
    });
    $("#input-account").on('change',function()
    {
        
        var account, error = false;

        account = $('#input-account').val();
        
        if(Number.isInteger(parseInt(account))==false)
        {
            $('#error-inval-account').removeClass('hide');
            $('#error-exist-account').hide();
            error = true;
        }
        else
        {
           $('#error-inval-account').addClass('hide');
        }
    });
});