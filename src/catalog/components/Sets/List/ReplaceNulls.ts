import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplaceNulls extends ResthopperComponent {

	public guid: string = "f3230ecb-3631-4d6f-86f2-ef4b2ed37f45";
	public name: string = "Replace Nulls";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Replace nulls or invalid data with other data";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}