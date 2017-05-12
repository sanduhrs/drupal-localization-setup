(function ($) {

    Drupal.behaviors.l10nGoogleTranslate = {
        attach: function (context, settings) {
            $('.l10n-table tr', context).once('l10nGoogleTranslate').click(function () {
                // Highlight selected row.
                $('.l10n-table tr', context).each(function () {
                    $(this).removeClass('l10n-google-translate');
                });
                $(this).addClass('l10n-google-translate');

                // Get source id for translation.
                var sid = $('.sid a[href]', this).attr('href').split('=')[1];
                // TODO: Fix URL handling.
                $.get('/l10n-google-translate/'+sid, function(data) {
                    $('#l10n-google-translate-suggestion').empty();
                    $.each(data, function(index, data) {
                        $('#l10n-google-translate-suggestion').append("<p>"+data.text+"</p>");
                    });
                });
            });
        }
    };

})(jQuery);
