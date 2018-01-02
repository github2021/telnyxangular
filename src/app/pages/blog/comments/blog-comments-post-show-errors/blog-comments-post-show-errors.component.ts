import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-comments-post-show-errors',
  templateUrl: './blog-comments-post-show-errors.component.html',
  styleUrls: ['./blog-comments-post-show-errors.component.scss']
})
export class BlogCommentsPostShowErrorsComponent implements OnInit {

  @Input() private input_formControl: any

  constructor() {}

  ngOnInit() {}

  shouldShowErrors(): boolean {
    return this.input_formControl && this.input_formControl.errors && (this.input_formControl.dirty || this.input_formControl.touched)
  }

  listOfErrors() {
    return Object.keys(this.input_formControl.errors).map(x => this.getErrorMessage(x, this.input_formControl.errors[x]))
  }

  private getErrorMessage(type: string, errorObject: any) { return BlogCommentsPostShowErrorsComponent.errorMessages[type](errorObject) }
  static errorMessages: any = {
    'required': () => 'This field is required',
    'minlength': (params: any) => 'Minimum ' + params.requiredLength + ' Characters Required',
    'maxlength': (params: any) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': () => 'Some special characters (for example \\ , \` , \'  ) are not allowed',
    'custom': (errorObject: any) => errorObject.message,
  }


}
