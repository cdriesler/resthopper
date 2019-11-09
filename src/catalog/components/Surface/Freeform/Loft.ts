import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Loft extends ResthopperComponent {

	public guid: string = "a7a41d0a-2188-4f7a-82cc-1a2c4e4ec850";
	public name: string = "Loft";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a lofted surface through a set of section curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}