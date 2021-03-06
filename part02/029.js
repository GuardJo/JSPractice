// 객체 공부2

var family = {
    'address' : 'Seoul',
    members : {},
    addFamily : function(age, name, role) {
        this.members[role] = {
            age : age,
            name : name
        };
    },
    getHeadCount : function() {
        return Object.keys(this.members).length;
    }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

var printMemebers = function() {
    var members = family.members;
    for (role in members) {
        console.log('role =>' + role + ', name => ' + members[role].name + ', age => ' + members[role].age);
    }
};
printMemebers();

var members = family.members;
members.nephew = {age : 3, name : 'hyun'};
members.niece = {age : 5, name : 'lyn'};
delete members.aunt;
delete members.dog;

printMemebers();