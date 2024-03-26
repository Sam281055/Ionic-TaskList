import { Component } from '@angular/core';
import { UtilsService } from '../service/UtilSvc.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taks:string[]=[]
  tarea?:string;
  constructor(
    private utsvc:UtilsService
  ){
    this.getTask()
  }

  getTask(){
    const tarea = localStorage.getItem('Tareas');
    if(tarea){
      this.taks = JSON.parse(tarea)
      return;
    }
    else{
      return [];
    }
  }


  addTask(){
    if(!this.tarea) return null;
    this.taks.push(this.tarea!);
    localStorage.setItem('Tareas',JSON.stringify(this.taks));
    this.utsvc.presentToast({
      message: 'Tarea creada correctamente',
      duration: 1000,
      color: 'primary',
      position: 'middle',
      icon: 'alert-circle-outline'
    })
    return
  }

  delTask(index:number){
    this.taks = this.taks.filter((_, i) => i !== index);
    localStorage.setItem('Tareas',JSON.stringify(this.taks));
  }

}

