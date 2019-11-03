import Definition from "./../models/Definition";
import Schema from './../models/Schema';
import axios from 'axios';

export default class Request {

    public static async send(uri: string, definition: Definition): Promise<Schema> {
        const res = await axios.post(uri, JSON.stringify(definition.toRequest()));

        return (<Schema>JSON.parse(res.data));
    }

}