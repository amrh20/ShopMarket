import { AngularFirestore} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore) { }
  getAll() {
    return this.fs.collection('goods').snapshotChanges()
  }
}
