function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT
    }, 'google_translate_element');
}

function triggerHtmlEvent(element, eventName) {
    var event;
    if (document.createEvent) {
        event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, true, true);
        element.dispatchEvent(event);
    } else {
        event = document.createEventObject();
        event.eventType = eventName;
        element.fireEvent('on' + event.eventType, event);
    }
}

$(function () {
    $('.lang-select').click(function () {
        var theLang = $(this).attr('data-lang');
        $('.goog-te-combo').val(theLang);

        window.location = $(this).attr('href');
        location.reload();
    });
})