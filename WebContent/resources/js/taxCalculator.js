$(function() { 
	
	//alert("date");
	$( "#dateOfBirth" ).datepicker({ dateFormat : 'dd-M-yy' });
});

function netIncome(){
	
	var totalIncome = getTotalIncome();
	//alert("totalIncome: "+totalIncome);
	$('#totalIncome').val(totalIncome);
	
	// values from view page
	var gender = $('input[name=gender]:checked', '#taxPayerInfo').val();
	//alert("gender: "+gender);
	var areaOfResidence = $('#areaOfResidence').val();
	//alert("areaOfResidence: "+areaOfResidence);
	var date = $("#dateOfBirth").val();
	//alert("date: "+date);
	var dateString = date.split('-').join('/');

    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
	//Tax calculation
    var tax = 0;
       	
	if(gender == "male" && age <65) {
		
		if(totalIncome <= 220000) {
			
			tax = 0;
		}
		else if(totalIncome <= 520000) {
			
			tax = ((totalIncome - 220000) * 10) / 100;
			//alert("totalIncome <= 520000: "+tax);
			if((tax < 3000) && (areaOfResidence == 'City Corporation Areas')) {
				
				tax = 3000;
			}
			else if((tax < 2000) && (areaOfResidence == 'District Town Areas')) {
				
				tax = 2000;
			}
			else if((tax < 1000) && (areaOfResidence == 'Other Areas')) {
				
				tax = 1000;
			}
		}
		else if(totalIncome <= 920000) {
			
			tax = 30000 + (((totalIncome - 520000) * 15) / 100);
			//alert("totalIncome <= 920000: "+tax);
		}
		else if(totalIncome <= 1420000) {
			
			tax = 90000 + (((totalIncome - 920000) * 20) / 100);
		}
		else if(totalIncome <= 4420000) {
			
			tax = 190000 + (((totalIncome - 1420000) * 25) / 100);
		}
		else {
			
			tax = 940000 + (((totalIncome - 4420000) * 30) / 100);
		}
	}
	else if((gender == "female") || (gender == "male" && age >= 65)) { 
		
		if(totalIncome <= 275000){
			
			tax = 0;
		}
		else if(totalIncome <= 575000) {
			
			tax = ((totalIncome - 275000) * 10) / 100;
			if((tax < 3000) && (areaOfResidence == 'City Corporation Areas')) {
				
				tax = 3000;
			}
			else if((tax < 2000) && (areaOfResidence == 'District Town Areas')) {
				
				tax = 2000;
			}
			else if((tax < 1000) && (areaOfResidence == 'Other Areas')) {
				
				tax = 1000;
			}
		}
		else if(totalIncome <= 975000) {
			
			tax = 30000 + (((totalIncome - 575000) * 15) / 100);
		}
		else if(totalIncome <= 1475000) {
			
			tax = 90000 + (((totalIncome - 975000) * 20) / 100);
		}
		else if(totalIncome <= 4475000) {
			
			tax = 190000 + (((totalIncome - 1475000) * 25) / 100);
		}
		else {
			
			tax = 940000 + (((totalIncome - 4475000) * 30) / 100);
		}
	}
	//alert("tax at last: "+tax);
	$('#taxLeviableOnTotalIncome').val(tax);
	$('#netTaxPayable').val(tax);
}

function getTotalIncome(){
	
	var salary = 0;
	salary = $('#salary').val();
	//alert(salary);
	
	var interestOnSecurity = 0;
	interestOnSecurity = $('#interestOnSecurity').val();
	
	var incomeFromHouseProperty = 0;
	incomeFromHouseProperty = $('#incomeFromHouseProperty').val();
	
	var agriculturalIncome = 0;
	agriculturalIncome = $("#agriculturalIncome").val();
	
	var incomeFromBusinessProfession = 0;
	incomeFromBusinessProfession = $('#incomeFromBusinessProfession').val();
	
	var totalShareOfTheAssessee = 0;
	totalShareOfTheAssessee = getTotalShareOfTheAssessee();
	
	var incomeOfTheSpouse = 0;
	incomeOfTheSpouse = $('#incomeOfTheSpouse').val();
	
	var capitalGain = 0;
	capitalGain = $('#capitalGain').val();
	
	var incomeFromOtherSource = 0;
	incomeFromOtherSource = $('#incomeFromOtherSource').val();
	
	var totalIncome = 0;
	totalIncome = parseInt(salary) + parseInt(interestOnSecurity) + parseInt(incomeFromHouseProperty) + 
				  parseInt(agriculturalIncome) + parseInt(incomeFromBusinessProfession) +  totalShareOfTheAssessee + parseInt(incomeOfTheSpouse)+
				  parseInt(capitalGain) + parseInt(incomeFromOtherSource);
	return (totalIncome);
}

