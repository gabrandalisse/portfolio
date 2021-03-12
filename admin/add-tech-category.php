<?php 
  // include_once('./functions/functions.php'); 
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
            <h1>Add Category</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Save a new technology category</h3>
        </div>

        <div class="card-body">
            <form role="form" name="add-tech-cat" id="add-tech-cat" method="post" action="./functions/insert-tech-category.php">
                <div class="card-body">
                    <div class="form-group">
                        <label for="catName">Name</label>
                        <input type="text" class="form-control" id="catName" name="catName" placeholder="Insert the name of the category">
                    </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <input type="hidden" name="add-tech-category" value="1">
                  <button type="submit" class="btn btn-primary">
                    <div class="spinner-grow spinner-grow-sm" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="btn-text">
                      Save
                    </div>
                  </button>
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