
/* $(function() {
    $( "#dialog-3" ).dialog({
       autoOpen: false, 
       hide: "puff",
       show : "slide",
       height: 200      
    });
    $( "#opener-3" ).click(function() {
       $( "dialog-3" ).dialog( "open" );
    });
 });*/
/*
$(function() {
    var dialog, form,
 
      emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      name = $( "#name" ),
      email = $( "#email" ),
      password = $( "#password" ),
      allFields = $( [] ).add( name ).add( email ).add( password ),
      tips = $( ".validateTips" );
 
    function addUser() {
      var valid = true;
      allFields.removeClass( "ui-state-error" );

        $( "#users tbody" ).append( "<tr>" +
          "<td>" + name.val() + "</td>" +
          "<td>" + email.val() + "</td>" +
          "<td>" + password.val() + "</td>" +
        "</tr>" );
        dialog.dialog( "close" );
    }
 
    dialog = $( "#salarydetails" ).dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      buttons: {
        "Create an account": addUser,
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addUser();
    });
 
    $( "#create-user" ).button().on( "click", function() {
      dialog.dialog( "open" );
    });
  });*/
/*$(function () {
        $('#salaryDetails').click(function () {
            var overlay = $('<div id="overlay"></div>');
            alert('inside js')
            if (overlay == null) {
                $("#salaryDet").validationEngine('attach', { promptPosition: "topRight" });
                alert('overlay is null.');
            }
            else {
                overlay.show();
                alert('overlay is not null.');
                overlay.appendTo(document.body);
                alert("overlay: "+overlay);
                $('.popup').show();
                alert("popup is showing.");
                $('.close').click(function () {
                    $('.popup').hide();
                    overlay.appendTo(document.body).remove();
                    return false;
                    alert("end of close");
                });
                $('.x').click(function () {
                	alert("inside x.");
                    $('.popup').hide();
                    overlay.appendTo(document.body).remove();
                    return false;
                    alert("end of x");
                });
                return false;
            }
        });
    });*/
/*var modalWin = new CreateModalPopUpObject();

function ShowNewPage() {
	
	 var callbackFunctionArray = new Array(insertData,backPage);
	 modalWin.ShowURL('http://localhost:8080/TaxCalculator/detailsSalary',800,800,'Salary Details',null,callbackFunctionArray);
 }

function backPage() {
	
	modalWin.HideModalPopUp();
	//modalWin.ShowMessage(msg,200,400,'User Information',null,null);
}

function insertData() {
	
	
}*/

