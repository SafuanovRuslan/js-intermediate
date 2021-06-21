const app = {
    sum(a, b) {
        if ( typeof a == 'number' && typeof b == 'number') {
            return a + b;
        } else {
            return NaN;
        }
    },
    
    dif(a, b) {
        if ( typeof a == 'number' && typeof b == 'number') {
            return a - b;
        } else {
            return NaN;
        }
    },
    
    prod(a, b) {
        if ( typeof a == 'number' && typeof b == 'number') {
            return a * b;
        } else {
            return NaN;
        }
    },
    
    quot(a, b) {
        if ( typeof a == 'number' && typeof b == 'number') {
            return a / b;
        } else {
            return NaN;
        }
    },
}

module.exports = {
    app: app
}