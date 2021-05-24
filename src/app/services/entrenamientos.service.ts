import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Entrenamiento } from '../modelo/entrenamiento';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientosService {

  constructor(
  	private af: AngularFirestore
  	) { }

  getEntrenamientos() {
  	return this.af.collection('entrenamientos').valueChanges();
  }
}
