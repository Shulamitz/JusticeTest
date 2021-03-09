import ko from 'knockout';
import template from './contribution.html';
import './contribution.scss';
import ContributionService from '../../services/contribution.service'

class ContributionComponent {
    constructor(params = {}) {
        const { loginUser = {}, contributionsList, contribution, isEditContribution = true, contributionIndex } = params;
        this.contribution = contribution;
        this.contributionsList = contributionsList;
        this.contributionService = new ContributionService();
        this.loginUser = loginUser;
        this.isEditContribution = ko.observable(ko.unwrap(isEditContribution));
        this.contributionIndex = contributionIndex;
    }
    save() {
        try {

            const isValid = this.validate();
            if (isValid) {
                if(contributionIndex){//remove old
                    this.contributionsList.remove(this.contributionsList[contributionIndex]);
                }
                this.contributionsList.push(this.contribution().getModel());
                const contributionDetails = this.contribution().toJS();
                contributionDetails.owner = this.loginUser;
                this.contributionService
                    .saveContribution(contributionDetails)
                    .then(() => alert('הנתונים נשמרו בהצלחה'));
            }

        }
        catch{
            alert('שמירת הנתונים נכשלה');
        }
    }
    clear() {
        this.reset();
    }
}

ko.components.register('contribution', {
    ViewModel: ContributionComponent,
    template
});