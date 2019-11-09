import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Pipe extends ResthopperComponent {

	public guid: string = "c277f778-6fdf-4890-8f78-347efb23c406";
	public name: string = "Pipe";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a pipe surface around a rail curve.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}