type itemType = {
    id: string
    name: string
}

export type GetItemUseCaseOutput = {
    id: string,
    name: string,
    itemType: itemType
}