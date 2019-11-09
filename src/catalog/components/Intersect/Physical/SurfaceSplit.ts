import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SurfaceSplit extends ResthopperComponent {

	public guid: string = "7db14002-c09c-4d7b-9f80-e4e2b00dfa1d";
	public name: string = "Surface Split";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Split a surface with a bunch of curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}