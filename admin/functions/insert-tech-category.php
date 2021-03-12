<?php
    include_once('./functions.php');

    if( isset($_POST['add-tech-category'])) {
        $name = $_POST['catName'];
    
        try {
            $stmt = $conn->prepare("INSERT INTO tech_categories (name) VALUES (?)");
            $stmt->bind_param("s", $name);
            $stmt->execute();

            if($stmt->affected_rows) {
                $response = array(
                    'response' => 'success'
                );
            } else {
                $response = array(
                    'response' => 'error'
                );
            }
            $stmt->close();
            $conn->close();
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
        }

        die(json_encode($response));
    }