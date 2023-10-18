import { AfterViewInit, Component } from '@angular/core';

import * as jQuery from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  ngAfterViewInit() {
    (function($) {
      "use strict";

      var path = window.location.href;
      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
        const href = this.getAttribute("href");
        if (href === path) {

          console.log(href);
          $(this).addClass("active");
        }
      });

      $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }


}
