package com.jsp.PWApp.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Account {
	
	@Id
	private int id;
	private long accNo;
	private double minBal;
	private double intialBal;
	private double ammount;
	
	@OneToOne
	@JoinColumn
	@JsonIgnore
	private User user;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public long getAccNo() {
		return accNo;
	}
	public void setAccNo(long accNo) {
		this.accNo = accNo;
	}
	public double getMinBal() {
		return minBal;
	}
	public void setMinBal(double minBal) {
		this.minBal = minBal;
	}
	public double getIntialBal() {
		return intialBal;
	}
	public void setIntialBal(double intialBal) {
		this.intialBal = intialBal;
	}
	public double getAmmount() {
		return ammount;
	}
	public void setAmmount(double ammount) {
		this.ammount = ammount;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	

}
