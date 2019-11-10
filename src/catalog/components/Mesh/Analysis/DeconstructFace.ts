import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructFace extends ResthopperComponent {

	public guid: string = "aab142b1-b870-46de-8e86-654c9a554d90";
	public name: string = "Deconstruct Face";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a mesh face into its four corner indices.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}