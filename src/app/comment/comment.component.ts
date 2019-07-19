import { Comment } from './../comment.model';
import { Component, OnInit, Input } from '@angular/core';
import { LocaleService } from '../locale.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor(
    public localeService: LocaleService
  ) { }

  ngOnInit() {
  }

}
