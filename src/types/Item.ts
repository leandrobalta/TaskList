import { type } from "os";

export type Item = {
    id: number;  //In the case of this application, the "id" is not so necessary cause is a litte project. But if it's bigger, like a database, now this "id" is usefull
    text: string;
    done: boolean;
}