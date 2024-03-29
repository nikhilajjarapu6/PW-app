package com.jsp.PWApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

import com.jsp.PWApp.dto.User;

public interface UserRepository extends JpaRepository<User,Integer> {
	@Query("select a from User a where a.email=:email and a.password=:password")
	public User validateUser(@RequestParam String email, @RequestParam String password);
	
	@Query("select a from User a where a.email=:username and a.password=:password")
	public User getByNameAndPassword(@RequestParam String username, @RequestParam String password);
	

}
