export const idlFactory = ({ IDL }) => {
  const Account = IDL.Record({
    'id' : IDL.Text,
    'service' : IDL.Text,
    'phNo' : IDL.Text,
    'site' : IDL.Text,
    'accountName' : IDL.Text,
  });
  const Customer = IDL.Record({
    'id' : IDL.Text,
    'leadOwner' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
    'email' : IDL.Text,
    'company' : IDL.Text,
    'address' : IDL.Text,
    'leadSource' : IDL.Text,
    'phoneNo' : IDL.Text,
  });
  const Meeting = IDL.Record({
    'id' : IDL.Text,
    'to' : IDL.Text,
    'title' : IDL.Text,
    'from' : IDL.Text,
    'relatedTo' : IDL.Text,
  });
  const Tasks = IDL.Record({
    'id' : IDL.Text,
    'status' : IDL.Text,
    'task' : IDL.Text,
    'dueDate' : IDL.Text,
    'taskOwner' : IDL.Text,
    'priority' : IDL.Text,
  });
  return IDL.Service({
    'addAcc' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        ['oneway'],
      ),
    'addCustomer' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
        ],
        [],
        ['oneway'],
      ),
    'addMeeting' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        ['oneway'],
      ),
    'addTasks' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        ['oneway'],
      ),
    'addUser' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
        ],
        [],
        ['oneway'],
      ),
    'getAccounts' : IDL.Func([], [IDL.Vec(Account)], ['query']),
    'getCustomers' : IDL.Func([], [IDL.Vec(Customer)], ['query']),
    'getMeeting' : IDL.Func([], [IDL.Vec(Meeting)], ['query']),
    'getTask' : IDL.Func([], [IDL.Vec(Tasks)], ['query']),
    'getValue' : IDL.Func([], [IDL.Nat], ['query']),
    'increment' : IDL.Func([], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
