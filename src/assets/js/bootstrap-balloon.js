/* ===========================================================
 * bootstrap-balloon.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* BALLOON PUBLIC CLASS DEFINITION
  * =============================== */

  var Balloon = function (element, options) {
    this.init('balloon', element, options)
  }


  /* NOTE: BALLOON EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Balloon.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Balloon

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.balloon-content > *')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = $e.attr('data-content')
        || (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* Balloon PLUGIN DEFINITION
  * ======================= */

  $.fn.balloon = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('balloon')
        , options = typeof option == 'object' && option
      if (!data) $this.data('balloon', (data = new Balloon(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.balloon.Constructor = Balloon

  $.fn.balloon.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'bottom'
  , trigger: 'click'
  , content: ''
  , template: '<div class="balloon"><div class="arrow"></div><div class="arrow-border"><div class="arrow-border-inner"></div></div><div class="balloon-inner"><div class="balloon-content"><div></div></div></div></div>'
  })

}(window.jQuery);