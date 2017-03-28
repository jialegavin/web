/*
* Name: Qiuyue (Orange) Xiong
* ID: V00854913
* Date: Mar 26th, 2017
* Filename: BankAccount.java
* Details: csc110\Assignment 6
*/
import java.util.*;
public class BankAccount {
 private int accountNumber;
 private String ownerName;
 private double balance;
 private String type; // Personal, Business, Charitable
 public BankAccount() {
 accountNumber = 0;
 ownerName = "";
 balance = 0.0;
 type = "Personal";
 }
 public BankAccount(int number, String name, double initialDeposit,
String type) {
 accountNumber = number;
 ownerName = name;
 balance = initialDeposit;
 this.type = type; // Why does 'this' need to be used here??
 }
 //there are two "type"s, so use "this." to separate them.
 public int getAccountNumber() {
 return accountNumber;
 }
 //purpose: to get account number.
 //input: N/A
 //output: account number.
 public void setAccountNumber(int number) {
 accountNumber = number;
 }
 //purpose: to set a new account number.
 //input: a number for the account number.
 //output: account number.
 public String getOwnerName() {
 return ownerName;
 }
 //purpose: to get account holder's name.
 //input: N/A
 //output: owner's name.
 public void setOwnerName(String name) {
 ownerName = name;
 }
 //purpose:to set holder's name.
 //input:holder's name.
 //output:holder's name.
 public double getBalance() {
 return balance;
 }
 //purpose:to view the account balance.
 //input:N/A 
 //output:account balance.
 public void setBalance(double newAmount) {
 balance = newAmount;
 }
 //purpose:to change the account balance.
 //input:new account balance.
 //output:new account balance.
 public String getType() {
return type;
 }
 //purpose:to view what type is this account.
 //input:N/A
 //output:account type.
 public void deposit(double amount) {
 balance += amount;
 }
 //purpose:to enter the deposit amount.
 //input:new deposit amount.
 //output:the new balance.
 public void withdrawl(double amount) {
 balance -= amount;
 }
 //purpose:to withdrawl money from bank.
 //input:withdrawl money amount.
 //output:new balance.
 public String toString() {
 return type + ": " + accountNumber + " " + ownerName + " " + balance;
 }
 //purpose:to view the account summary.
 //input:N/A
 //output:account type: accountNumber    holder's name     account balance.
}
