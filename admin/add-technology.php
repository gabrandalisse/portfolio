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
            <h1>Agregar Tecnologías</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Guardar una nueva tecnología</h3>
        </div>

        <div class="card-body">
            <form role="form">
                <div class="card-body">

                    <div class="form-group">
                        <label for="techName">Nombre</label>
                        <input type="text" class="form-control" id="techName" placeholder="Ingrese el nombre de la tecnología">
                    </div>

                    <div class="form-group">
                        <label>Categoría</label>
                        <select class="form-control">
                          <option>option 1</option>
                          <option>option 2</option>
                          <option>option 3</option>
                          <option>option 4</option>
                          <option>option 5</option>
                        </select>
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