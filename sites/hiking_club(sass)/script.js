function changeTheme(){
  let headContent = document.getElementsByTagName('head')[0].innerHTML.split('\n');
  if (headContent[4] === '    <link rel="stylesheet" type="text/css" href="css/style1.css">'){
    headContent[4] = '    <link rel="stylesheet" type="text/css" href="css/style2.css">';
  }
  else{
    headContent[4] = '    <link rel="stylesheet" type="text/css" href="css/style1.css">';
  }
  document.getElementsByTagName('head')[0].innerHTML = headContent.join('\n');
}