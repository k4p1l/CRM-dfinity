import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Order "mo:base/Order";
 import Int "mo:base/Int";
import List "mo:base/List" ;

actor {

  type Customer = {
    id : Text;
    // id1 : Text;
    leadOwner : Text;
    name : Text;
    phoneNo : Text;
    address : Text;
    company : Text;
    leadSource : Text;
    email : Text;
    description : Text;

  };
 
  // type User = {
  //   id : Nat;
  //   username : { name : Text; id : Nat };
  //   password : { pass : Text; id : Nat };
    
  // };

  type Meeting = {
    id: Text;
       title : Text ; 
       from : Text ; 
       to : Text ; 
       relatedTo : Text ;
  };

  type Tasks = {
    id: Text;
    task : Text;
    priority : Text;
    taskOwner : Text;
    status : Text;
    dueDate : Text;
  };

  type Account = {
    id: Text;
    accountName : Text;
    phNo : Text;
    service : Text;
    site : Text;
  };

  // stable var users : [User] = [];

  stable var idCount = 0;
  stable var meetCount = 0;
  stable var taskCount = 0;
   var accCount = 0;

  //   stable var count :Int = 0;
 // var customers : [Customer] = [];
  stable var customers: List.List<Customer> = List.nil<Customer>();
  stable var meetings: List.List<Meeting> = List.nil<Meeting>();
  stable var tasks: List.List<Tasks> = List.nil<Tasks>();
   var accounts : List.List<Account> = List.nil<Account>() ;
// 
// 
// 
//   
  public func addCustomer( leadOwnerI : Text, nameI : Text, phoneNoI: Text,addressI: Text, companyI : Text,leadSourceI: Text, emailI : Text, descriptionI : Text) {
    idCount := idCount + 1;
    // let idstr = Text.fromInt(idCount);
    var custNew : Customer ={

      // id1 = idI;
      id = Int.toText(idCount);
      leadOwner = leadOwnerI;
      name = nameI;
      phoneNo = phoneNoI;
      address = addressI;
      company = companyI;
      leadSource = leadSourceI;
      email = emailI;
      description = descriptionI;
    };
    customers := List.push(custNew, customers);
    Debug.print(debug_show (customers))
  };
  
   public func addMeeting(titleI: Text, fromI : Text, toI : Text, relatedToI : Text) {

    meetCount := meetCount + 1;
    var meetNew : Meeting ={

      id = Int.toText(meetCount);
      title = titleI ;
      from = fromI ; 
      to = toI ;
      relatedTo = relatedToI  ;
       
    };
    meetings := List.push(meetNew, meetings);
    Debug.print(debug_show (meetings))
  };

  public func addTasks(taskI : Text, priorityI : Text, taskOwnerI : Text, statusI : Text, dueDateI : Text){
    
    taskCount := taskCount + 1;
    var taskNew : Tasks = {
      id = Int.toText(taskCount);
      task = taskI;
      priority = priorityI;
      taskOwner = taskOwnerI;
      status =  statusI;
      dueDate = dueDateI;
      };
      tasks := List.push(taskNew, tasks);
      Debug.print(debug_show(tasks))
  };

  public func addAcc(accNameI : Text, phNoI : Text, serviceI : Text, siteI : Text){

    accCount := accCount + 1;
    var accountsNew : Account = {
      id = Int.toText(accCount);
      accountName = accNameI;
      phNo = phNoI;
      service = serviceI;
      site = siteI;
    };

    accounts := List.push(accountsNew, accounts);
    Debug.print(debug_show (accounts));
  };


  public query func getCustomers() : async [Customer] {
    return List.toArray(customers);
  };
public query func getMeeting() : async [Meeting] {
    return List.toArray(meetings);
  };
public query func getTask() : async [Tasks] {
    return List.toArray(tasks);
  };
public query func getAccounts() : async [Account] {
    return List.toArray(accounts);
  };
  // public query func sortCustomersByName() : async [Customer] {
  //   customers := Array.sort(customers, compareCustomerByName);
  //   return customers
  // };

  func compareCustomerByName(a : Customer, b : Customer) : Order.Order {
    return Text.compare(a.name, b.name)
  };
  stable var currentValue : Nat = 0;

  public func increment() : async () {
    currentValue += 1
  };

  public query func getValue() : async Nat {
    currentValue
  };

  public func addUser(leadOwnerI : Text, nameI : Text, phoneNoI: Text, addressI: Text, companyI : Text, leadSourceI: Text, emailI : Text, descriptionI : Text) {
    
    idCount := idCount +1;
    var userNew : Customer = {
      id = Int.toText(idCount);
      leadOwner = leadOwnerI;
      name = nameI;
      phoneNo = phoneNoI;
      address = addressI;
      company = companyI;
      leadSource = leadSourceI;
      email = emailI;
      description = descriptionI;
    };
  
    customers := List.push(userNew, customers);
    Debug.print(debug_show (customers));
  };

}
