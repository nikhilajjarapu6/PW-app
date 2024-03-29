package com.jsp.PWApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsp.PWApp.dao.AccountDao;
import com.jsp.PWApp.dto.Account;
import com.jsp.PWApp.dto.User;

import jakarta.servlet.http.HttpSession;

@Service
public class AccountService {
	@Autowired
	AccountDao dao;
	
	public Account saveAccount(Account account, HttpSession session) { //f we want to add any object in to class then we need to import the session
		if(account!=null && session!=null) {
			User user=(User)session.getAttribute("user");
			account.setAmmount(account.getIntialBal());  //adding intial bal and showing minimum bal
			account.setUser(user);			//setting the user object in the account page by getting user object from the session
			Account account2=dao.saveAccount(account);
			if(account2!=null) {
				session.setAttribute("acc", account2);
				return account2;
			}
		}
		return null;
	}
	
	public List<Account> findAll(){
		return dao.findAll();
	}
	
	public Account findById(int id) {
		
		return dao.findById(id);
	}
	
	public Account deleteAccount(int id) {
		
		return dao.deleteAccount(id);
	}
	
	public Account updateAccount(Account account, HttpSession session) {
		if(account!=null && session!=null) {
			User user=(User)session.getAttribute("user");
			//account.setAmmount(account.getIntialBal());  //adding intial bal and showing minimum bal
			account.setUser(user);			//setting the user object in the account page by getting user object from the session
			return dao.updateAccount(account);
		}
		return null;
	}
	
	public Account sendAmount(double ammount, HttpSession session) {
		if(ammount>0) {
			Account account= (Account)session.getAttribute("acc");
			if(account!=null) {
				double res=account.getAmmount()-ammount;
				if(account.getAmmount()>ammount) {
				account.setAmmount(res);
				return dao.updateAccount(account);}
			}
		}
		return null;}
//	public Account sendAmount(double amount, HttpSession session) {
//	    if (amount > 0) {
//	        Account account = (Account) session.getAttribute("account");
//	        if (account != null) {
//	            double currentAmount = account.getAmmount();
//	            if (currentAmount >= amount) {
//	                double newAmount = currentAmount - amount;
//	                account.setAmmount(newAmount);
//	                return dao.updateAccount(account);
//	            }
//	        }
//	    }
//	    return null;
//	}

	
	
	public Account reciveAmount(double ammount,HttpSession session) {
		if(ammount>0) {
			Account account= (Account)session.getAttribute("acc");
			if(account!=null) {
				double res=account.getAmmount()+ammount;
				account.setAmmount(res);
				return dao.updateAccount(account);
			}
		}
		return null;
	}
	
	public Account displayAmount(HttpSession session) {
		Account account=(Account)session.getAttribute("acc");
		if(account!=null) {
			return dao.findById(account.getId());
		}
		return null;
	}
//	public Account displayAmount(HttpSession session) {
//	    User user = (User) session.getAttribute("user");
//	    if (user != null) {
//	        return user.getAccount();
//	    }
//	    return null;
//	}


}
