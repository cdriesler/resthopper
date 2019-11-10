import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeFaces extends ResthopperComponent {

	public guid: string = "d6b43673-55dd-4e2f-95c4-6c69a14513a6";
	public name: string = "Merge Faces";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Merge all adjacent co-planar faces in a brep";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}