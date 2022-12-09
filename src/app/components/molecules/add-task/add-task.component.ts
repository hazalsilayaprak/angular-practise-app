import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

import { Task } from '../../../Task';
import { UiService } from '../../../services/ui.service';
import { faIcons } from '@fortawesome/free-solid-svg-icons';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  date = new FormControl(moment());
  selectedIcon: string = '';
  taskText: string = '';
  reminder: boolean = false;
  isCompleted: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;
  faIcons = faIcons;
  isEmojiPickerVisible: boolean = true;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  ngOnInit(): void {}

  addEmoji(event: any) {
    if (this.selectedIcon) {
      this.selectedIcon = '';
      this.selectedIcon = `${this.selectedIcon}${event.emoji.native}`;
    } else {
      this.selectedIcon = `${this.selectedIcon}${event.emoji.native}`;
    }
  }

  handleChange() {
    this.isEmojiPickerVisible = false;
  }

  resetForm() {
    this.taskText = '';
    this.selectedIcon = '';
    this.date = new FormControl(moment());
    this.reminder = false;
  }

  onSubmit() {
    const newTask = {
      text: this.taskText,
      icon: this.selectedIcon,
      day: this.date.value.format('MMMM Do, h:mm a'),
      isCompleted: this.isCompleted,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
    this.resetForm();
  }
}
