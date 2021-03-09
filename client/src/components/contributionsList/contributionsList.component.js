import ko from 'knockout';
import template from './contributionsList.html';
import './contributionsList.scss';
import '../contribution/contribution.component';
import Contribution from '../../models/contribution.model';


class ContributionsListComponent {
    constructor(params = {}) {
        const { loginUser, contributionsList } = params;
        this.contributionsList = contributionsList;
        this.loginUser = loginUser;
        this.isEditContribution(false);
    }
    addContribution() {
        const pageContentElement = document.getElementById('app');
        var contributionElement = document.createElement('contribution');
        contributionElement.setAttribute('params', '{loginUser:loginUser,contributionsList:contributionsList,contribution:contribution}');

        const loginUser = this.loginUser;
        const contributionsList = this.contributionsList;
        const contribution = new Contribution();
        const vm = {
            loginUser,
            contributionsList,
            contribution
        };

        ko.applyBindings(vm, contributionElement);
        pageContentElement.appendChild(contributionElement);
    }
    toggleIsOpen() {
        this.isOpen(!this.isOpen());
    }
    edit() {
        this.isEditContribution(true);
    }

}

ko.components.register('contributions-list', {
    ViewModel: ContributionsListComponent,
    template
});