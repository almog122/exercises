const complaintTypes = require("./consts").complaintTypes;

const handleComplaint = require("./complaintsHandler").handleComplaints;

let complaint1 = {
  text: "I'm not getting enough money",
  type: complaintTypes.FINANCE,
};

let complaint2 = {
  text: "My salary hasn't come in yet",
  type: complaintTypes.FINANCE,
};

let complaint3 = {
  text: "I'm always full of energy",
  type: complaintTypes.EMOTIONS,
};

handleComplaint(complaint1); //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint2); //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint3); //should print "It'll pass, as all things do, with time."
