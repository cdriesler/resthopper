import Schema from './../models/Schema';

export function getSchemaOutput(schema: Schema): any {
    return schema.values[0].InnerTree['{ 0; }'][0].data;
}