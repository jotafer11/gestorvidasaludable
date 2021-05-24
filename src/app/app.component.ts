import { Component } from '@angular/core';
import { LoadScriptsService } from "./load-scripts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular10-firebaseapp';

  Home: boolean = true;
  L1Screen: boolean = false;
	L2Screen: boolean = false;


  constructor( private _LoadScripts:LoadScriptsService ) 
  { 
    _LoadScripts.Load(["timers"]);
  }

    ngOnInit(): void {
        jQuery(function() {

            jQuery('.showSingle').click(function() {
            jQuery('.targetDiv').hide();
            jQuery('#div' + $(this).attr('target')).show();

            });
    });


  }   

}

