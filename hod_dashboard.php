<!DOCTYPE html>
<html>
<head>
    <title>Upload Notice</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="card">
    

<h2>📢 Upload Notice</h2>

<form action="upload.php" method="post" enctype="multipart/form-data">

<select name="category">

<option>Sports</option>
<option>Placement</option>
<option>Academics</option>
<option>Cultural</option>
<option>Intra College</option>
<option>Inter College</option>

</select>

<br><br>

<input type="text" name="title" placeholder="Notice Title">

<br><br>

<textarea name="description" placeholder="Description"></textarea>

<br><br>

<input type="date" name="notice_date">

<br><br>

<input type="file" name="file">

<br><br>

<button type="submit">Upload</button>


</form>

</div>

</body>
</html>
