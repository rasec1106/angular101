import { AuthorInterface } from './author.interface';
import { UserInterface } from './user.interface';
export interface TaskInterface{
    id: string | number; // TODO: '1', 1
    title: string;
    tags: Array<string>; // TODO: important, marketing
    /* Another way to do Array<string> is string[] */
    user: UserInterface;
    status: 'in-progress' | 'completed' | 'wait';
    // description: string;
    // author: AuthorInterface;
}