import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnweldMesh extends ResthopperComponent {

	public guid: string = "47814a17-ca9e-4305-9400-3a9c8d71c19d";
	public name: string = "Unweld Mesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Unweld (split) creases in a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}