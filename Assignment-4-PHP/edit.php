<?php
include 'db.php';

$id = $_GET['id'];
$data = $conn->query("SELECT * FROM student WHERE id=$id")->fetch_assoc();

if(isset($_POST['update'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dept = $_POST['department'];

    $conn->query("UPDATE student SET 
        name='$name', email='$email', mobile='$mobile', department='$dept'
        WHERE id=$id");

    header("Location: index.php");
}
?>

<form method="POST">
    Name: <input type="text" name="name" value="<?= $data['name'] ?>"><br>
    Email: <input type="text" name="email" value="<?= $data['email'] ?>"><br>
    Mobile: <input type="text" name="mobile" value="<?= $data['mobile'] ?>"><br>
    Department: <input type="text" name="department" value="<?= $data['department'] ?>"><br>
    <input type="submit" name="update" value="Update">
</form>