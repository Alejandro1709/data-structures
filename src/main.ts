import HashTable from './hash-table';

let hashTable = new HashTable(17);

hashTable.set('maroon', '#800000');
hashTable.set('yellow', '#FFFF00');
hashTable.set('olive', '#808000');
hashTable.set('salmon', '#FA8072');
hashTable.set('lightcoral', '#F08080');
hashTable.set('mediumvioletred', '#C71585');
hashTable.set('plum', '#DDA0DD');

let yellow = hashTable.get('yellow');

console.log(yellow);
