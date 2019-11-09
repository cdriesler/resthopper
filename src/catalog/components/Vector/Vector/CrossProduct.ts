import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CrossProduct extends ResthopperComponent {

	public guid: string = "2a5cfb31-028a-4b34-b4e1-9b20ae15312e";
	public name: string = "Cross Product";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Compute vector cross product.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}