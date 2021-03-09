import HttpHandler from './httpHandler';

export default class ContributionService {

    constructor() {

        this.httpHandler = new HttpHandler();
      
    }

    getContributionsList() {
        return this.httpHandler
        .request(`/contribution/`)
        .then(response => response.result);
    }
    saveContribution(contributionDetails) {
        return this.fetchHandler
        .request(`/contribution/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contributionDetails)
        })
        .then(response => response.result);
    }
}