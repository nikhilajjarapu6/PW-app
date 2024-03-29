package com.jsp.PWApp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.PWApp.dto.Login;
import com.jsp.PWApp.dto.User;
import com.jsp.PWApp.repository.UserRepository;

@Repository
public class UserDao {
	@Autowired
	UserRepository repository;
	
	public User save(User user) {
		return repository.save(user);
	}
	
	public List<User> displayAll(){
		return repository.findAll();
	}
	
	public User getUserById(int id) {
		Optional<User> optional= repository.findById(id);
		return optional.get();
	}
	
	public User deleteUser(int id) {
		Optional<User> optional= repository.findById(id);
		if(optional!=null) {
			repository.delete(optional.get());
		}
		return optional.get();
	}
	
	public User updateUser(User user) {
		Optional<User> optional=repository.findById(user.getId());
		if(optional!=null) {
			repository.save(user);
		}
		return optional.get();
	}
	
	public User userValidate(Login login) {
		return repository.validateUser(login.getEmail(),login.getPassword());
	}

	public User getByNameAndPassword(String username, String password) {
		
		return repository.getByNameAndPassword(username, password);
	}

}
