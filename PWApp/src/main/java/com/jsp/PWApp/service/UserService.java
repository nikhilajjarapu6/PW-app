package com.jsp.PWApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsp.PWApp.dao.UserDao;
import com.jsp.PWApp.dto.Login;
import com.jsp.PWApp.dto.User;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Service
public class UserService {
	@Autowired
	UserDao dao;
	
	public User saveUser(User user) {
		return dao.save(user);
	}
	
	public List<User> findAll(){
		return dao.displayAll();
	}
	public User getUserById(int id) {
		return dao.getUserById(id);
	}
	
	public User deleteUser(int id) {
		return dao.deleteUser(id);
	}
	
	public User updateUser(User user) {
		return dao.updateUser(user);
	}
	
	public User validateUser(Login login, HttpServletRequest request) {
//		return dao.userValidate(login);
		HttpSession session=request.getSession();	//to create session of user
		User user=dao.userValidate(login);			//call the validate method and save in user
		if(user!=null) {
			session.setAttribute("user", user);		//if it is not null add into session with name
		}
		return user;
	}

	public User validateUser(String username, String password) {
		User user=dao.getByNameAndPassword(username,password);
		return user;
	}
}
