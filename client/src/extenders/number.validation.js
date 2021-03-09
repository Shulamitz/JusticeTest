import ko from 'knockout';
import 'knockout.validation';

ko.validation.rules.dicimal = {
    validator: function (val) {
        if (!val) { return true; }
        return /^\d*\.?\d*$/.test(val);    

    },
    message: 'יש להזין ערך מספרי בלבד',
};

ko.validation.registerExtenders();