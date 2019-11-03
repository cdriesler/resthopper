export default interface Schema {
    algo: string,
    pointer: string,
    values: 
        {
            ParamName: string,
            InnerTree: {
                [path: string]:
                    {
                        type: "",
                        data: any,
                    }[]
            },
            Keys: string[],
            Values:
                {
                    type: "",
                    data: any,
                }[]
        }[]
}