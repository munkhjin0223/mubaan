<?php

/* ******************************************************** */
/* Please check the help file to set correctly this file :) */
/* ******************************************************** */

// MailChimp API Key findable in your Mailchimp's dashboard
$API_KEY =  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// MailChimp List ID  findable in your Mailchimp's dashboard
$LIST_ID =  "XXXXXXXXXX";

// After $_SERVER["DOCUMENT_ROOT"]." , write the path to your .txt to save the emails of the subscribers
$STORE_FILE = $_SERVER["DOCUMENT_ROOT"]."/subscription-list.txt";

/* ************************************ */
// Don't forget to check the path below
/* ************************************ */

include('MailChimp.php');

/* ***************************************************** */
// For the part below, no interventions are required
/* ***************************************************** */

if($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["email"])) {

	$email = $_POST["email"];

	header('HTTP/1.1 200 OK');
	header('Status: 200 OK');
	header('Content-type: application/json');

	// Checking if the email writing is good
	if(filter_var($email, FILTER_VALIDATE_EMAIL)) {

			$MailChimp = new \Drewm\MailChimp($API_KEY);

			$result = $MailChimp->call('lists/subscribe', array(
	          'id'                => $LIST_ID,
	          'email'             => array('email'=>$email),
	          'double_optin'      => false,
	          'update_existing'   => true,
	          'replace_interests' => false,
	          'send_welcome'      => true,
	      ));

			// SUCCESS SENDING
			if($result["email"] == $email) {
				echo json_encode(array(
						"status" => "success"
					));
			// ERROR SENDING
			} else {
				echo json_encode(array(
						"status" => "error",
						"type" => $result["name"]
					));
			}

	// ERROR DURING THE VALIDATION
	} else {
		echo json_encode(array(
				"status" => "error",
				"type" => "ValidationError"
			));
	}
} else {
	header('HTTP/1.1 403 Forbidden');
	header('Status: 403 Forbidden');
}

?>
