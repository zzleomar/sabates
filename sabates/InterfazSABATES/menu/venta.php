<!DOCTYPE html>
<html lang="es">
    <head>        
        <!-- META SECTION -->
        <title>SABATES</title>            
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="icon" href="img/logoico.ico" type="image/x-icon" />
        <!-- END META SECTION -->
                        
        <!-- CSS INCLUDE -->        
        <link rel="stylesheet" type="text/css" id="theme" href="css/theme-default.css"/>
        <!-- EOF CSS INCLUDE -->                 
    </head>
    <body>
        
            <!-- START PAGE CONTAINER -->
       <div class="page-container">
            <?php include("inclu/head.html");?> 
            <!-- START PAGE SIDEBAR -->
                <?php include("inclu/menu.html");?> 
            <!-- END PAGE SIDEBAR -->
            
            <!-- PAGE CONTENT -->
            <div class="page-content">
               <?php include("inclu/menu_sup.html");?>
               <?php include("venta/venta.html");?>
            </div>
        <!-- END PAGE CONTAINER -->
        
        <!-- MESSAGE BOX-->
        <div class="message-box animated fadeIn" data-sound="alert" id="mb-signout">
            <div class="mb-container">
                <div class="mb-middle">
                    <div class="mb-title"><span class="fa fa-sign-out"></span>Cerrar <strong>Sesión</strong> ?</div>
                    <div class="mb-content">
                        <p>Estás seguro de cerrar sesión?</p>                    
                        <p>Presione No para continuar trabajando. Presione Sí para salir del sistema.</p>
                    </div>
                    <div class="mb-footer">
                        <div class="pull-right">
                            <a href="pages-login.html" class="btn btn-success btn-lg">Sí</a>
                            <button class="btn btn-default btn-lg mb-control-close">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     <div class="footer">
         <?php include("inclu/footer.html");?>
     </div>   
        <!-- END MESSAGE BOX-->

        <!-- START PRELOADS -->
      <audio id="audio-alert" src="audio/alert.mp3" preload="auto"></audio>
        <audio id="audio-fail" src="audio/fail.mp3" preload="auto"></audio>
        <!-- END PRELOADS -->                      

    <!-- START SCRIPTS -->
        <!-- START PLUGINS -->
        <script type="text/javascript" src="js/plugins/jquery/jquery.min.js"></script>
        <script type="text/javascript" src="js/plugins/jquery/jquery-ui.min.js"></script>
        <script type="text/javascript" src="js/plugins/bootstrap/bootstrap.min.js"></script>        
        <!-- END PLUGINS -->
        
        <!-- START THIS PAGE PLUGINS-->        
        <script type='text/javascript' src='js/plugins/icheck/icheck.min.js'></script>
        <script type="text/javascript" src="js/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js"></script>
        
        <script type="text/javascript" src="js/plugins/datatables/jquery.dataTables.min.js"></script>
          <!-- END THIS PAGE PLUGINS-->  
        
        <!-- START TEMPLATE -->
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>       
        <!-- END TEMPLATE -->

        <!-- PDF -->    
        <script>
            $(document).ready(function()
        {
            $('#pdf').on('click', function(){
                var doc = new jsPDF()
                doc.text('Hello world!', 10, 10)
                doc.save('a4.pdf')
            //doc.save=('prueba.pdf'); console.log("hola");
            });
        });
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.debug.js"></script>
        <!-- END PDF -->
    <!-- END SCRIPTS -->         
    </body>
</html>