function objectValues(obj) {
    
    return Object.values(obj);
    
}

function keysToString(obj) {
    
    var string = Object.keys(obj).join(' ');
    
    return string;
}

function valuesToString(obj) {
    
    var array = [];
    
    for (var key in obj) {
        
        if (typeof obj[key] === 'string') {
            
            array.push(obj[key]);
        }
        
    }
    
    return array.join(' ');
}

function arrayOrObject(param) {
    
    if (Object.prototype.toString.call(param) === '[object Array]') {
        
        return 'array';
    } else {
        
        return 'object';
    }
}

function capitalizeWord(string) {
    
    return string[0].toUpperCase().concat(string.slice(1));
    
}

function capitalizeAllWords(string) {
    var capArray = [];
    var array = string.split(' ');
    for(var i = 0; i < array.length; i++) {
        
        capArray.push(array[i].charAt(0).toUpperCase().concat(array[i].slice(1))); 
    }
    return capArray.join(' ');
}

function welcomeMessage(object) {
    var stringName = object['name'];
    var capital = stringName[0].toUpperCase().concat(stringName.slice(1));
    
    return 'Welcome ' + capital + '!';
}

function profileInfo(object) {
    
    var name = object['name'];
    var species = object['species'];
    var newName = name[0].toUpperCase().concat(name.slice(1));
    var newSpecies = species[0].toUpperCase().concat(species.slice(1));
    return newName + ' is a ' + newSpecies;
    
}

function maybeNoises(object) {
    
    if (object.noises === undefined || object.noises.length === 0) {
        
        return 'there are no noises';
        
    } else {
        
        return object.noises.join(' ');
    }
    
    
}

function hasWord(str1, str2) {
    
    if (str1.includes(str2)) {
        return true;
    } else {
        
        return false;
    }
    
}

function addFriend(name, obj) {
    
    obj.friends.push(name);
    
    return obj;
    
}

function isFriend(name, obj) {
    
    if (obj.friends === undefined || !obj.friends.includes(name)) {
        return false;
    } else if (obj.friends.includes(name)) {
        return true;
    }
    
}

function nonFriends(testName, list) {
    
    var unfriendly = [];
    for (var i = 0; i < list.length; i++) {
        
        if (list[i].name !== testName && list[i].friends.indexOf(testName)) {
         
            unfriendly.push(list[i].name);
        }
            
        
    }
    return unfriendly;
}

function updateObject(obj, key, val) {
    
    
    if (obj.hasOwnProperty(key)) {
        obj[key] = val;
    } else {
        obj[key] = val;
    }
    return obj;
}

function removeProperties(obj, array) {
    
    for (var i = 0; i < array.length; i++) {
        
        if (obj.hasOwnProperty(array[i])) {
            delete obj[array[i]];
        }
    }
}

function dedup(array) {
    var newArray = Array.from(new Set(array));
    return newArray;
    
}