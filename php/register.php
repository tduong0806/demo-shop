<?php
    $u = $_POST['username'];
    $p = $_POST['password'];
    $cp = $_POST['cpassword'];
    if($p != $cp) {
        echo "<h1> Confirm password sai </h1>";
    } else {
        $sql = mysqli_connect("localhost", "root","","food");
        $q = mysqli_query($sql,"INSERT INTO users (id, username, password, name) VALUES (NULL, '$u', '$p', '$n');");
        echo "<h1> Dang ky thanh cong </h1>";
    }
?>