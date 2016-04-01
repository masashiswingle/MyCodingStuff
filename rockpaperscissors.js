<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello Worlds</title>
    <style>
.displayBox {
  border: 1px solid #000;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  / rewrite to just use margin /
  padding: 30px;
}
</head>

<script type="text/javascript">
var userChoice = prompt ("Do you choose rock, paper or scissors?") 
var computerChoice = Math.random();
if (computerChoice <= .33) {
    computerChoice = 'rock' ;
}else if (computerChoice >= .34 && computerChoice <= .66)
    {computerChoice = 'paper';
}else {
computerChoice = 'scissors';
}console.log (computerChoice) 
</script>