import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OcTree extends ResthopperComponent {

	public guid: string = "a59a68ad-fdd6-41dd-88f0-d7a6fb8d2e16";
	public name: string = "OcTree";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "A three-dimensional oc-tree structure";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}