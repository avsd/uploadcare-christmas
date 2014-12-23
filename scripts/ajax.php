<?php
/* 
  This script is part of XMAS Season template page.
  This script has been created especially for this template and shall not be used or sold
  in other places then envato market as a part of XMAS Season template page.
  Author: Tomas Dostal - webakery.asia
*/

// E-mail subscribing function
if ($_POST["send"]){
  if (check_email($_POST["email"]))
  {
      // ===== THIS IS WHERE YOUR SCRIPT FOR SAVING EMAIL ADDRESS SHOULD BE ===== //
      
      // ===== THIS IS WHERE YOUR SCRIPT FOR SAVING EMAIL ADDRESS SHOULD BE ===== //
      
      echo "You have been subscribed!";
      
      $headers = "From: xmas@webakery.aisa\r\n";
      $headers .= "Reply-To: noreply.webakery.asia\r\n";
      $headers .= "Return-Path: noreply.webakery.asia\r\n";
      
      $message = "Hello!\r\n";
      $message .= "Christmas are almost here and we will have a lot of amazing offers!\r\n";
      $message .= "By subscribing you agree that we will send you our special offers.\r\n\r\n\r\n";
      $message .= "Thank you and Regards from XMAS Season webpage template,\r\n";
      $message .= "webakery.asia";
  
      mail($_POST["email"],"You have been subscribed to XMAS Season web template!",$message,$headers);
  
  } 
}

function check_email($email){
  // Rule to check if email is valid
  $regexp = '/^[^\x00-\x20()<>@,;:\\".[\]\x7f-\xff]+(?:\.[^\x00-\x20()<>@,;:\\".[\]\x7f-\xff]+)*\@[^\x00-\x20()<>@,;:\\".[\]\x7f-\xff]+(?:\.[^\x00-\x20()<>@,;:\\".[\]\x7f-\xff]+)+$/i';
  return preg_match($regexp, $email);
}