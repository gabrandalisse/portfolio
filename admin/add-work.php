<?php 
  include_once('./templates/header.php'); 
  include_once('./templates/top-bar.php'); 
  include_once('./templates/nav.php'); 
?>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Agregar Trabajos</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Guardar un nuevo trabajo</h3>
        </div>

        <div class="card-body">
            <form role="form">
                <div class="card-body">

                    <div class="form-group">
                        <label for="workName">Nombre</label>
                        <input type="text" class="form-control" id="workName" placeholder="Ingrese el nombre del trabajo">
                    </div>

                    <div class="form-group">
                        <label>Descripcion</label>
                        <textarea class="form-control" rows="3" placeholder="Enter work description"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="workDeploy">URL Deployado</label>
                        <input type="text" class="form-control" id="workDeploy" placeholder="Ingrese la URL del proyecto deployado">
                    </div>

                    <div class="form-group">
                        <label for="workRepository">URL Repositorio</label>
                        <input type="text" class="form-control" id="workRepository" placeholder="Ingrese la URL del repositorio del proyecto">
                    </div>

                    <div class="form-group">
                      <label for="exampleInputFile">Imagen</label>
                      <div class="input-group">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" id="exampleInputFile">
                            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                          </div>
                      </div>
                    </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>

        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

<?php 
  include_once('./templates/footer.php'); 
?>