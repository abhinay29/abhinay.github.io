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

        if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone'])){
          $retVal['msg'] = 'empty';
          echo json_encode($retVal);
          die();
        }

        $data = [
          'name'      =>  $_POST['name'],
          'email'     =>  $_POST['email'],
          'phone'     =>  $_POST['phone'],
          'message'  =>  $_POST['message']
        ];
          
        $sendEmail = $clsMail->sendEnquiryForm($data);

        if($sendEmail){
          $retVal['msg'] = 'ok';
        }else{
          $retVal['msg'] = 'err';
        }
      
    break;

    case 'contact_form':

      if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone'])){
        $retVal['msg'] = 'empty';
        echo json_encode($retVal);
        die();
      }

      $data = [
        'name'      =>  $_POST['name'],
        'email'     =>  $_POST['email'],
        'phone'     =>  $_POST['phone'],
        'message'  =>  $_POST['message']
      ];
        
      $sendEmail = $clsMail->contactForm($data);

      if($sendEmail){
        $retVal['msg'] = 'ok';
      }else{
        $retVal['msg'] = 'err';
      }
    
    break;

  }

  echo json_encode($retVal);

?>