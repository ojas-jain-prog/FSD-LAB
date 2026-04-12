<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>Student CRUD</title>
</head>
<body>

<h2>Add Student</h2>

<form method="POST">
    Name: <input type="text" name="name"><br>
    Email: <input type="text" name="email"><br>
    Mobile: <input type="text" name="mobile"><br>
    Department: <input type="text" name="department"><br>
    <input type="submit" name="submit">
</form>

<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dept = $_POST['department'];

    $conn->query("INSERT INTO student(name,email,mobile,department)
                  VALUES('$name','$email','$mobile','$dept')");
}
?>

<h2>Student List</h2>

<table border="1">
<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Mobile</th>
    <th>Department</th>
    <th>Actions</th>
</tr>

<?php
$result = $conn->query("SELECT * FROM student");

while($row = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$row['name']}</td>
        <td>{$row['email']}</td>
        <td>{$row['mobile']}</td>
        <td>{$row['department']}</td>
        <td>
            <a href='edit.php?id={$row['id']}'>Edit</a>
            <a href='delete.php?id={$row['id']}'>Delete</a>
        </td>
    </tr>";
}
?>

</table>

</body>
</html>