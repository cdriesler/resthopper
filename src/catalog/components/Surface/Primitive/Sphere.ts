import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Sphere extends ResthopperComponent {

	public guid: string = "dabc854d-f50e-408a-b001-d043c7de151d";
	public name: string = "Sphere";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a spherical surface.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}