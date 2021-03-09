import ko from 'knockout';
import 'knockout.validation';
import Model from './base.model';
import '../extenders/freeHebrewEnglish.validation';
import '../extenders/number.validation';

export default class Contribution extends Model {
    constructor(params = {}) {
        const { entityName, sum, entityType, destiny, condition, currencyType, conversionRate } = params;

        const _entityName = ko.observable(entityName).extend({ required: true, freeHebrewEnglish: true });
        const _sum = ko.observable(sum).extend({ required: true, dicimal: true });
        const _entityType = ko.observable(entityType).extend({ required: true });
        const _destiny = ko.observable(destiny).extend({ required: true, freeHebrewEnglish: true });
        const _condition = ko.observable(condition).extend({ freeHebrewEnglish: true });;
        const _currencyType = ko.observable(currencyType).extend({ required: true });
        const _conversionRate = ko.observable(conversionRate).extend({ required: true });

        super({ entityName: _entityName, sum: _sum, entityType: _entityType, destiny: _destiny, condition: _condition, currencyType: _currencyType, conversionRate: _conversionRate });

    }
    reset() {
        this.entityName('');
        this.sum('');
        this.entityType('');
        this.destiny('');
        this.condition('');
        this.currencyType('');
        this.conversionRate('');
    }
} 