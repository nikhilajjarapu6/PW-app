package com.jsp.PWApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.jsp.PWApp.dto.Login;
import com.jsp.PWApp.dto.User;
import com.jsp.PWApp.service.UserService;


import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("users")
public class UserController {
   @Autowired 
   UserService service;
   
//   @GetMapping("/")
//   @ResponseBody
//   public String name(HttpServletRequest request) {
//	return "redirect:index" ;
//   }
   
   @PostMapping("/saveUser")
   public User saveUser(@RequestBody User user, Model model) {
	   User user1=service.saveUser(user);
	   model.addAttribute("user",user1);
      
       return user1;
   }
           
   @GetMapping("/displayUser")
   public List<User> displayAll(){
	   return service.findAll();
   }
   
   @GetMapping("/findUser/{id}")
   public User findUserById(@PathVariable int id) {
	   return service.getUserById(id);
   }
   
   
   @DeleteMapping("/deleteUser/{id}")
   public User deletesUser(@PathVariable int id) {
	   return service.deleteUser(id);
   }
   
   @PutMapping("/updateUser")
   public User updateUser(@RequestBody User user) {
	   return service.updateUser(user);
   }
   
   @GetMapping("/loginUser/login")
   public User validateUser(@RequestBody Login login,HttpServletRequest request) {
	   return service.validateUser(login, request);
   }
   
   @GetMapping("/loginUser")
   public User validateUser(@RequestParam String username, @RequestParam String password, HttpServletRequest request) {
       return service.validateUser(username, password);  // Redirect to the home page or login page
   }
//   @GetMapping("/redirect")
//   public RedirectView redirect() {
//       RedirectView redirectView = new RedirectView();
//       redirectView.setUrl("home");
//       return redirectView;
//   }
   
//   @GetMapping("/homes")
//   public String test(Model model) {
//	   return "redirect:/index.html";
//   }

   @GetMapping("/homes")
   public RedirectView redirectToIndex() {
       RedirectView redirectView = new RedirectView();
       redirectView.setUrl("/home.html");
       return redirectView;
   }
   
//   @GetMapping("/home")
//   public String redirectToIndexs() {
//       return "redirect:/index.html";
//   }

   
   
   
}
