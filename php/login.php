<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = mysqli_connect("localhost", "root","","users");
    $q = mysqli_query($sql,"select * from users where username='$username' and password='$password'");
    if(mysqli_num_rows($q)>0) {
        echo "<h1> Dang nhap thanh cong </h1>";
    } else {
        echo "<h1> Dang nhap that bai </h1>";
    }
?>