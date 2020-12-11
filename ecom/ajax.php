<?php

  $retVal = array();

  if(!isset($_POST['do'])){
    header('location: ./');
  }else{
    $do = $_POST['do'];
  }
  
  include 'clsMail.php';
  
  $clsMail = new clsMail();
  
  switch($do) {
    
    case 'enq_form':

        $data = [
          'name'      =>  $_POST['name'],
          'email'     =>  $_POST['email'],
          'phone'     =>  $_POST['phone']
        ];
          
        $sendEmail = $clsMail->sendEnquiryForm($data);

        if($sendEmail){
          $retVal['msg'] = 'ok';
        }else{
          $retVal['msg'] = 'err';
        }
      
    break;

  }

  echo json_encode($retVal);

?>