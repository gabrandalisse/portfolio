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
            <h1>Agregar Categoría</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Guardar una nueva categoría de tecnología</h3>
        </div>

        <div class="card-body">
            <form role="form">
                <div class="card-body">
                    <div class="form-group">
                        <label for="catName">Nombre</label>
                        <input type="text" class="form-control" id="catName" placeholder="Ingrese el nombre de la categoría">
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