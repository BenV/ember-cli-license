import Ember from 'ember';
import layout from '../templates/components/license-page';
import $ from 'jquery';

export default Ember.Component.extend({
    layout,
    classNames: ['license-page'],

    init() {
        this._super(...arguments);

        $.ajax('assets/licenses/licenses.csv').then(content => {
            this.set('content', content);
        }, err => {
            this.set('content', 'Error in fetching licenses');
        });
    },
    didInsertElement() {
        this.$('.modal').click(e => {
            if (e.target === this.$('.modal')[0]) {
                this.send('hideModal');
            }
        });
    },

    actions: {
        openModal() {
                this.$('.modal').fadeIn();
            },
            hideModal() {
                this.$('.modal').fadeOut();
            }
    }
});