import Definition from "../models/ResthopperDefinition";
import Schema from '../models/ResthopperSchema';
import axios from 'axios';

export default class Request {

    public static async send(uri: string, definition: Definition): Promise<Schema> {
        const res = await axios.post(`${uri}/grasshopper`, JSON.stringify(definition.toRequest()));
        return <Schema>res.data;
    }

}