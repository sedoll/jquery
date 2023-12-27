<?
	$host = 'localhost';  
	$user = 'root';  //db 아이디
	$pw = 'root';  //db 비밀번호
	$dbName = 'myService';  //db명
	$mysqli = new mysqli($host, $user, $pw, $dbName);  //db에 접속
	
	$userId = $_POST['userId'];
	$userName = $_POST['userName'];
	$pwd = $_POST['pwd'];
	$pwdConfirm = $_POST['pwdConfirm'];

   	$query = "insert into 회원테이블명(id, pwd, name)";  //id, pwd, name은 테이블항목명
   	$query = $query . "values('$userId','$pwd','$userName')";

	if($mysqli->query($query)){
	  echo '회원가입이 성공적으로 끝났습니다.';
	  //회원가입이 성공적으로 이루어졌을 경우 이전 페이지로 이동합니다.
	  echo ("<script language=javascript> history.go(-1);</script>");
	} else {
	  echo '회원가입이 실패하였습니다.';
	  //실패시 다시 회원가입 페이지로 이동합니다.
	  echo ("<script language=javascript> location.href='add_form.html'; </script>");
	}
?>