import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBellSlash } from '@fortawesome/free-regular-svg-icons';
import { faIcons } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  faTimes = faTimes;
  faBell = faBell;
  faBellSlash = faBellSlash;
  faIcons = faIcons;

  selectedIcon: string = '';
  isEmojiPickerVisible: boolean;

  @Input()
  task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminderTask: EventEmitter<Task> = new EventEmitter();
  @Output() onTaskIconChange: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any) {
    this.onToggleReminderTask.emit(task);
  }

  onIconChange(task: any) {
    this.onTaskIconChange.emit(task);
  }

  addEmoji(event: any, task: any) {
    if (this.selectedIcon) {
      this.selectedIcon = '';
    }
    this.selectedIcon = `${this.selectedIcon}${event.emoji.native}`;
    task.icon = this.selectedIcon;
    this.onIconChange(task);
    this.isEmojiPickerVisible = false;
  }

  handleChange() {
    this.isEmojiPickerVisible = false;
  }
}
