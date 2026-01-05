export class ProjectCard {
    title: string;
    description: string;
    keywords: string[];
    liveBttn: string;
    gitBttn: string;
    constructor(title: string, description: string,  keywords:string[], liveBttn:string, gitBttn:string){
        this.title = title;
        this.description = description;
        this.keywords = keywords;
        this.liveBttn = liveBttn;
        this.gitBttn = gitBttn;
    }
}
