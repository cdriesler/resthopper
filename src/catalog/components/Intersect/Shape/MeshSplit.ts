import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSplit extends ResthopperComponent {

	public guid: string = "afbf2fe0-4965-48d2-8470-9e991540093b";
	public name: string = "Mesh Split";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Mesh Mesh split";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}