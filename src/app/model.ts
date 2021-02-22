export class Model {
  title;
  items;

  constructor() {
    this.title = 'TO DO LIST';
    this.items = [
      new TodoItem("study angular", true),
      new TodoItem("read book", false),
      new TodoItem("write daily", false),
      new TodoItem("face time with your friend", true)
    ]
  }
}

export class TodoItem {
  description;
  action;

  constructor(description, action) {
    this.description= description;
    this.action=action;
  }
}
