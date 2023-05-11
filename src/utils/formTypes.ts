
export type CreateFields = {
    xsSize: number,
    required: boolean,
    id: string,
    label: string,
    fullWidth: boolean,
    type: string,
    menuItems?: CreateMenu[]
}

type CreateMenu = {
    id: number,
    value: number | string,
    label: string
}