function shareOfTheAssessee() {
	
	var totalShareOfTheAssessee = getTotalShareOfTheAssessee();
	$('#totalShareOfTheAssessee').val(totalShareOfTheAssessee);
	netIncome();
	//alert("totalShareOfTheAssessee: "+totalShareOfTheAssessee);
	
}
function getTotalShareOfTheAssessee() {
	
	var shareOfTheAssessee1 = 0;
	shareOfTheAssessee1 = $('#shareOfTheAssessee1').val();
	//alert(shareOfTheAssessee1);
	
	var shareOfTheAssessee2 = 0;
	shareOfTheAssessee2 = $('#shareOfTheAssessee2').val();
	
	var shareOfTheAssessee3 = 0;
	shareOfTheAssessee3 = $('#shareOfTheAssessee3').val();
	
	var shareOfTheAssessee4 = 0;
	shareOfTheAssessee4 = $('#shareOfTheAssessee4').val();
	
	var shareOfTheAssessee5 = 0;
	shareOfTheAssessee5 = $('#shareOfTheAssessee5').val();
	
	var totalShareOfTheAssessee =  0;
	totalShareOfTheAssessee = parseInt(shareOfTheAssessee1) + parseInt(shareOfTheAssessee2) +
							  parseInt(shareOfTheAssessee3)+ parseInt(shareOfTheAssessee4) + 
							  parseInt(shareOfTheAssessee5);
	//alert("shareOfTheAssessee5: "+shareOfTheAssessee5);
	//alert("totalShareOfTheAssessee: "+totalShareOfTheAssessee);
	return totalShareOfTheAssessee;
	
}

function getInvestment(){
	
	var totalIncome = $('#totalIncome').val();
	//alert("totalIncome: "+totalIncome);
	
	var fixedAmount = 15000000;
	//alert("fixedAmount: "+fixedAmount);
	
	var investment = $('#investment').val();
	//alert("investment: "+investment);
	
	var $30_OfTotalIncomeOf = (totalIncome * 30)/100;
	
	// values from view page
	var gender = $('input[name=gender]:checked', '#taxPayerInfo').val();
	//alert("gender: "+gender);
	var areaOfResidence = $('#areaOfResidence').val();
	//alert("areaOfResidence: "+areaOfResidence);
	var date = $("#dateOfBirth").val();
	//alert("date: "+date);
	var dateString = date.split('-').join('/');

    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    //alert("tax: "+tax);
	//Tax calculation
    var tax = 0;
       	
	if(gender == "male" && age <65) {
		
		if(totalIncome <= 220000) {
			
			tax = 0;
		}
		else if(totalIncome <= 520000) {
			
			tax = ((totalIncome - 220000) * 10) / 100;
			//alert("totalIncome <= 520000: "+tax);
			if((tax < 3000) && (areaOfResidence == 'City Corporation Areas')) {
				
				tax = 3000;
			}
			else if((tax < 2000) && (areaOfResidence == 'District Town Areas')) {
				
				tax = 2000;
			}
			else if((tax < 1000) && (areaOfResidence == 'Other Areas')) {
				
				tax = 1000;
			}
		}
		else if(totalIncome <= 920000) {
			
			tax = 30000 + (((totalIncome - 520000) * 15) / 100);
			//alert("totalIncome <= 920000: "+tax);
		}
		else if(totalIncome <= 1420000) {
			
			tax = 90000 + (((totalIncome - 920000) * 20) / 100);
		}
		else if(totalIncome <= 4420000) {
			
			tax = 190000 + (((totalIncome - 1420000) * 25) / 100);
		}
		else {
			
			tax = 940000 + (((totalIncome - 4420000) * 30) / 100);
		}
	}
	else if((gender == "female") || (gender == "male" && age >= 65)) { 
		
		if(totalIncome <= 275000){
			
			tax = 0;
		}
		else if(totalIncome <= 575000) {
			
			tax = ((totalIncome - 275000) * 10) / 100;
			if((tax < 3000) && (areaOfResidence == 'City Corporation Areas')) {
				
				tax = 3000;
			}
			else if((tax < 2000) && (areaOfResidence == 'District Town Areas')) {
				
				tax = 2000;
			}
			else if((tax < 1000) && (areaOfResidence == 'Other Areas')) {
				
				tax = 1000;
			}
		}
		else if(totalIncome <= 975000) {
			
			tax = 30000 + (((totalIncome - 575000) * 15) / 100);
		}
		else if(totalIncome <= 1475000) {
			
			tax = 90000 + (((totalIncome - 975000) * 20) / 100);
		}
		else if(totalIncome <= 4475000) {
			
			tax = 190000 + (((totalIncome - 1475000) * 25) / 100);
		}
		else {
			
			tax = 940000 + (((totalIncome - 4475000) * 30) / 100);
		}
	}
	//alert("tax at last: "+tax);
	
	if((investment < $30_OfTotalIncomeOf) && (investment < fixedAmount)) {
		
		$('#taxRebate').val((investment * 15)/100);
		$('#taxRebateTotal').val((investment * 15)/100);
		$('#netTaxPayable').val(tax-((investment * 15)/100));
	}
	else if(($30_OfTotalIncomeOf < investment) && ($30_OfTotalIncomeOf < fixedAmount)) {
		
		$('#taxRebate').val(($30_OfTotalIncomeOf * 15)/100);
		$('#taxRebateTotal').val(($30_OfTotalIncomeOf * 15)/100);
		$('#netTaxPayable').val(tax-(($30_OfTotalIncomeOf * 15)/100));
	}
	else {
		
		$('#taxRebate').val((fixedAmount * 15)/100);
		$('#taxRebateTotal').val((fixedAmount * 15)/100);
		$('#netTaxPayable').val(tax-((fixedAmount * 15)/100));
	}	
	
}

