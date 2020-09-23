let data = [{
    id: 0,
    text: '<div class="purple color-circle"></div>',
    html: '<div class="purple color-circle"></div>'
        }, {
    id: 1,
    text: '<div class="green color-circle"></div>',
    html: '<div class="green color-circle"></div>'
        },
           {
    id: 2,
    text: '<div class="yellow color-circle"></div>',
    html: '<div class="yellow color-circle"></div>'
        }];

$("select").select2({
    data: data,
    escapeMarkup: function (markup) {
        return markup;
    },
    templateResult: function (data) {
        return data.html;
    },
    templateSelection: function (data) {
        return data.text;
    }
})
