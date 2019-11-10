import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtrudeLinear extends ResthopperComponent {

	public guid: string = "8efd5eb9-a896-486e-9f98-d8d1a07a49f3";
	public name: string = "Extrude Linear";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude curves and surfaces along a straight path.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}