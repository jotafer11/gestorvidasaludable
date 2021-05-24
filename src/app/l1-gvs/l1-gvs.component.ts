import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { LoadScriptsService } from "./../load-scripts.service";

@Component({
  selector: 'app-l1-gvs',
  templateUrl: './l1-gvs.component.html',
  styleUrls: ['./l1-gvs.component.css']
})
export class L1GvsComponent implements OnInit {

lista1 = [

  {id:'1', name:"Curl alternado (subir supino, bajar prono)"},
  {id:'2', name:"Copa a 2 mancuernas tras nuca"},
  {id:'3', name:"Curl martillo abierto y cerrado"},
  {id:'4', name:"Flex cerradas con mancuernas"},
  {id:'5', name:"Press frances con mancuernas (de espalda)"},
  {id:'6', name:"Curl alternado al centro de pecho"},
  {id:'7', name:"Patadas tricep a 1 mano"},
  {id:'8', name:"Curl de biceps isometrico"},
  {id:'9', name:"Curl 21 con mancuernas"},

];

  ngOnInit(): void {

  }        
  	
}


