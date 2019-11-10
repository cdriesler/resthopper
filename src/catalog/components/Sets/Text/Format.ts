import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Format extends ResthopperComponent {

	public guid: string = "758d91a0-4aec-47f8-9671-16739a8a2c5d";
	public name: string = "Format";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Format some data using placeholders and formatting tags";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}