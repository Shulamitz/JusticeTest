import ko from 'knockout';
import 'knockout.validation';

export default class BaseModel {
    constructor(model) {

        this._model = {};
        this._mutate = ko.observable();

        this.setModel(model);

        const validatedModel = ko.computed(() => {
            this._mutate();
            const _validatedModel = ko.validatedObservable(this.getModel(), { deep: true });
            return _validatedModel;
        });

        const isValid = ko.observable(validatedModel().isValid());
        isValid.extend({
            notify: 'always',
            validation: {
                validator: function (val) {
                    return val === true;
                },
                message: ''
            }
        });

        validatedModel.subscribe(_validatedModel => {

            const _isValid = _validatedModel.isValid();
            isValid(_isValid);

            const hasToViewError = ko.observable(false);
            _validatedModel.errors.forEach(function (observable) {
                if (observable.isModified() && !observable.isValid()) {
                    hasToViewError(true);
                }
            });

            isValid.isModified(ko.unwrap(hasToViewError));
        });

        this.isValid = isValid;
    }

    setModel(model) {
        Object.assign(this._model, model);
        Object.assign(this, model);

        this._mutate.notifySubscribers();
    }

    _getDeepModel(prop) {
        const _prop = ko.unwrap(prop);
        const isBaseModel = _prop instanceof BaseModel;
        if (isBaseModel) {
            return _prop.getModel();
        }
        const isArray = Array.isArray(_prop);
        if (isArray) {
            return _prop.map(val => {
                return this._getDeepModel(val);
            });
        }
        return prop;
    }

    getModel() {

        const _modelProps = Object.entries(this._model);

        const _pureModel = _modelProps
            .reduce((pureModel, [key, value]) => {
                const _value = value;
                pureModel[key] = this._getDeepModel(_value);
                return pureModel;
            }, {});

        return _pureModel;
    }

    toJS() {
        return ko.toJS(this.getModel());

    }

    validate() {
        var validatedModel = ko.validatedObservable(this._model, { deep: true });
        validatedModel.errors.forEach(function (observable) {
            if (observable.autoClearedWrongValue) {
                observable.valueHasMutated();
            }
        });
        if (validatedModel.errors && validatedModel.errors().length > 0) {
            validatedModel.errors.showAllMessages();
            return false;
        }
        return true;
    }
}
