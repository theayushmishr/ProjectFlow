export enum Priority {
  low = "Low",
  medium = "Medium",
  high = "High",
}
export enum Status {
    pending = "Pending",
    in_process = "In Process",
    completed = "Completed"
}

export class Task {
    title : string;
    id : string;
    status : Status;
    priority : Priority;
    start_date : Date;
    completed_at : Date | null = null;
    due_date : Date;
    created_at : string;
    last_updated : string;
    constructor(
        title : string,
        id:string, 
        status : Status,
        priority : Priority,
        startDate : Date ,
        dueDate : Date
    ){
        this.title = title;
        this.id  = id;
        this.status = status;
        this.start_date = startDate;
        this.priority = priority;
        this.due_date = dueDate;
        this.status = status;
        this.created_at = new Date().toISOString();
        this.last_updated = this.created_at
    }
    completedAt(completedAt : Date){
        this.completed_at  = completedAt ;
    }
    set changeTitle(newTitle : string ){
       this.title = newTitle;
    }
    set changeStatus(newStatus : Status){
      this.status = newStatus;
    }
    set changeStartDate(newStartDate : Date){
        this.start_date = newStartDate;
    }
    set changeDueDate(newDueDate : Date){
                this.due_date = newDueDate;
    }
    set lastUpdated(last_updated : string){
        this.last_updated = last_updated;
    }
    get startDate(){
        const formattedStartDate = this.start_date.toLocaleDateString(
        'en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        })
        return formattedStartDate;
    }
    get dueDate(){
        const formattedDueDate = this.start_date.toLocaleDateString(
        'en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        })
        return formattedDueDate;
    }
    
}

/**
 * TODO 1. Create Get method duration for Start Date to Due Date
 * 
 * * variable name with _ convention are either for meta data of task or full date or enum variables
 */
