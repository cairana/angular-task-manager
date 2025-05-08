import { Task } from "./app/model/task.type";

export const MOCK_TASKS: Task[] = [
    { id: 1, name: "Buy groceries", description: "Get milk, eggs, and bread from the store", created: "2025-05-04T15:00:00Z", status: "todo" },
    { id: 2, name: "Write report", description: "Draft the quarterly sales report", created: "2025-05-03T12:30:00Z", status: "inProgress" },
    { id: 3, name: "Book flight", description: "Reserve tickets for the upcoming business trip", created: "2025-04-30T08:15:00Z", status: "completed" },
    { id: 4, name: "Fix bug #204", description: "Resolve the login authentication issue", created: "2025-05-01T10:45:00Z", status: "todo" },
    { id: 5, name: "Schedule meeting", description: "Set up a project status review meeting", created: "2025-05-02T14:00:00Z", status: "completed" },
    { id: 6, name: "Update documentation", description: "Revise API documentation for new endpoints", created: "2025-05-03T16:20:00Z", status: "inProgress" },
    { id: 7, name: "Pay bills", description: "Submit payment for utilities and internet", created: "2025-04-29T18:00:00Z", status: "completed" },
    { id: 8, name: "Review PR #452", description: "Check the latest code changes and merge if approved", created: "2025-05-04T09:00:00Z", status: "todo" },
    { id: 9, name: "Prepare presentation", description: "Create slides for the upcoming client pitch", created: "2025-05-02T11:10:00Z", status: "inProgress" },
    { id: 10, name: "Clean workspace", description: "Organize desk and declutter files", created: "2025-04-28T07:30:00Z", status: "completed" },
    { id: 11, name: "Respond to emails", description: "Reply to important pending emails", created: "2025-05-05T08:20:00Z", status: "todo" },
    { id: 12, name: "Team brainstorming session", description: "Discuss new ideas for the upcoming project", created: "2025-05-06T10:00:00Z", status: "inProgress" },
    { id: 13, name: "Push latest code", description: "Commit and push changes to the repository", created: "2025-05-07T13:30:00Z", status: "completed" },
    { id: 14, name: "Prepare budget report", description: "Analyze expenses and generate the monthly budget report", created: "2025-05-08T09:45:00Z", status: "todo" },
    { id: 15, name: "Attend training session", description: "Complete online leadership training program", created: "2025-05-09T14:15:00Z", status: "inProgress" },
    { id: 16, name: "Fix UI issue #332", description: "Resolve styling inconsistencies in mobile view", created: "2025-05-10T16:40:00Z", status: "todo" },
    { id: 17, name: "Prepare quarterly review", description: "Gather data and prepare performance metrics", created: "2025-05-11T11:55:00Z", status: "completed" },
    { id: 18, name: "Check server logs", description: "Investigate and address error logs from last deployment", created: "2025-05-12T08:30:00Z", status: "inProgress" }
];
