import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Account {
  'id' : string,
  'service' : string,
  'phNo' : string,
  'site' : string,
  'accountName' : string,
}
export interface Customer {
  'id' : string,
  'leadOwner' : string,
  'name' : string,
  'description' : string,
  'email' : string,
  'company' : string,
  'address' : string,
  'leadSource' : string,
  'phoneNo' : string,
}
export interface Meeting {
  'id' : string,
  'to' : string,
  'title' : string,
  'from' : string,
  'relatedTo' : string,
}
export interface Tasks {
  'id' : string,
  'status' : string,
  'task' : string,
  'dueDate' : string,
  'taskOwner' : string,
  'priority' : string,
}
export interface _SERVICE {
  'addAcc' : ActorMethod<[string, string, string, string], undefined>,
  'addCustomer' : ActorMethod<
    [string, string, string, string, string, string, string, string],
    undefined
  >,
  'addMeeting' : ActorMethod<[string, string, string, string], undefined>,
  'addTasks' : ActorMethod<[string, string, string, string, string], undefined>,
  'addUser' : ActorMethod<
    [string, string, string, string, string, string, string, string],
    undefined
  >,
  'getAccounts' : ActorMethod<[], Array<Account>>,
  'getCustomers' : ActorMethod<[], Array<Customer>>,
  'getMeeting' : ActorMethod<[], Array<Meeting>>,
  'getTask' : ActorMethod<[], Array<Tasks>>,
  'getValue' : ActorMethod<[], bigint>,
  'increment' : ActorMethod<[], undefined>,
}
