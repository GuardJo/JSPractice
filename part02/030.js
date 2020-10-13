var adress = 'Seoul';
var members = {};
var addFamily = function(age, name, role) {
    this.members[role] = {
        age : age,
        name : name
    };
};
var getHeadCount = function() {
    return Object.keys(this.members).length;
}

var family = {adress, members, addFamily, getHeadCount};
family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadCount());