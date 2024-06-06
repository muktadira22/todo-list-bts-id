export type IChecklist = {
    id: number,
    checklistCompletionStatus: boolean,
    items: IChecklistItem[] | null,
    name: string,
}

export type IChecklistItem = {
    id: number,
    checklistId: number,
    completionStatus: boolean,
    description: string,
    name: string,
}