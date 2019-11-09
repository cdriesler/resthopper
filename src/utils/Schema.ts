import Schema from '../models/ResthopperSchema';

export function getSchemaOutput(schema: Schema): any {
    return schema.values[0].InnerTree['{ 0; }'][0].data;
}