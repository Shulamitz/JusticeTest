//import './components/contributionsList/contributionsList.component';
import './components/contribution/contribution.component';
import Contribution from './models/contribution.model';
import ko from 'knockout';


const pageContentElement = document.getElementById('app');
var contributionElement = document.createElement('contribution');
contributionElement.setAttribute('params', '{loginUser:loginUser,contributionsList:contributionsList,contribution:contribution}');

const loginUser = { id: "316090729" };
const contributionsList =ko.observableArray();
const contribution = new Contribution();
const vm = {
    loginUser,
    contributionsList,
    contribution
};

ko.applyBindings(vm, contributionElement);
pageContentElement.appendChild(contributionElement);

var contributionsListElement = document.createElement('contributions-list');
contributionsListElement.setAttribute('params', '{loginUser:loginUser,contributionsList:contributionsList}');

// const contribution=new Contribution({ entityName:'עמותה', sum:'200', entityType:'פרטי', destiny:'יעוד 1', condition:'', currencyType:'', conversionRate:''});
// const loginUser = { id: "316090729" };
// const contributionsList=ko.observableArray([{...contribution}]);
// const vm = {
//     loginUser,
//     contributionsList
// };
ko.applyBindings(vm, contributionsListElement);
pageContentElement.appendChild(contributionsListElement);

