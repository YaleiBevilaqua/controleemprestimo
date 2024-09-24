type ItemTypeOutput = {
    id: string
    name: string
}

export type GetAllItemUseCaseOutput = {
    id: string;
    name: string;
    itemType: ItemTypeOutput
}