import { TaskListService } from './../../providers/task-list-service/task-list-service';
import { Task } from './../../app/models/task';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'task-edit',
  segment: 'task-edit'
})
@Component({
  selector: 'page-task-edit',
  templateUrl: 'task-edit.html',
})
export class TaskEditPage {
  task: Task;

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskService: TaskListService) {
  }

  ionViewDidLoad() {
    this.task = this.navParams.get('task');
  }

  saveTask(task: Task) {
    this.taskService.editTask(task).then(() => {
      this.navCtrl.setRoot('home')
    })
  }
}
