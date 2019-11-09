import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RuledSurface extends ResthopperComponent {

	public guid: string = "6e5de495-ba76-42d0-9985-a5c265e9aeca";
	public name: string = "Ruled Surface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface between two curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}