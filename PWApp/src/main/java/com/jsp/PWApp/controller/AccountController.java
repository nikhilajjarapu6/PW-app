package com.jsp.PWApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.PWApp.dto.Account;
import com.jsp.PWApp.service.AccountService;

import jakarta.servlet.http.HttpSession;
                                                                                                             
@RestController
public class AccountController {
	@Autowired
	AccountService service;
	
	@PostMapping("/accounts")
	public Account saveAccount(@RequestBody Account account, HttpSession session) {
		Account account2= service.saveAccount(account, session);
		if(account2!=null) {
			return account2;
		}
		return null;
	}
	
	@GetMapping("/accounts")
	public List<Account> findAll(){
		return service.findAll();
	}
	
	@GetMapping("/accounts/{id}")
	public Account findById(@PathVariable int id) {
		
		return service.findById(id);
	}
	
	@DeleteMapping("/accounts/{id}")
	public Account deleteAccount(@PathVariable int id) {
		
		return service.deleteAccount(id);
	}
	
	@PutMapping("/accounts")
	public Account updateAccount(@RequestBody Account account, HttpSession session) {
	Account account2=service.saveAccount(account, session);
	if(account2!=null) {
		return account2;
	}
	return null;
	}
	@PatchMapping("/accounts/{ammount}")
	public Account sendAmount(@PathVariable double ammount, HttpSession session) {
		return service.sendAmount(ammount, session);
		
	}
	@PatchMapping("/accounts")
	public Account recieveAmount(@RequestParam double ammount, HttpSession session) {
		return service.reciveAmount(ammount, session);
		
	}
	
	@GetMapping("/accounts/display")
	public Account displayAmount(HttpSession session) {
		return service.displayAmount(session);
	}
}