function getNetTaxPayable() {
	
	var paidTax = $('#taxAlreadyPaid').val();
	var netTaxPayable = $('#netTaxPayable').val();
	$('#netTaxPayable').val(netTaxPayable - paidTax);
}
function showData() {
	
	var gender = $('input[name=gender]:checked', '#taxPayerInfo').val();
	var tinType = $('input[name=tinType]:checked', '#taxPayerInfo').val();
	var govtEmployee = 0;
	var disable = 0;
	
	if ($('#govtEmployee').is(":checked"))
	{
		govtEmployee = $('#govtEmployee').val();
	}
	if ($('#disable').is(":checked"))
	{
		disable = $('#disable').val();
	}

	var areaOfResidence = $('#areaOfResidence').val();
	var date = $("#dateOfBirth").val();
	
	//alert("date: "+date);
	var dateString = date.split('-').join('/');
	//alert("DateString: "+dateString);
	
    var today = new Date();
    //alert("today: "+today);
    var birthDate = new Date(dateString);
    //alert("birthDate: "+birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }

//    function netSalary() {
//    	alert("hgfhgfhg");
//    	var totalSalary = getTotalSalary();
//    	alert("inside netSalary: "+totalSalary);
//    	$("netTaxableIncomeFromSalary1").val(totalSalary);
//    }
    /*function insertData() {
    	
    	var totalSalary = getTotalSalary();
    	alert("inside insertData: "+totalSalary);
    	$("salaryDetails").val(totalSalary);
    }
    function getTotalSalary() {
    	
    	var basicPay = $("basicPay1").val();
    	var specialPay = $("specialPay1").val();
    	var dearnessAllowance = $("dearnessAllowance1").val();
    	var conveyanceAllowance = $("conveyanceAllowance1").val();
    	var houseRentAllowance = $("houseRentAllowance1").val();
    	var medicalAllowance = $("medicalAllowance1").val();
    	var servantAllowance = $("servantAllowance1").val();
    	var leaveAllowance = $("leaveAllowance1").val();
    	var honorarium = $("honorarium1").val();
    	var overtimeAllowance = $("overtimeAllowance1").val();
    	var bonus = $("bonus1").val();
    	var otherAllowance = $("otherAllowance1").val();
    	var empContributeToPservantAllowancerovidentFund = $("empContributeToProvidentFund1").val();
    	var interestAccruedOnProvidentFund = $("interestAccruedOnProvidentFund1").val();
    	var deemedIncomeForTransportFacility = $("deemedIncomeForTransportFacility1").val();
    	var deemedIncomeForFreeFurnishedOrUnfurnishedAccommodation = $("deemedIncomeForFreeFurnishedOrUnfurnishedAccommodation1").val();
    	var other = $("other1").val();
    	
    	var sum = parseInt(basicPay)+parseInt(specialPay)+parseInt(dearnessAllowance)+parseInt(conveyanceAllowance)+parseInt(houseRentAllowance)+
    			  parseInt(medicalAllowance)+parseInt(servantAllowance)+parseInt(leaveAllowance)+parseInt(honorarium)+
    			  parseInt(overtimeAllowance)+parseInt(bonus)+parseInt(otherAllowance)+parseInt(empContributeToPservantAllowancerovidentFund)+
    			  parseInt(interestAccruedOnProvidentFund)+parseInt(deemedIncomeForTransportFacility)+
    			  parseInt(deemedIncomeForFreeFurnishedOrUnfurnishedAccommodation)+parseInt(other);
    	
    	return sum;
    }*/
    //alert("age: "+age);
	
	/*alert("tinType: "+tinType);
	alert("gender: "+gender);
	alert("disable: "+disable);
	alert("govtEmployee: "+govtEmployee);
	alert("date: "+date);
	alert("areaOfResidence: "+areaOfResidence);*/
	
}

