var dfs = function (node, graph, visit, emails) {
  visit.add(node);
  emails.push(node);
  let neighbours = graph.get(node);
  for (let neighbour of neighbours) {
    if (!visit.has(neighbour)) dfs(neighbour, graph, visit, emails);
  }
};

var accountsMerge = function (accounts) {
  let graph = new Map();
  let email_to_name = new Map();

  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      let node = accounts[i][j];
      if (!graph.has(node)) {
        graph.set(node, []);
        email_to_name.set(node, accounts[i][0]);
      }
      for (let k = 1; k < accounts[i].length; k++) {
        if (k != j) {
          let new_graph = graph.get(node).push(accounts[i][k]);
        }
      }
    }
  }

  let merged_accounts = [];

  let visit = new Set();

  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      if (!visit.has(accounts[i][j])) {
        let emails = [];
        dfs(accounts[i][j], graph, visit, emails);
        emails.sort();
        emails.unshift(email_to_name.get(accounts[i][j]));
        merged_accounts.push(emails);
      }
    }
  }

  return merged_accounts;
};