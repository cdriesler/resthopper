import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimSolid extends ResthopperComponent {

	public guid: string = "f0b70e8e-7337-4ce4-a7bb-317fc971f918";
	public name: string = "Trim Solid";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Cut holes into a shape with a set of solid cutters.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}