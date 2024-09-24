type ItemTypeOutput = {
    id: string
    name: string
}

export type GetItemsUseCaseOutput = {
    id: string;
    name: string;
    itemType: ItemTypeOutput
}