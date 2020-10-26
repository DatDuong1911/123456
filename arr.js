var persons = [{
    name: 'Trung',
    class: 'Nodemy01',
    dateJoin: '05 - 02 - 2020',
    age: 20
}, {
    name: '‘Phong’',
    class: 'Nodemy01',
    dateJoin: '06 - 01 - 2020',
    age: 19
}, {
    name: 'Nam',
    class: 'Nodemy02',
    dateJoin: '25 - 01 - 2020',
    age: 25
}]
persons.sort(function(item1, item2) {
    if (item1.age > item2.age) {
        return 1;
    }
    if (item1.age < item2.age) {
        return -1;
    }
    if (item1.age == item2.age) {
        return 0;
    }
})
console.log(persons);