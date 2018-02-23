package com.asd.tc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping("/")
	public String homePage() {
		
		return "taxCalculator";
	}
	
	@RequestMapping("/detailsSalary")
	public String detlSalary() {
		
		return "salaryDetails";
	}
}
