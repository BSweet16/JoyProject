/*
* jQuery modalPopLite
* Copyright (c) 2012 Simon Hibbard
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:

* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE. 
*/

/*
* Version: V1.3.2
* Release: 10-01-2013
* Based on jQuery from 1.7 to 1.11.0 / 2.1.0
*/

(function ($) {
    var popID = 0;
    $.fn.modalPopLite = function (options) {
        var options = $.extend({}, { openButton: "modalPopLite-open-btn", closeButton: "modalPopLite-close-btn", isModal: false, callBack: null }, options);

        return this.each(function () {
            popID++;
            var thisPopID = popID;
            var isOpen = false;

            var obj = $(this);
            var triggerObj = options.openButton;
            var closeObj = options.closeButton;
            var isReallyModel = options.isModal;

            //alert("winH: " + winH + "top: " + top + "objH: " + objH);
            obj.before('<div id="modalPopLite-mask' + thisPopID + '" style="width:100%" class="modalPopLite-mask" />');
            obj.wrap('<div id="modalPopLite-wrapper' + thisPopID + '" style="left: -10000px;" class="modalPopLite-wrapper" />');
            obj.addClass('modalPopLite-child-' + thisPopID);

            $(triggerObj).on("click", function (e) {
                e.preventDefault();
                var winW = $(window).width();
                var winH = $(window).height();
                var objW = $('.modalPopLite-child-' + thisPopID).outerWidth();
                var objH = $('.modalPopLite-child-' + thisPopID).outerHeight();
                var left = (winW / 2) - (objW / 2);
                var top = (winH / 2) - (objH / 2);
                var test = 20;

                $('#modalPopLite-mask' + thisPopID).css('height', winH + "px");
                $('#modalPopLite-mask' + thisPopID).fadeTo('slow', 0.6);
                //$('#modalPopLite-wrapper' + thisPopID).hide();
                $('#modalPopLite-wrapper' + thisPopID).css({ 'left': left + "px", 'top': top });
                
                isOpen = true;
            });

            $(closeObj).on("click", function (e) {
                e.preventDefault();
                $('#modalPopLite-mask' + thisPopID).hide();
                //$('#modalPopLite-wrapper' + thisPopID).hide();
                $('#modalPopLite-wrapper' + thisPopID).css('left', "-10000px");
                isOpen = false;
                if (options.callBack != null) {
                    options.callBack.call(this);
                }
            });

            //if mask is clicked
            if (!isReallyModel) {
                $('#modalPopLite-mask' + thisPopID).click(function (e) {
                    e.preventDefault();
                    $(this).hide();
                    //$('#modalPopLite-wrapper' + thisPopID).hide();
                    $('#modalPopLite-wrapper' + thisPopID).css('left', "-10000px");
                    isOpen = false;
                    if (options.callBack != null) {
                        options.callBack.call(this);
                    }
                });
            }
            $(window).resize(function () {
                if (isOpen) {
                    var winW = $(window).width();
                    var winH = $(window).height();
                    var objW = $('.modalPopLite-child-' + thisPopID).outerWidth();
                    var objH = $('.modalPopLite-child-' + thisPopID).outerHeight();
                    var left = (winW / 2) - (objW / 2);
                    var top = (winH / 2) - (objH / 2);
                    $('#modalPopLite-wrapper' + thisPopID).css({ 'left': left + "px", 'top': top });
                    $('#modalPopLite-mask' + thisPopID).css('height', winH + "px");
                }
            });
        });

    };

    $.fn.modalPopLite.Close = function (id) {
        $('#modalPopLite-mask' + id).hide();
        //$('#modalPopLite-wrapper' + id).hide();
        $('#modalPopLite-wrapper' + thisPopID).css('left', "-10000px");
        if (options.callBack != null) {
            options.callBack.call(this);
        }
    };

    $.fn.modalPopLite.ShowProgress = function () {
        $('<div class="popBox-ajax-progress"></div>').appendTo("body")
    };

    $.fn.modalPopLite.HideProgress = function () {
        $('.popBox-ajax-progress').remove();
    };

})(jQuery);