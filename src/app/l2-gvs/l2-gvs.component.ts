import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { LoadScriptsService } from "./../load-scripts.service";


@Component({
  selector: 'app-l2-gvs',
  templateUrl: './l2-gvs.component.html',
  styleUrls: ['./l2-gvs.component.css']
})
export class L2GvsComponent implements OnInit {

lista2 = [

	{id:'1', name:"Ejercicio 1 muñecas"},
	{id:'2', name:"Ejercicio 2 muñecas"},
	{id:'3', name:"Ejercicio 3 muñecas"},
	{id:'4', name:"Ejercicio 4 muñecas"},

];



  constructor() { }

  ngOnInit(): void {

  }        
    
}