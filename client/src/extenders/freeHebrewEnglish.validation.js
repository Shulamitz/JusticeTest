import ko from 'knockout';
import 'knockout.validation';

ko.validation.rules.freeHebrewEnglish = {
    validator: function (val) {
        if (!val) { return true; }
        return /^[aA-zZא-ת]*$/.test(val);    

    },
    message: 'יש להזין אותיות בעברית ואנגלית',
};

ko.validation.registerExtenders();