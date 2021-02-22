import { TodoList1Page } from './app.po';

describe('todo-list1 App', function() {
  let page: TodoList1Page;

  beforeEach(() => {
    page = new TodoList1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
