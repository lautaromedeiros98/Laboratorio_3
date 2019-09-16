<?php

if(isset($_SESSION["usuario"]) == "ok"){

}
else{
    header("location:login.php");
}